import { setProp } from './ApiChain.js';
export const map = (arr, ...args ) => Array.prototype.map.apply( arr, args );
export const csv = (arr, ...args ) => map( arr, ...args ).join(',');

export const collectionText = arr=> map(arr, e=>getNodeText(e)).join('')

const nop = ()=>''
,   isArr = a => Array.isArray(a)
,   isT = (a,t) => typeof a === t
,   isStr  = a => isT(a, 'string')
,   isNum  = a => isT(a, 'number')
,   isFn   = a => isT(a, 'function')
,   isNode = n => n && n.nodeType
,   inWC   = n => n.getRootNode().host
,   hasAssigned = n=> inWC(n) && n.assignedNodes
,   each = (arr, cb )=> (arr.forEach(cb),arr)
,   clear = n => hasAssigned(n)
               ? n.assignedNodes().forEach( a => a.remove() )
               : n.innerHTML='' ;

const node2text =   {   1:  n=>n.assignedNodes
                             ? collectionText(n.assignedNodes()) || collectionText(n.childNodes)
                             : [ 'SCRIPT','AUDIO','STYLE','CANVAS','DATALIST','EMBED','OBJECT'
                               , 'PICTURE','IFRAME','METER','NOSCRIPT'
                               , 'SELECT','OPTGROUP','PROGRESS','TEMPLATE','VIDEO'
                               ].includes(n.nodeName)? '' : n.innerText //collectionText(n.children)
                    ,   3: n=>n.nodeValue
                    ,   11:n=>collectionText(n.children)
                    };
export const getNodeText = n => (node2text[n.nodeType] || nop)(n);
export const setNodeText = ( n, val ) =>
    hasAssigned(n)
    ? n.assignedElements().forEach( e => e.innerText = val )
    : n.innerText = val;
export const assignParent = (arr,n)=>arr.map( e=>n.appendChild(e))
export const collectionHtml = arr => map( arr, n=>n.assignedElements
         ? map( n.assignedElements(), e=>e.outerHTML ).join('')
         : n.innerHTML
    ).join('');

export const html2NodeArr = html =>
{   const n = document.createElement('div');
    n.innerHTML = html;
    const wrapIfText = e=>{
        if( e.nodeType !== 3 )
            return e;
        const n = document.createElement('span');
        n.append(e);
        return n;
    };
    return [...n.childNodes].map(e=>(e.remove(),e)).map(wrapIfText);
};

export const addNodeHtml = ( n, val ) =>
{
    const set = ( to, v )=> ( v instanceof Node
                            ? v.remove() || to.append(v)
                            : html2NodeArr(v).forEach( e=>to.append(e) )
                            )
    ,  append = v => hasAssigned(n)
                   ? n.assign( ...n.assignedNodes()
                             , ...assignParent( each( html2NodeArr(v), e=>e.slot=n.name )
                                                , n.getRootNode().host ) )
                   : set(n,v);

    val instanceof NodeList || isArr(val)
        ? [ ...val ].forEach( append )
        : append(val);
}
export const setNodeHtml = ( n, val ) => { clear(n); addNodeHtml(n,val) };

    class
CssChainLocal extends Array
{
    attr(...args){  return args.length>1 ? (( args[2] ? this.$(args[2]) : this ).setAttribute(...args),this) : this.getAttribute(...args) }
    prop(...args){  return args.length>1 ? (( args[2] ? this.$(args[2]) : this ).forEach( el=>el[args[0]]=args[1]),this ): this[0][args[0]] }
    forEach( ...args){ Array.prototype.forEach.apply(this,args); return this }
    map( ...args){ return map(this,...args) }
    push(...args){ Array.prototype.push.apply(this,args); return this; }
    querySelector(css){ return new CssChainLocal().push( this.querySelectorAll(css)[0] )  }
    querySelectorAll(css){ return this.reduce( ($,el)=> $.push(...el.querySelectorAll(css) ), new CssChainLocal()) }
    $(...args){ return args.length ? this.querySelectorAll(...args) : this; }
    parent(css)
    {   const s = new Set()
        , add = n=> s.has(n) ? 0 : (s.add(n), n)
        , parentLoop = n=>  {   while( n=n.parentElement )
                                    if( n.matches(css) )
                                        return add(n);
                            };
        return CssChain(this.map( css ? parentLoop : n=>add(n.parentElement) ).filter(n=>n));
    }
    on(...args){ return this.addEventListener(...args) }
    append(val){ return this.forEach( n=> addNodeHtml(n,val)) }
    remove(...args)
    {   if( !args.length )
            {   this.forEach(el=>el.remove()); return new CssChainLocal() }
        return isFn(args[1]) ? this.removeEventListener(...args) : this.map(el=>el.matches(args[0])).filter(el=>el) ;
    }
    clear(){ return this.forEach(n=>clear(n)) }
    slot(...arr)
    {   const ret = this.$( arr.length
                        ? csv( arr[0].split(',')
                            , n=> ['""',"''"].includes(n) || !n
                                  ? `slot:not([name])`
                                  : `slot[name="${n}"]`
                            )
                        : 'slot');
        if( arr.length === 2 )
        {   ret.html( arr[ 1 ] );
            return this
        }
        return ret;
    }
    get innerText(){ return this.text() }
    set innerText( val ){ return this.text( val ) }
    text( val, css=undefined )
    {   const arr = css? this.$(css): this;
        if( val === undefined )
            return collectionText( arr );
        arr.forEach( isFn(val)
                    ? (n,i)=>setNodeText(n,val(n,i,arr))
                    : n=>setNodeText(n,val) );
        return this
    }
    get outerHTML(){ return this.map( e=>e.outerHTML ).join('') }
    set outerHTML( val )
    {   return this.forEach( (n,i,arr)=>
        {   const p = n.parentNode;
            html2NodeArr(isFn(val) ? val(n,i,arr): val )
                .forEach( e=> p.insertBefore( (arr[i]=e), n));
            n.remove();
        })
    }
    get innerHTML(){ return this.html() }
    set innerHTML( val ){ return this.html(val) }
    html( val, css=undefined )
    {   const arr = css? this.$(css): this;
        if( val === undefined )
            return collectionHtml( arr );
        arr.forEach( isFn(val)
               ? (n,i)=>setNodeHtml(n,val(n,i,arr))
               : n=>setNodeHtml(n,val) );
        return this
    }
    assignedElements(){ return CssChain([].concat( ...this.map( el=>el.assignedElements ? el.assignedElements():[] ) ) ) }
    assignedNodes(){ return CssChain([].concat( ...this.map( el=>el.assignedNodes ? el.assignedNodes():[] ) ) ) }
    cloneNode(...args){ return this.map( el=>el.cloneNode && el.cloneNode(...args) ) }
    clone( /* number|array */count, cb=undefined )
    {
        let arr = count;
        if( isNum(count) )
            arr = Array.from({length: count}, (v, i) => i);

        if( isArr(arr) )
        {   const ret = [];
            this.forEach( n => arr.forEach( (d,i) =>
            {   const m = n.ownerDocument.importNode(n,true)
                ,     x = cb && cb( m, d, i, arr );
                isStr(x)
                ? ret.push( ...html2NodeArr(x) )
                : isArr(x)
                    ? ret.push(...x)
                    : ret.push( isNode(x) ? x : m )
            }));
            return CssChain( ret );
        }
        const doc = count;
        return this.map( el=> doc? doc.importNode( el,true ): el.cloneNode ? el.cloneNode(true):Object.assign({},el) )
    }
    get firstElementChild(){ return CssChain(this.map( n=>n.firstElementChild).filter(n=>n)) }
    get firstChild(){ return CssChain(this.map( n=>n.firstChild).filter(n=>n)) }
    get childNodes(){ return CssChain([].concat( ...map( this, el=>[...(el.childNodes || [] )] ) ) ) }
    get children(){ return CssChain([].concat( ...map( this, el=>[...(el.children || [] )] ) ) ) }
}

const appliedTypes = new Set()
,     OBJ_prototype = Object.getPrototypeOf( {} );

    export function
applyPrototype( nodeOrTag, ApiChain )
{   const node = isStr(nodeOrTag) ? document.createElement(nodeOrTag) : nodeOrTag;
    if( appliedTypes.has(node.tagName) )
        return;
    appliedTypes.add( node.tagName );

    for( let k in node )
        if( !( k in ApiChain.prototype ) )
            setProp( node, k, ApiChain );

    for ( let proto; (proto= Object.getPrototypeOf(node)) !== OBJ_prototype && proto != null && !appliedTypes.has(proto)  ; )
    {   appliedTypes.add(proto);
        for( let k of Object.getOwnPropertyNames(proto) )
            if( !( k in ApiChain.prototype ) )
                setProp( node, k, ApiChain );
    }
}
Object.getOwnPropertyNames(window)
    .filter(key => key.startsWith('HTML') && key.endsWith('Element')&& key.length > 11 )
    .map( key=>key.substring(4,key.length-7).toLowerCase() )
    .forEach( tag=>applyPrototype( document.createElement(tag), CssChainLocal ) );

    export function
CssChain( css, el=document, protoArr=[] )
{
    const arr = 'string'===typeof css
                ? el.querySelectorAll( css )
                : isArr(css) ? css : [css? css.shadowRoot || css : document];

    if( isArr( protoArr ) )
    {   if( !protoArr.length )
            protoArr = [...arr].slice(0,256);
    }else
        protoArr = [ protoArr ];

    protoArr.forEach( el => applyPrototype(el,CssChainLocal) );
    const ret = new CssChainLocal();
    ret.push(...arr);
    return ret;
}
export default CssChain;

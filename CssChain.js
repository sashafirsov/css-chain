import { setProp } from './ApiChain.js';
export const map = (arr, ...args ) => Array.prototype.map.apply( arr, args );
export const csv = (arr, ...args ) => map( arr, ...args ).join(',');

export const collectionText = arr=> map(arr, e=>getNodeText(e)).join('')

const nop = ()=>''
,   isArr = a => Array.isArray(a)
,   isStr = a => typeof a === 'string'
,   inWC = n => n.getRootNode().host
,   hasAssigned = n=> inWC(n) && n.assignedElements
,   each = (arr, cb )=> (arr.forEach(cb),arr)
,   clear = n => hasAssigned(n)
               ? n.assignedElements().forEach( a => a.remove() )
               : n.innerHTML='' ;

const node2text =   {   1:  n=>n.assignedElements
                             ? collectionText(n.assignedElements()) || n.innerText
                             : ['SCRIPT','AUDIO','STYLE','CANVAS','DATALIST','EMBED','OBJECT','PICTURE','IFRAME','METER','NOSCRIPT'
                                   ,'SELECT','OPTGROUP','PROGRESS','TEMPLATE','VIDEO']
                                   .includes(n.nodeName) ? ''
                                                         : n.innerText //collectionText(n.children)
                    ,   3: n=>n.nodeValue
                    ,   11:n=>collectionText(n.children)
                    };
export const getNodeText = n => (node2text[n.nodeType] || nop)(n);
export const getTextNode = t => (t&&t.nodeType) ? t : document.createTextNode(t);
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
    return [...n.childNodes].map(e=>(e.remove(),e));
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
    attr(...args){ return args.length>1 ? this.setAttribute(...args) : this.getAttribute(...args) }
    prop(...args){ return args.length>1 ? this.forEach( el=>el[args[0]]=args[1]) : this[0][args[0]] }
    forEach( ...args){ Array.prototype.forEach.apply(this,args); return this }
    map( ...args){ return map(this,...args) }
    push(...args){ Array.prototype.push.apply(this,args); return this; }
    querySelector(css){ return new CssChainLocal().push( this.querySelectorAll(css)[0] )  }
    querySelectorAll(css){ return this.reduce( ($,el)=> $.push(...el.querySelectorAll(css) ), new CssChainLocal()) }
    $(...args){ return this.querySelectorAll(...args) }
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
        const p = args[0], t = typeof args[1];
        return 'function' === t ? this.removeEventListener(...args) : this.map(el=>el.matches(p)).filter(el=>el) ;
    }
    slot(...arr)
    {   return this.$( arr.length
                        ? csv( arr
                            , name=>
                                csv( name.split(',')
                                    , n=> ['""',"''"].includes(n) || !n
                                          ? `slot:not([name])`
                                          : `slot[name="${n}"]`
                                    )
                            )
                        : 'slot');
    }
    get innerText(){ return this.text() }
    set innerText( val ){ return this.text( val ) }
    text( val )
    {   return val === undefined
               ? collectionText( this )
               : this.forEach( typeof val === 'function'
                                ? (n,i)=>setNodeText(n,val(n,i,this))
                                : n=>setNodeText(n,val) );
    }
    get innerHTML(){ return this.html() }
    set innerHTML( val ){ return this.html(val) }
    html( val )
    {   return val === undefined
            ? collectionHtml( this )
            : this.forEach( typeof val === 'function'
               ? (n,i)=>setNodeHtml(n,val(n,i,this))
               : n=>setNodeHtml(n,val) );
    }
    assignedElements(){ return CssChain([].concat( ...this.map( el=>el.assignedElements ? el.assignedElements():[] ) ) ) }
    cloneNode(...args){ return this.map( el=>el.cloneNode && el.cloneNode(...args) ) }
    clone(doc){ return this.map( el=> doc? doc.importNode( el,true ): el.cloneNode ? el.cloneNode(true):Object.assign({},el) ) }
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

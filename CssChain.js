import { setProp } from './ApiChain.js';
export const map = (arr, ...args ) => Array.prototype.map.apply( arr, args );
export const csv = (arr, ...args ) => map( arr, ...args ).join(',');

export const collectionText = arr=> map(arr, e=>getNodeText(e)).join('')

const nop = ()=>''
,   isArr = a => Array.isArray(a)
,   isStr = a => typeof a === 'string';

const node2text =   {   1:  n=>n.assignedElements
                             ? collectionText(n.assignedElements()) || n.innerText
                             : ['SCRIPT','AUDIO','STYLE','CANVAS','DATALIST','EMBED','OBJECT','PICTURE','IFRAME','METER','NOSCRIPT'
                                   ,'SELECT','OPTGROUP','PROGRESS','TEMPLATE','VIDEO']
                                   .includes(n.nodeName) ? ''
                                                         : n.innerText //collectionText(n.children)
                    ,   3: n=>n.nodeValue
                    ,   4: n=>n.innerText
                    ,   11:n=>collectionText(n.children)
                    };
export const getNodeText = n => (node2text[n.nodeType] || nop)(n);

export const setNodeText = ( n, val ) =>
    n.assignedElements
        ? n.assignedElements().forEach( e => e.innerText = val )
        : n.innerText = val;

export const collectionHtml = arr => map(arr, e=>e.innerHTML).join('');
export const setNodeHtml = ( n, val ) =>
{
    if( isArr(val) && isStr(val[1]) )
        return n.innerHTML = val.join('');

    const set = ( to, v )=> to.append(v instanceof Node ? (v.remove(),v)
                                        : (''+v).startsWith('<')
                                            ? to.innerHTML = v
                                            : document.createTextNode(v) )
    ,  append = v => n.assignedElements
                   ? n.assignedElements().forEach( el => set(el,v) )
                   : set(n,v);
    n.innerHTML='';
    val instanceof NodeList || Array.isArray(val)
        ? [ ...val ].forEach( append )
        : n.innerHTML = val;
}
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
}

const appliedTypes = new Set()
,     OBJ_prototype = Object.getPrototypeOf( {} );

    export function
applyPrototype( nodeOrTag, ApiChain )
{   const node = ( typeof nodeOrTag === 'string' ) ? document.createElement(nodeOrTag) : nodeOrTag;
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
                : Array.isArray(css) ? css : [css.shadowRoot || css];

    if( Array.isArray( protoArr ) )
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

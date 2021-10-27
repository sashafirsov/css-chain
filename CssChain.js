import { setProp } from './ApiChain.js';

class CssChainLocal extends Array
{
    attr(...args){ return args.length>1 ? this.setAttribute(...args) : this.getAttribute(...args) }
    prop(...args){ return args.length>1 ? this.forEach( el=>el[args[0]]=args[1]) : this[0][args[0]] }
    forEach( ...args){ Array.prototype.forEach.apply(this,args); return this }
    map( ...args){ return Array.prototype.map.apply(this,args) }
    push(...args){ Array.prototype.push.apply(this,args); return this; }
    querySelector(css){ return new CssChainLocal().push( this.querySelectorAll(css)[0] )  }
    querySelectorAll(css){ return this.reduce( ($,el)=> $.push(...el.querySelectorAll(css) ), new CssChainLocal()) }
    parent(css)
    {   const s = new Set()
        , add = n=> s.has(n) ? 0 : (s.add(n), n)
        , parentLoop = n=>  {   while( n=n.parentElement )
                                    if( n.matches(css) )
                                        return add(n);
                            };
        return this.map( css ? parentLoop : n=>add(n.parentElement) ).filter(n=>n);
    }
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
    const arr = el.querySelectorAll( css );

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

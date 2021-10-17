import { setProp } from './ApiChain.js';

class CssChainLocal extends Array{}
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

    protoArr.map( tag => tag.tagName ? tag : document.createElement(tag) )
        .forEach( el => applyPrototype(el,CssChainLocal) );
    const ret = new CssChainLocal();
    ret.push(...arr);
    return ret;
}
export default CssChain;

const Prototype2ApiChain = new Map();
const OBJ_prototype = Object.getPrototypeOf( {} );

    export const
setProp = ( refObj, k, ApiChainLocal )=>
{
    if( typeof refObj[ k ] == 'function' )
    {   ApiChainLocal.prototype[ k ] = function( ...args )
        {   if( k.startsWith('get') )
                return this.length ? this[0][k](...args) : undefined;
            this.forEach( el => el[ k ]( ...args ) );
            return this;
        }
    }else
    {   Object.defineProperty( ApiChainLocal.prototype, k,
        {   get  : function(){ return this.length ? this[ 0 ][ k ] : undefined }
        ,   set: function( v )
            {  this.forEach( el => el[ k ] = v );
               return v
            }
        } );
    }
}
    function
applyPrototype( elementProto, refObj )
{   let ChainClass = Prototype2ApiChain.get(elementProto);
    if( ChainClass )
        return ChainClass;

    class ApiChainLocal extends Array{}

    const applied = {"constructor":1};
    for ( let obj=refObj; obj !== OBJ_prototype && obj != null ; obj = Object.getPrototypeOf(obj))
    {
        for( let k of Object.getOwnPropertyNames(obj) )
            if( !applied[k])
            {   setProp( refObj, k, ApiChainLocal );
                applied[k]=1;
            }
    }
    Prototype2ApiChain.set(elementProto, ApiChainLocal);
    return ApiChainLocal;
}
    export function
ApiChain( elOrArr, elementProto = undefined )
{
    const isArr = Array.isArray( elOrArr );
    const arr =  isArr ? elOrArr : [ elOrArr ];
    if( ! elementProto )
        elementProto = Object.getPrototypeOf( isArr ? elOrArr[0] : elOrArr );
    const refObj = arr[0];
    if( elementProto === OBJ_prototype )
    {
        class ApiChainLocal extends Array{}

        for( let k in refObj )
            setProp( refObj, k, ApiChainLocal );
        const ret = new ApiChainLocal();
        ret.push(...arr);
        return ret;
    }

    // class object
    const ApiChain = applyPrototype( elementProto, refObj );

    const ret = new ApiChain();
    ret.push(...arr);
    return ret;
}
export default ApiChain;

# api-chain
ApiChain and CssChain JS. Collection API inherits the element one.

Demo and test sources reside in [api-chain](https://github.com/sashafirsov/api-chain-test) project.

# cssChain - intiniated by css selector from HTMLElement API
Registered interfaces are taken from window object by `window.HTML*Element` pattern. To use API from custom elements, add those in array of last 

## collection use same API as members. 

Api selected either from elements in collection or from `window.HTML*Element`.
```js
import {CssChain as $} from 'api-chain/CssChain.js`;
$('input').value=''; // set all INPUT elements on page value to blank string
$('input').forEach( (el,i) => el.value=i ) // all array methods available
$('[type="checkbox"]')
  .addEventListener('click' ,function(){  }) // methods are called for each element
  .addEventListener('change',function(){ this.checked; }) // and could be chained
  .on( 'hover", ()=>showTooltip() ) // 'on' is alias to `addEventListener`
```

# optimization
API simulation is expensive when done on each occasion. Pre-generated API wrappers could be added on app load time. CssChain on module load applied the whole set of `window.HTML*Element`. 

In the call of ApiChain the last parameter is an array of prototype objects. The classes listed in this array would be stored in global map and generated API would be reused next time same class is listed within last parameter.

```js
class A{ f1(){} } class B{ f2(){} }
const a = new A, b = new A;
ApiChain( [a,b] ).f1().f2() // would generate API on each call
ApiChain( [], [A,B] ) // would generate from prototypes array on 1st call
ApiChain( [a,b], [A,B] ).f1().f2() // would reuse API generated on 1st call
```

 

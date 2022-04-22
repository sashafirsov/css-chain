# ApiChain and CssChain JS. 
_HTML template/slot and DOM manipulation library_

_Collection API inherits the element API and Array._

[![git][github-image] GitHub](https://github.com/sashafirsov/css-chain)
| Demo: [css-chain](https://unpkg.com/css-chain-test@1.1.3/dist/demo.html)
| [tests project](https://github.com/sashafirsov/css-chain-test) 

[![NPM version][npm-image]][npm-url] [![coverage][coverage-image]][coverage-url]

# [CssChain.js](./CssChain.js)
## html elements methods
`CssChain` searches HTML by `css` and returns an Array inherited object which has 
all methods and properties of its elements.
When method is called, each element would invoke this method and then same CssChain object is returned.

| chained calls                                      | HTMLElement API                                        |                                        
|----------------------------------------------------|--------------------------------------------------------|
| [![chained call][css-chain-image]][css-chain-link] | [![chained call][element-api-image]][element-api-link] | 

```js
    CssChain( '*[title]', rootEL ).addEventListener( 'click', ev=> alert(ev.target.title) );
```
^^ adds event listener to all selected elements in `rootEl` DOM tree
```js
    CssChain( 'a' )
        .addEventListener( 'mouseover' , ev=> alert(ev.target.classList.add('hovered') ) )
        .addEventListener( 'mouseleave', ev=> alert(ev.target.classList.remove('hovered') ) )
        .on( 'focus'     , ev=> alert(ev.target.classList.add('focused') ) )
        .on( 'mouseleave', ev=> alert(ev.target.classList.remove('focused') ) )
```
^^ adds multiple event handlers in chainable dot notation.

# Typescript
`import CssChain from 'css-chain'` code has typings enabled by default. The chain type is a mixin of 
[HTMLElementMixin](HTMLElementMixin.d.ts) and array of this mixin. To add the type checking for custom element(s) 
CssChain accept generics parameter and needs at least once initialisation by 
3rd parameter as array of either custom element tags or classes. 

```typescript
import {CssChain as $ } from 'css-chain';

class DemoElement {  b:string; setB(_b: string) { this.b = _b; } }
customElements.define('demo-element', DemoElement );

const $X = $<DemoElement>('demo-element', el, ['demo-element']);

expect($X.b).to.equal('initial');
$X.setB('1');
```

## CssChain initialization
* `CssChain(css)` return mixin of [HTMLElementMixin](HTMLElementMixin.d.ts) and array
* `CssChain(css,from:Node|Node[]|CssChain)` css selector to be applied on node(s)
* `CssChain(css,from, protoArr)` -||- with prototype(s) for members and methods of CssChain, needed to support methods 
of web component 
 
To avoid passing the prototype each time, it could be initialized in module global scope:
```typescript
import {CssChain as $ } from 'css-chain';
// import or declare DemoElement
$([],[],[DemoElement]);
// now all methods and members of DemoElement available in CssChain everywhere.
```

## special methods
* `forEach()` - same as [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  returns CssChain
* `map()` - same as [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  returns new CssChain with elements from callback
* `push(...arr)` - same as [Array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  returns appended CssChain
* `querySelector(css)` - selects 1st element, returns CssChain
* `querySelectorAll(css)` - selects all children matching `css` , returns CssChain
* `$` - alias to `querySelectorAll()`
* `attr(name)` (alias for `getAttribute`) returns 1st element attribute value or `undefined` for empty collection
* `attr(name, value)` (alias for `setAttribute`) sets elements attribute, returns CssChain
* `attr(name, value,css)` (alias for `setAttribute`) sets `css`-defined sub-tree elements attribute, returns CssChain
* `prop(name)`  returns 1st element property value or `undefined` for empty collection
* `prop(name, value)`  sets elements attribute, returns CssChain
* `prop(name, value, css)`  sets `css`-defined sub-tree elements attribute, returns CssChain
* `parent()` - set of immediate parents of current collection, duplications removed
* `parent(css)` - set of parents of current set which 
  [matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)
  the selector, duplications removed
* `on(eventName, cb)` - alias to [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* `remove(eventName, cb)` - alias to [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
* `remove()` - delete all nodes, returns empty CssChain
* `erase()` - removes content of collection nodes, collection nodes remain
* `txt()` - returns text of whole collection
* `txt(val | cb(el,i,arr))` - sets text for each element from `val` or callback
* `txt( val, css )` sets text for children elements defined by css, returns original collection
* `html()` - returns concatenated innerHTML of collection
* `html( cb(el,i,arr) )` - sets innerHTML of each collection element
* `html(htmlText)` - sets innerHTML of each collection element
* `html(strArr|NodeList)` - array duplicated within each collection element
* `html( val, css )` sets html for children elements defined by css. `val` type is one of above. Returns original collection
* `cloneNode(deep)` - returns collection of cloned elements of current one by [Node.cloneNode(deep)](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)
* `clone()` - clone nodes(deep) or objects(shallow). Returns cloned collection 
* `clone(doc)` - clone nodes to be inserted into document using [Document.importNode()](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode)
* `clone( count, cb( clonedNode, index ) )` when callback result is a string or node it is used as return value
* `clone( arr )` alias of `clone(arr.length)`
* `clone( arr, cb( clonedNode, dataItem, index, arr ) )` call callback after clone
* `append( html )`,`append( html[] )`, `append( node[] )` append HTML text or nodes

## Light DOM
[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) and its twin `Light DOM` allows 
to use template and work with dynamic content withing template. 
Both often represent the content of [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) 
as convenient way to generate DOM subtree by JavaScript.

In the `light DOM` as opposite to `Shadow DOM`
the render root is part of usual DOM without engaging the shadowRoot. 
There the template clone would take a render root DOM subtree payload as the source for its `slot` assignment. 
Once slots are populated into this clone, it would replace the render root content. 

Of course such benefits of shadow DOM as template reuse and CSS encapsulation are lost in light DOM. But the modular 
development with templates, HTML5 standard dynamic content use convention and API are still around. 

### global CSS 
is available for styling the light DOM components, which could be advantage in some environments where css encapsulation 
of shadow DOM in web components prevents usual css styling. 

### Light DOM API
* `template()` would render the current node as a template with immediate children with `slot='xxx'`
as assignedNodes payload for `<slot name='xxx'>`. There is no default slot in such case as the inner DOM serves the
default content. 
* `template(css)`, typically `template('template')` would extract the template defined by selector, 
clone it with assigned slots from remaining children  
* `template(node)` the children are used as slot content within node clone which is set as a child  

## slots
`<slot name='xxx'></slot>` is an HTML tag, a marker where dynamic content would be placed. 
It works with shadow and light DOM in same manner.

When used with `template()` or by shadow DOM, dynamic content is taken from DOM subtree marked by `slot='xxx'` attribute.

Otherwise `slot` content could be manipulated by JS API: 
* `slots()` - returns all slots
* `slots('')` - returns slot without name
* `slots(',name1,name2...')` - returns named slots. Blank name defines unnamed(default) slot 
* `slots(name, val | cb(el,i,arr) )` assigns slot content, alias to [HTMLSlotElement.assign(nodes)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assign)
    when `cb` is defined slots content is set by `html(cb)`  
* `slots().innerText`,`slots().innerHTML`, `slots().txt()`, `slots().html()` sets slotted content

## html elements properties
When property is assigned to collection, this property would be set for all elements in collection.
The property get would return property from 1st element.
```js
    import { CssChain as $ } from '../src/CssChain.js';
    $( 'input' ).value = 'not defined'; // all INPUT elements would have new value set
    v = $( 'input' ).prop( value,'not defined' ); // same as ^^
    let  v = $( 'input' ).value; // variable would receive the 1st INPUT element value
    v = $( 'input' ).prop( value ); // same as ^^
```
# [ApiChain.js](./ApiChain.js)
## Array of raw objects
```js
    $([ {a:1},{a:2} ]).a=1;    // all arr elements property `a` set to 1
    v = $([ {a:1},{a:2} ]).a;  // 1st element property `a` is returned, i.e. 1
    $( [ { a:1,f(v){ this.a=v} }, { b:2,f(v){ this.b=v}} ])
        .f(3); // method called on each element, result [{a:3},{b:3}]
```
## Array of class objects
Could be initiated in same fashion as raw objects.
But for performance better to provide the reference object as a second parameter:
```js
    class A{ f(){} }
    const x = new A(), y = new A();
    $( [x,y], A ).f()
```
# cssChain - initiated by css selector from HTMLElement API
Registered interfaces are taken from window object by `window.HTML*Element` pattern. 
To use API from custom elements, add those in array of last 

Api selected either from elements in collection or from `window.HTML*Element`.
```js
import {CssChain as $} from 'api-chain/CssChain.js';
$('input').value=''; // set all INPUT elements on page value to blank string
$('input').forEach( (el,i) => el.value=i ) // all array methods available
$('[type="checkbox"]')
  .prop( 'checked', false ) // set property and return same CssChain 
  .addEventListener('click' ,function(){  }) // methods are called for each element
  .addEventListener('change',function(){ this.checked; }) // and could be chained
  .on( 'hover', ()=>showTooltip() ) // 'on' is alias to `addEventListener`
  
const firstFormUrl = $('form').action; // returns property valuye of 1st element in collection.
const firstLinkUrl = $('a').href; // returns property valuye of 1st element in collection.
$('a').prop('href'); // same as above
$('a').attr('href'); // same as getAttribute() for 1st element in collection

```

# optimization
API simulation is expensive when done on each occasion. Pre-generated API wrappers could be added on app load time. CssChain on module load applied the whole set of `window.HTML*Element`. 

In the call of ApiChain the last parameter is an array of prototype objects. The classes listed in this array would be stored in global map and generated API would be reused next time same class is listed within last parameter.

```js
class A{ f1(){} } class B{ f2(){} }
const a = new A, b = new A;
ApiChain( [a,b] ).f1().f2() // would generate API on each call
ApiChain( [], [A,B] ) // would generate from prototypes array on 1st call
ApiChain( [a,b] ).f1().f2() // would reuse API generated in previous call
```
# Samples of use

[PokéAPI Explorer][PokeApi-explorer-url]:
[![PokéAPI Explorer][PokeApi-explorer-image]][PokeApi-explorer-url]

[github-image]:   https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg
[npm-image]:      https://img.shields.io/npm/v/css-chain.svg
[npm-url]:        https://npmjs.org/package/css-chain
[coverage-image]: https://unpkg.com/css-chain-test@1.1.3/coverage/coverage.svg
[coverage-url]:   https://unpkg.com/css-chain-test@1.1.3/coverage/lcov-report/index.html
[PokeApi-explorer-image]: https://unpkg.com/css-chain-test@1.1.3/src/PokeApi-Explorer.png
[PokeApi-explorer-url]: https://unpkg.com/css-chain-test@1.1.3/dist/PokeApi-Explorer.html
[css-chain-image]:      ChainedCalls.png
[css-chain-link]:       https://github.com/sashafirsov/css-chain-test/blob/9edc6edac6bc6c22c078e2fd987b37a7721947ee/src/PokeApi-Explorer.js#L140
[element-api-image]:    ElementAPI.png
[element-api-link]:     https://github.com/sashafirsov/css-chain-test/blob/9edc6edac6bc6c22c078e2fd987b37a7721947ee/src/PokeApi-Explorer.js#L150

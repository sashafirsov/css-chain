# TEMPLATE light dom (no shadow)
By `CssChain().template(template)` &lt;template&gt; is used for DOM rendering without 
[attached shadowRoot](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots). 

It is visually compatible with native browser implementation plus given ability to use SLOT for the 
attributes of elements within `template` and applying multiple slots with same name within `template`. 
Those features not yet a part of the w3c standard, proposals are: [Bind slot to attribute part](https://github.com/WICG/proposals/issues/77)
, [slot with same name within template](https://github.com/WICG/proposals/issues/76).

## rendered template DOM structure
### 0. Initial DOM content
the payload of `CssChain` is treated as slots payload of a web components. 
It is kept in DOM but is tagged by `hidden` attribute after `light-dom` content is generated.

To avoid flickering the initial content top elements could be hidden by CSS 
```css
.my-element>*{ display: none; }
.my-element>light-dom{ display:block; } /* or another visible */
```
The generated into `light-dom` template would not be hidden by this rule and will appear after `tempate()` call.

### 1. &lt;light-dom&gt;
* is added to  CssChain nodes as a 1st child and serves as template rendered container. 
* The template dom is cloned into &lt;light-dom&gt; 

### 2. slots
For each `&lt;slot&gt;` 
* look for `[slot="${name}"]` 
* if found, 
  * the element with matching `slot` attribute is cloned and injected before `&lt;slot&gt;`
  * `hidden` attribute is assigned to `&lt;slot&gt;`
* look for default slot `[slot=""]`
* if found,
  * treat as named slot
* otherwise
  * the initial DOM content is treated as `slot=""` except of elements which have a `slot` attribute 

Finally,
* all content elements are hidden by assigning `hidden` attribute.

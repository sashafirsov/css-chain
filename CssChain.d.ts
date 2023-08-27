/// <reference lib="dom" />
import { HTMLElementMixin as AnyElement } from './HTMLElementMixin';

/**
 * Create the CssChain with dual interface of Array and its member.
 * The member type is HTMLElement-inherited type.
 * @param css string
 * @param el Node|Node[] css selector to be applied on node(s)
 * @param protoArr prototype(s) for members and methods of CssChain
 */
export function CssChain<T= AnyElement>(css?: string|AnyElement|Array<AnyElement&T>|HTMLElement, el?: Document|Node|Node[], protoArr?: string|T|string[]): CssChainT<T>;

/** CssChain as Array and HTMLElementMixin dual interface */
export type CssChainT<T = AnyElement > = CssChainCollection<T> & T;
interface CssChainEvent<T>  extends Omit<Event, 'target'>{
    target:T
}
/** CssChain Array part */
export interface CssChainCollection<T> extends  Array<AnyElement&T>, Omit<AnyElement,'addEventListener'>
{
    forEach(callbackFn: (value: AnyElement&T, index: number, array: CssChainT<T>) => void, thisArg?: any) : CssChainT<T>;

    /** (alias for `getAttribute`) returns 1st element attribute value or `undefined` for empty collection */
    attr(name:string): CssChainT<T>;
    /** (alias for `setAttribute`) sets elements attribute, returns CssChain */
    attr(name:string, value:string): CssChainT<T>;
    /** (alias for `setAttribute`) sets elements attribute with value from callback, returns CssChain */
    attr(name:string, valueCallback:( (el:T, i:number, arr:CssChainCollection<T>)=>string) ): CssChainT<T>;
    /** (alias for `setAttribute`) sets `css`-defined subtree elements attribute, returns CssChain */
    attr(name:string, valueOrCallback:string | ( (el:T, i:number, arrCss:CssChainCollection<T>, arrThis:CssChainCollection<T>)=>string), css:string): CssChainT<T>;
    /** returns 1st element property value or `undefined` for empty collection */
    prop(name:string): any;
    /** sets elements property, returns CssChain */
    prop(name:string, valueOrCallback:any | ( (el:T, i:number, arr:CssChainCollection<T>)=>string)): CssChainT<T>;
    /** sets `css`-defined subtree elements property, returns CssChain */
    prop(name:string, valueOrCallback:any | ( (el:T, i:number, arrCss:CssChainCollection<T>, arrThis:CssChainCollection<T>)=>string), css:string): CssChainT<T>;
    /** selects 1st elements by @param css string from each collection element, returns CssChain */
    querySelector(css: string): CssChainT;
    /** selects child elements by @param css string, returns CssChain */
    querySelectorAll(css: string): CssChainT;
    /** alias to [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) */
    $(css: string): CssChainT<T>;
    /** direct parents of current set which matches parentNode, duplications removed */
    parent(): CssChainT<T>;
    /** set of parents of current set which
     [matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)
     the selector, duplications removed */
    parent(css: string): CssChainT<T>;

    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: T, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;
    /** alias to [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) */
    on( eventName:string, listener: (this:T , ev: CssChainEvent<T>) => any ): CssChainT<T>;
    on<E extends HTMLElement>( eventName:string, listener: (this:E , ev: CssChainEvent<T>) => any ): CssChainT<T>;
    on<E extends HTMLElement>( eventName:string, listener: (this:E ) => any ): CssChainT<T>;
    on( eventName:string, listener: (this:T) => any ): CssChainT<T>;
    /** appends html or node */
    append(htmlOrElement: string|string[]|Node|Node[]|CssChainT): CssChainT;
    /** delete all nodes, returns empty CssChain */
    remove(): CssChainT<T>;
    /** alias to [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) */
    remove(eventName:string,callback:any): CssChainT<T>;
    /** removes content of collection nodes, collection nodes remain */
    erase(): CssChainT<T>;
    /** returns text of whole collection */
    txt(): string;
    /** sets text for each element from `val`  */
    txt(val: string): CssChainT<T>;
    /** sets text for each element from callback */
    txt( valCb: (el:T,i:number,arr:CssChainCollection<T>)=>string): CssChainT<T>;
    /** sets text for each element from `val`  */
    txt(val: string, css: string|CssChainCollection<T>): CssChainT<T>;
    /** sets text for each element from callback */
    txt( valCb: (el:T,i:number,arrCss:CssChainCollection<T>,arrThis:CssChainCollection<T>)=>string, css: string|CssChainCollection<T>): CssChainT<T>;
    /** sets text for children elements defined by css, returns original collection */
    txt(val: any, css: string|CssChainCollection<T>): CssChainT<T>;

    /** returns concatenated innerHTML of collection */
    html(): string;
    /** sets innerHTML of each collection element */
    html( callback: ((el:T,i:number,arr:CssChainCollection<T>)=>string) ): CssChainT<T>;
    /** sets innerHTML of each collection element */
    html( htmlStr: string): CssChainT<T>;
    /** array duplicated within each collection element */
    html( htmlStrArr: string[] | T[] ): CssChainT<T>;
    /** sets html for children elements defined by css. `val` type is one of above. Returns original collection */
    html( val: string, css: string ): CssChainT<T>;
    /** returns collection of cloned elements of current one by [Node.cloneNode(deep)](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode) */
    cloneNode(...args: any[]): CssChainT;
    /** clone nodes(deep) or objects(shallow). Returns cloned collection */
    clone(): CssChainT<T>;
    /** clone nodes to be inserted into document using [Document.importNode()](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode) */
    clone(doc:Document): CssChainT<T>;
    /** when callback result is a string or node it is used as return value */
    clone(count: number, cb: ((clonedNode:T, index:number)=>void) ): CssChainT<T>;
    /** alias of `clone(arr.length) */
    clone( arr: any[] | CssChainCollection<T> ): CssChainT<T>;
    /** call callback after clone */
    clone( arr: any[] | CssChainCollection<T>, callback:(( clonedNode:T, dataItem:any, index:number, arr:any[] )=>void) ): CssChainT<T>;
    /** append HTML text or nodes */
    append( html:string | string[] | Node[] | CssChainT ): CssChainT<T>;
    /** returns all slots */
    slots(): CssChainT<T>;
    /** `slots('')` - returns slot without name <br/>
     * `slots(',name1,name2...')` - returns named slots. Blank name defines unnamed(default) slot  */
    slots(nameCsv:string): CssChainT<T>;
    /** slots(name, val | cb(el,i,arr) )` assigns slot content, alias to [HTMLSlotElement.assign(nodes)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assign)
     when `cb` is defined slots content is set by `html(cb)` */
    slots(nameCsv:string, val: string|Node|(((name:string,i:number,arr:CssChainCollection<T>)=>string))): CssChainT<T>;

    /** would render the current node as a template with immediate children with `slot='xxx'`
     as assignedNodes payload for `<slot name='xxx'>`. There is no default slot in such case as the inner DOM serves the
     default content. */
    template(): CssChainT<T>;
    /** typically `template('template')` would extract the template defined by selector,
     clone it with assigned slots from remaining children */
    template(css:string): CssChainT<T>;
    /** the children are used as slot content within node clone which is set as a child */
    template(node:Node): CssChainT<T>;

    /** returns a sequence of the elements assigned to this slot (and no other nodes).
     *
     * If the flatten *option* is set to *true*, it returns a sequence of both the elements assigned to this slot,
     * as well as the elements assigned to any other slots that are descendants of this slot.
     * If no assigned elements are found, it returns the slot's fallback content.
     * [mdn](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements) */
    assignedElements(options?: AssignedNodesOptions): CssChainT;
    /** returns a sequence of the nodes assigned to this slot (and no other nodes).
     *
     * If the flatten *option* is set to *true*, it returns a sequence of both the elements assigned to this slot,
     * as well as the elements assigned to any other slots that are descendants of this slot.
     * If no assigned elements are found, it returns the slot's fallback content.
     * [mdn](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedNodes) */
    assignedNodes(f: any): CssChainT;

    /** retrieves firstElementChild for each collection element */
    get firstElementChild(): CssChainT<T>;

    /** retrieves firstChild for each collection element */
    get firstChild(): CssChainT<T>;
    /** retrieves child nodes for each collection element */
    get childNodes(): CssChainT<T>;
    /** retrieves children nodes for each collection element */
    get children(): CssChainT<T>;
}
export default CssChain;

/// <reference lib="dom" />
import { HTMLElementMixin as AnyElement } from './HTMLElementMixin';

/**
 * Create the CssChain with dual interface of Array and its member.
 * The member type is HTMLElement-inherited type.
 * @param css string
 * @param el Node|Node[] css selector to be applied on node(s)
 * @param protoArr prototype(s) for members and methods of CssChain
 */
export function CssChain<T= AnyElement>(css?: string|AnyElement|Array<AnyElement&T>|HTMLElement, el?: Document|Node|Node[], protoArr?: string|T|string[]): CssChainCollection<T>&T;

/** CssChain as Array and HTMLElementMixin dual interface */
export type CssChainT<T = AnyElement > = CssChainCollection<T> & T;

/** CssChain Array part */
export interface CssChainCollection<T> extends  Array<AnyElement&T>, AnyElement
{
    forEach(callbackfn: (value: AnyElement&T, index: number, array: CssChainCollection<T>) => void, thisArg?: any) : CssChainCollection<T>;

    /** (alias for `getAttribute`) returns 1st element attribute value or `undefined` for empty collection */
    attr(name:string): CssChainCollection<T>;
    /** (alias for `setAttribute`) sets elements attribute, returns CssChain */
    attr(name:string, value:string): CssChainCollection<T>;
    /** (alias for `setAttribute`) sets `css`-defined sub-tree elements attribute, returns CssChain */
    attr(name:string, value:string, css:string): CssChainCollection<T>;
    /** returns 1st element property value or `undefined` for empty collection */
    prop(name:string): any;
    /** sets elements attribute, returns CssChain */
    prop(name:string, value:any): CssChainCollection<T>;
    /** sets `css`-defined sub-tree elements attribute, returns CssChain */
    prop(name:string, value:any, css:string): CssChainCollection<T>;
    /** selects 1st elements by @param css string from each collection element, returns CssChain */
    querySelector(css: string): CssChainT;
    /** selects child elements by @param css string, returns CssChain */
    querySelectorAll(css: string): CssChainT;
    /** alias to [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) */
    $(css: string): CssChainCollection<T>;
    /** set of parents of current set which
     [matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)
     the selector, duplications removed */
    parent(css: string): CssChainCollection<T>;
    /** alias to [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) */
    on( eventName:string, listener: (ev: Event) => any ): CssChainCollection<T>;
    /** appends html or node */
    append(htmlOrElement: string|string[]|Node|Node[]|CssChainT): CssChainT;
    /** delete all nodes, returns empty CssChain */
    remove(): CssChainCollection<T>;
    /** alias to [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) */
    remove(eventName:string,callback:any): CssChainCollection<T>;
    /** removes content of collection nodes, collection nodes remain */
    erase(): CssChainCollection<T>;
    /** returns text of whole collection */
    txt(): string;
    /** sets text for each element from `val` or callback */
    txt(val: string | ((el:T,i:number,arr:CssChainCollection<T>)=>string), css: string|CssChainCollection<T>): CssChainCollection<T>;
    /** sets text for children elements defined by css, returns original collection */
    txt(val: any, css: string|CssChainCollection<T>): CssChainCollection<T>;

    /** returns concatenated innerHTML of collection */
    html(): string;
    /** sets innerHTML of each collection element */
    html( callback: ((el:T,i:number,arr:CssChainCollection<T>)=>string) ): CssChainCollection<T>;
    /** sets innerHTML of each collection element */
    html( htmlStr: string): CssChainCollection<T>;
    /** array duplicated within each collection element */
    html( htmlStrArr: string[] | T[] ): CssChainCollection<T>;
    /** sets html for children elements defined by css. `val` type is one of above. Returns original collection */
    html( val: string, css: string ): CssChainCollection<T>;
    /** returns collection of cloned elements of current one by [Node.cloneNode(deep)](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode) */
    cloneNode(...args: any[]): CssChainT;
    /** clone nodes(deep) or objects(shallow). Returns cloned collection */
    clone(): CssChainCollection<T>;
    /** clone nodes to be inserted into document using [Document.importNode()](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode) */
    clone(doc:Document): CssChainCollection<T>;
    /** when callback result is a string or node it is used as return value */
    clone(count: number, cb: ((clonedNode:T, index:number)=>void) ): CssChainCollection<T>;
    /** alias of `clone(arr.length) */
    clone( arr: any[] | CssChainCollection<T> ): CssChainCollection<T>;
    /** call callback after clone */
    clone( arr: any[] | CssChainCollection<T>, callback:(( clonedNode:T, dataItem:any, index:number, arr:any[] )=>void) ): CssChainCollection<T>;
    /** append HTML text or nodes */
    append( html:string | string[] | Node[] | CssChainT ): CssChainCollection<T>;
    /** returns all slots */
    slots(): CssChainCollection<T>;
    /** `slots('')` - returns slot without name <br/>
     * `slots(',name1,name2...')` - returns named slots. Blank name defines unnamed(default) slot  */
    slots(nameCsv:string): CssChainCollection<T>;
    /** slots(name, val | cb(el,i,arr) )` assigns slot content, alias to [HTMLSlotElement.assign(nodes)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assign)
     when `cb` is defined slots content is set by `html(cb)` */
    slots(nameCsv:string, val: string|Node|(((name:string,i:number,arr:CssChainCollection<T>)=>string))): CssChainCollection<T>;

    /** would render the current node as a template with immediate children with `slot='xxx'`
     as assignedNodes payload for `<slot name='xxx'>`. There is no default slot in such case as the inner DOM serves the
     default content. */
    template(): CssChainCollection<T>;
    /** typically `template('template')` would extract the template defined by selector,
     clone it with assigned slots from remaining children */
    template(css:string): CssChainCollection<T>;
    /** the children are used as slot content within node clone which is set as a child */
    template(node:Node): CssChainCollection<T>;

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
    get firstElementChild(): CssChainCollection<T>;

    /** retrieves firstChild for each collection element */
    get firstChild(): CssChainCollection<T>;
    /** retrieves child nodes for each collection element */
    get childNodes(): CssChainCollection<T>;
    /** retrieves children nodes for each collection element */
    get children(): CssChainCollection<T>;
}
export default CssChain;

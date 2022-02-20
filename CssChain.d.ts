/// <reference lib="dom" />
import { HTMLElementMixin as AnyElement } from './HTMLElementMixin';

// export function applyPrototype(nodeOrTag: any, ApiChain: any): void;
// export function map(arr: any, ...args: any[]): any;
// export function csv(arr: any, ...args: any[]): any;
// export function collectionText(arr: any): any;
// export function getNodeText(n: any): any;
// export function setNodeText(n: any, val: any): any;
// export function assignParent(arr: any, n: any): any;
// export function collectionHtml(arr: any): any;
// export function html2NodeArr(html: any): any[];
// export function addNodeHtml(n: any, val: any): void;
// export function setNodeHtml(n: any, val: any): void;

/**
 * Create the CssChain with dual interface of Array and its member.
 * The member type is HTMLElement-inherited type.
 * @param css string
 * @param el Node|Node[] css selector to be applied on node(s)
 * @param protoArr prototype(s) for members and methods of CssChain
 */
export function CssChain<T= AnyElement>(css?: string|AnyElement|Array<AnyElement&T>, el?: Document|Node, protoArr?: string|T|string[]): CssChainCollection<T>&T;

/** CssChain as Array and HTMLElementMixin dual interface */
export type CssChainT<T = AnyElement > = CssChainCollection<T> & T;

/** CssChain Array part */
export interface CssChainCollection<T> extends  Array<AnyElement&T>, AnyElement
{
    forEach(callbackfn: (value: AnyElement&T, index: number, array: CssChainCollection<T>) => void, thisArg?: any) : CssChainCollection<T>;


    attr(...args: any[]): any;
    prop(...args: any[]): any;
    /** selects 1st elements by @param css string from each collection element, returns CssChain */
    querySelector(css: string): CssChainT;
    /** selects child elements by @param css string, returns CssChain */
    querySelectorAll(css: any): CssChainT;
    /** alias to [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) */
    $(css: string): CssChainCollection<T>;
    /** returns collection of parents which match @param css string */
    parent(css: string): CssChainCollection<T>;
    /** alias to [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) */
    on(...args: any[]): CssChainCollection<T>;
    /** appends html or node */
    append(htmlOrElement: string|string[]|Node|Node[]|CssChainT): CssChainT;
    /** delete all nodes, returns empty CssChain */
    remove(): CssChainCollection<T>;
    /** alias to [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) */
    remove(eventName:string,callback:any): CssChainCollection<T>;
    /** removes content of collection nodes, collection nodes remain */
    /**
     * removes content of collection nodes, collection nodes remain
     */
    erase(): CssChainCollection<T>;
    slots(...arr: any[]): any;
    template(n: any): CssChainCollection<T>;
    set innerText(arg: any);
    get innerText(): any;

    txt(val: any): CssChainCollection<T>;
    txt(val: any, css: string|CssChainCollection<T>): CssChainCollection<T>;
    set outerHTML(arg: any);
    get outerHTML(): any;
    set innerHTML(arg: any);
    get innerHTML(): any;
    html(val: any, css?: any): any;
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
    cloneNode(...args: any[]): any;
    clone(count?: number, cb?: any): any;

    get firstElementChild(): CssChainCollection<T>;

    get firstChild(): CssChainCollection<T>;
    get childNodes(): CssChainCollection<T>;

    get children(): CssChainCollection<T>;
}
export default CssChain;

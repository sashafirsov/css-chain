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

/** CssChain as Array and Element */
export type CssChainT<T = AnyElement > = CssChainCollection<T> & T;

/** CssChain Array part */
export interface CssChainCollection<T> extends  Array<AnyElement&T>, AnyElement
{
    length:number;
    // addEventListener(type:string, listener:any, options?:any): CssChainCollection<T>;
    // removeEventListener(type:string, listener:any, options?:any): CssChainCollection<T>;
    type:typeof HTMLAnchorElement.prototype.type;
    referrerPolicy:typeof HTMLAnchorElement.prototype.referrerPolicy;
    elements:typeof HTMLFormElement.prototype.elements;
    min:typeof HTMLInputElement.prototype.min;
    max:typeof HTMLInputElement.prototype.max;
    htmlFor:typeof HTMLOutputElement.prototype.htmlFor;
    options:typeof HTMLSelectElement.prototype.options;
    size:typeof HTMLSelectElement.prototype.size;
    sizes:typeof HTMLLinkElement.prototype.sizes;
    content:typeof HTMLTemplateElement.prototype.content;
    cols:typeof HTMLTextAreaElement.prototype.cols;
    rows:typeof HTMLTextAreaElement.prototype.rows;
    value:typeof HTMLTextAreaElement.prototype.value;
    height:typeof HTMLVideoElement.prototype.height;
    width:typeof HTMLVideoElement.prototype.width;
    loop:typeof HTMLVideoElement.prototype.loop;

    slot:string;

    // foreach(callbackfn: (value: ChildNode, key: number, parent: NodeListOf<ChildNode>) => void, thisArg?: any) : void;
    // foreach(callbackfn: (value: AnyElement, index: number, array: AnyElement[]) => void, thisArg?: any) : void;
    // forEach(callbackfn: (value: ChildNode, key: number, parent: NodeListOf<ChildNode>) => void) : void;
    forEach(callbackfn: (value: AnyElement&T, index: number, array: (AnyElement&T)[]) => void, thisArg?: any) : void;
    // forEach(callbackfn:(  ( (value: AnyElement|ChildNode, key: number, parent: any|NodeListOf<ChildNode>) => void), thisArg?: any) : void;


    attr(...args: any[]): any;
    prop(...args: any[]): any;
    // querySelector(css: any): CssChainCollection<T>;
    // querySelectorAll(css: any): CssChainCollection<T>;
    $(css: string): CssChainCollection<T>;
    $(...args: any[]): CssChainCollection<T>;
    parent(css: any): CssChainCollection<T>;
    /** alias to [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) */
    on(...args: any[]): CssChainCollection<T>;
    // append(val: any): CssChainCollection<T>;
    /** delete all nodes, returns empty CssChain */
    remove(): CssChainCollection<T>;
    /** alias to [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) */
    remove(eventName:string,callback:any): CssChainCollection<T>;
    /** removes content of collection nodes, collection nodes remain */
    /**
     * removes content of collection nodes, collection nodes remain
     */
    erase(): CssChainCollection<T>;
    // @ts-ignore
    // slot(...arr: any[]): any;
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
    // @ts-ignore
    // assignedElements(): CssChainCollection<T>;
    // assignedNodes(f: any): CssChainCollection<T>;
    cloneNode(...args: any[]): any;
    clone(count?: number, cb?: any): any;
    // @ts-ignore
    get firstElementChild(): CssChainCollection<T>;
    // @ts-ignore
    get firstChild(): CssChainCollection<T>;
    get childNodes(): CssChainCollection<T>;
    // @ts-ignore
    get children(): CssChainCollection<T>;
}
export default CssChain;

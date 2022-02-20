import type { CssChainT} from './CssChain';

export interface HTMLElementMixin {

	accessKey:string;


	accessKeyLabel:string;


	autocapitalize:string;


	dir:string;


	draggable:boolean;


	hidden:boolean;


	innerText:string;


	lang:string;


	offsetHeight:number;


	offsetLeft:number;


	offsetParent:Element|null;


	offsetTop:number;


	offsetWidth:number;


	outerText:string;


	spellcheck:boolean;


	title:string;


	translate:boolean;


	attachInternals():CssChainT;


	click():CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions):CssChainT;


	attributes:NamedNodeMap;

/**  Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object. <br/>*/

	classList:DOMTokenList;

/**  Returns the value of element's class content attribute. Can be set to change it. <br/>*/

	className:string;


	clientHeight:number;


	clientLeft:number;


	clientTop:number;


	clientWidth:number;

/**  Returns the value of element's id content attribute. Can be set to change it. <br/>*/

	id:string;

/**  Returns the local name. <br/>*/

	localName:string;

/**  Returns the namespace. <br/>*/

	namespaceURI:string|null;


	onfullscreenchange:((this: Element, ev: Event) => any)|null;


	onfullscreenerror:((this: Element, ev: Event) => any)|null;


	outerHTML:string;

/**  Returns the node document. Returns null for documents. <br/>*/

	ownerDocument:Document|null;


	part:DOMTokenList;

/**  Returns the namespace prefix. <br/>*/

	prefix:string|null;


	scrollHeight:number;


	scrollLeft:number;


	scrollTop:number;


	scrollWidth:number;

/**  Returns element's shadow root, if any, and if shadow root's mode is "open", and null otherwise. <br/>*/

	shadowRoot:ShadowRoot|null;

/**  Returns the value of element's slot content attribute. Can be set to change it. <br/>*/

	slot:string;

/**  Returns the HTML-uppercased qualified name. <br/>*/

	tagName:string;

/**  Creates a shadow root for element and returns it. <br/>*/

	attachShadow(init: ShadowRootInit):CssChainT;

/**  Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise. <br/>*/

	closest<K extends keyof HTMLElementTagNameMap>(selector: K):CssChainT;

/**  Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise. <br/>*/

	closest<K extends keyof SVGElementTagNameMap>(selector: K):CssChainT;

/**  Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise. <br/>*/

	closest<E extends Element = Element>(selectors: string):CssChainT;

/**  Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise. <br/>*/

	getAttribute(qualifiedName: string):CssChainT;

/**  Returns element's attribute whose namespace is namespace and local name is localName, and null if there is no such attribute otherwise. <br/>*/

	getAttributeNS(namespace: string | null, localName: string):CssChainT;

/**  Returns the qualified names of all element's attributes. Can contain duplicates. <br/>*/

	getAttributeNames():CssChainT;


	getAttributeNode(qualifiedName: string):CssChainT;


	getAttributeNodeNS(namespace: string | null, localName: string):CssChainT;


	getBoundingClientRect():CssChainT;


	getClientRects():CssChainT;

/**  Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes. <br/>*/

	getElementsByClassName(classNames: string):CssChainT;


	getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K):CssChainT;


	getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K):CssChainT;


	getElementsByTagName(qualifiedName: string):CssChainT;


	getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string):CssChainT;


	getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string):CssChainT;


	getElementsByTagNameNS(namespace: string | null, localName: string):CssChainT;

/**  Returns true if element has an attribute whose qualified name is qualifiedName, and false otherwise. <br/>*/

	hasAttribute(qualifiedName: string):CssChainT;

/**  Returns true if element has an attribute whose namespace is namespace and local name is localName. <br/>*/

	hasAttributeNS(namespace: string | null, localName: string):CssChainT;

/**  Returns true if element has attributes, and false otherwise. <br/>*/

	hasAttributes():CssChainT;


	hasPointerCapture(pointerId: number):CssChainT;


	insertAdjacentElement(where: InsertPosition, element: Element):CssChainT;


	insertAdjacentHTML(position: InsertPosition, text: string):CssChainT;


	insertAdjacentText(where: InsertPosition, data: string):CssChainT;

/**  Returns true if matching selectors against element's root yields element, and false otherwise. <br/>*/

	matches(selectors: string):CssChainT;


	releasePointerCapture(pointerId: number):CssChainT;

/**  Removes element's first attribute whose qualified name is qualifiedName. <br/>*/

	removeAttribute(qualifiedName: string):CssChainT;

/**  Removes element's attribute whose namespace is namespace and local name is localName. <br/>*/

	removeAttributeNS(namespace: string | null, localName: string):CssChainT;


	removeAttributeNode(attr: Attr):CssChainT;

/**  Displays element fullscreen and resolves promise when done.

When supplied, options's navigationUI member indicates whether showing navigation UI while in fullscreen is preferred or not. If set to "show", navigation simplicity is preferred over screen space, and if set to "hide", more screen space is preferred. User agents are always free to honor user preference over the application's. The default value "auto" indicates no application preference. <br/>*/

	requestFullscreen(options?: FullscreenOptions):CssChainT;


	requestPointerLock():CssChainT;


	scroll(options?: ScrollToOptions):CssChainT;


	scroll(x: number, y: number):CssChainT;


	scrollBy(options?: ScrollToOptions):CssChainT;


	scrollBy(x: number, y: number):CssChainT;


	scrollIntoView(arg?: boolean | ScrollIntoViewOptions):CssChainT;


	scrollTo(options?: ScrollToOptions):CssChainT;


	scrollTo(x: number, y: number):CssChainT;

/**  Sets the value of element's first attribute whose qualified name is qualifiedName to value. <br/>*/

	setAttribute(qualifiedName: string, value: string):CssChainT;

/**  Sets the value of element's attribute whose namespace is namespace and local name is localName to value. <br/>*/

	setAttributeNS(namespace: string | null, qualifiedName: string, value: string):CssChainT;


	setAttributeNode(attr: Attr):CssChainT;


	setAttributeNodeNS(attr: Attr):CssChainT;


	setPointerCapture(pointerId: number):CssChainT;

/**  If force is not given, "toggles" qualifiedName, removing it if it is present and adding it if it is not present. If force is true, adds qualifiedName. If force is false, removes qualifiedName.

Returns true if qualifiedName is now present, and false otherwise. <br/>*/

	toggleAttribute(qualifiedName: string, force?: boolean):CssChainT;


	webkitMatchesSelector(selectors: string):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Returns node's node document's document base URL. <br/>*/

	baseURI:string;

/**  Returns true if node is connected and false otherwise. <br/>*/

	isConnected:boolean;

/**  Returns the last child. <br/>*/

	lastChild:ChildNode|null;

/**  Returns the next sibling. <br/>*/

	nextSibling:ChildNode|null;

/**  Returns a string appropriate for the type of node. <br/>*/

	nodeName:string;

/**  Returns the type of node. <br/>*/

	nodeType:number;


	nodeValue:string|null;

/**  Returns the parent element. <br/>*/

	parentElement:HTMLElement|null;

/**  Returns the parent. <br/>*/

	parentNode:ParentNode|null;

/**  Returns the previous sibling. <br/>*/

	previousSibling:ChildNode|null;


	textContent:string|null;


	appendChild<T extends Node>(node: T):CssChainT;

/**  Returns a copy of node. If deep is true, the copy also includes the node's descendants. <br/>*/

	cloneNode(deep?: boolean):CssChainT;

/**  Returns a bitmask indicating the position of other relative to node. <br/>*/

	compareDocumentPosition(other: Node):CssChainT;

/**  Returns true if other is an inclusive descendant of node, and false otherwise. <br/>*/

	contains(other: Node | null):CssChainT;

/**  Returns node's root. <br/>*/

	getRootNode(options?: GetRootNodeOptions):CssChainT;

/**  Returns whether node has children. <br/>*/

	hasChildNodes():CssChainT;


	insertBefore<T extends Node>(node: T, child: Node | null):CssChainT;


	isDefaultNamespace(namespace: string | null):CssChainT;

/**  Returns whether node and otherNode have the same properties. <br/>*/

	isEqualNode(otherNode: Node | null):CssChainT;


	isSameNode(otherNode: Node | null):CssChainT;


	lookupNamespaceURI(prefix: string | null):CssChainT;


	lookupPrefix(namespace: string | null):CssChainT;

/**  Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes. <br/>*/

	normalize():CssChainT;


	removeChild<T extends Node>(child: T):CssChainT;


	replaceChild<T extends Node>(node: Node, child: T):CssChainT;


	ATTRIBUTE_NODE:number;

/**  node is a CDATASection node. <br/>*/

	CDATA_SECTION_NODE:number;

/**  node is a Comment node. <br/>*/

	COMMENT_NODE:number;

/**  node is a DocumentFragment node. <br/>*/

	DOCUMENT_FRAGMENT_NODE:number;

/**  node is a document. <br/>*/

	DOCUMENT_NODE:number;

/**  Set when other is a descendant of node. <br/>*/

	DOCUMENT_POSITION_CONTAINED_BY:number;

/**  Set when other is an ancestor of node. <br/>*/

	DOCUMENT_POSITION_CONTAINS:number;

/**  Set when node and other are not in the same tree. <br/>*/

	DOCUMENT_POSITION_DISCONNECTED:number;

/**  Set when other is following node. <br/>*/

	DOCUMENT_POSITION_FOLLOWING:number;


	DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:number;

/**  Set when other is preceding node. <br/>*/

	DOCUMENT_POSITION_PRECEDING:number;

/**  node is a doctype. <br/>*/

	DOCUMENT_TYPE_NODE:number;

/**  node is an element. <br/>*/

	ELEMENT_NODE:number;


	ENTITY_NODE:number;


	ENTITY_REFERENCE_NODE:number;


	NOTATION_NODE:number;

/**  node is a ProcessingInstruction node. <br/>*/

	PROCESSING_INSTRUCTION_NODE:number;

/**  node is a Text node. <br/>*/

	TEXT_NODE:number;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean):CssChainT;

/**  Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise. <br/>*/

	dispatchEvent(event: Event):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean):CssChainT;


	ariaAtomic:string;


	ariaAutoComplete:string;


	ariaBusy:string;


	ariaChecked:string;


	ariaColCount:string;


	ariaColIndex:string;


	ariaColSpan:string;


	ariaCurrent:string;


	ariaDisabled:string;


	ariaExpanded:string;


	ariaHasPopup:string;


	ariaHidden:string;


	ariaKeyShortcuts:string;


	ariaLabel:string;


	ariaLevel:string;


	ariaLive:string;


	ariaModal:string;


	ariaMultiLine:string;


	ariaMultiSelectable:string;


	ariaOrientation:string;


	ariaPlaceholder:string;


	ariaPosInSet:string;


	ariaPressed:string;


	ariaReadOnly:string;


	ariaRequired:string;


	ariaRoleDescription:string;


	ariaRowCount:string;


	ariaRowIndex:string;


	ariaRowSpan:string;


	ariaSelected:string;


	ariaSetSize:string;


	ariaSort:string;


	ariaValueMax:string;


	ariaValueMin:string;


	ariaValueNow:string;


	ariaValueText:string;


	animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions):CssChainT;


	getAnimations(options?: GetAnimationsOptions):CssChainT;

/**  Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated. <br/>*/

	after(...nodes: (Node | string)[]):CssChainT;

/**  Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated. <br/>*/

	before(...nodes: (Node | string)[]):CssChainT;

/**  Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated. <br/>*/

	replaceWith(...nodes: (Node | string)[]):CssChainT;


	innerHTML:string;

/**  Returns the first following sibling that is an element, and null otherwise. <br/>*/

	nextElementSibling:Element|null;

/**  Returns the first preceding sibling that is an element, and null otherwise. <br/>*/

	previousElementSibling:Element|null;


	childElementCount:number;

/**  Returns the last child that is an element, and null otherwise. <br/>*/

	lastElementChild:Element|null;

/**  Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated. <br/>*/

	append(...nodes: (Node | string)[]):CssChainT;

/**  Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated. <br/>*/

	prepend(...nodes: (Node | string)[]):CssChainT;

/**  Returns the first element that is a descendant of node that matches selectors. <br/>*/

	querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K):CssChainT;

/**  Returns the first element that is a descendant of node that matches selectors. <br/>*/

	querySelector<K extends keyof SVGElementTagNameMap>(selectors: K):CssChainT;

/**  Returns the first element that is a descendant of node that matches selectors. <br/>*/

	querySelector<E extends Element = Element>(selectors: string):CssChainT;

/**  Returns all element descendants of node that match selectors. <br/>*/

	querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K):CssChainT;

/**  Returns all element descendants of node that match selectors. <br/>*/

	querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K):CssChainT;

/**  Returns all element descendants of node that match selectors. <br/>*/

	querySelectorAll<E extends Element = Element>(selectors: string):CssChainT;

/**  Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated. <br/>*/

	replaceChildren(...nodes: (Node | string)[]):CssChainT;


	assignedSlot:HTMLSlotElement|null;


	oncopy:((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any)|null;


	oncut:((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any)|null;


	onpaste:((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any)|null;


	addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;


	removeEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	style:CSSStyleDeclaration;


	contentEditable:string;


	enterKeyHint:string;


	inputMode:string;


	isContentEditable:boolean;

/**  Fires when the user aborts the download. <br/>*/

	onabort:((this: GlobalEventHandlers, ev: UIEvent) => any)|null;


	onanimationcancel:((this: GlobalEventHandlers, ev: AnimationEvent) => any)|null;


	onanimationend:((this: GlobalEventHandlers, ev: AnimationEvent) => any)|null;


	onanimationiteration:((this: GlobalEventHandlers, ev: AnimationEvent) => any)|null;


	onanimationstart:((this: GlobalEventHandlers, ev: AnimationEvent) => any)|null;


	onauxclick:((this: GlobalEventHandlers, ev: MouseEvent) => any)|null;

/**  Fires when the object loses the input focus. <br/>*/

	onblur:((this: GlobalEventHandlers, ev: FocusEvent) => any)|null;

/**  Occurs when playback is possible, but would require further buffering. <br/>*/

	oncanplay:((this: GlobalEventHandlers, ev: Event) => any)|null;


	oncanplaythrough:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Fires when the contents of the object or selection have changed. <br/>*/

	onchange:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Fires when the user clicks the left mouse button on the object <br/>*/

	onclick:((this: GlobalEventHandlers, ev: MouseEvent) => any)|null;


	onclose:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Fires when the user clicks the right mouse button in the client area, opening the context menu. <br/>*/

	oncontextmenu:((this: GlobalEventHandlers, ev: MouseEvent) => any)|null;


	oncuechange:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Fires when the user double-clicks the object. <br/>*/

	ondblclick:((this: GlobalEventHandlers, ev: MouseEvent) => any)|null;

/**  Fires on the source object continuously during a drag operation. <br/>*/

	ondrag:((this: GlobalEventHandlers, ev: DragEvent) => any)|null;

/**  Fires on the source object when the user releases the mouse at the close of a drag operation. <br/>*/

	ondragend:((this: GlobalEventHandlers, ev: DragEvent) => any)|null;

/**  Fires on the target element when the user drags the object to a valid drop target. <br/>*/

	ondragenter:((this: GlobalEventHandlers, ev: DragEvent) => any)|null;

/**  Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation. <br/>*/

	ondragleave:((this: GlobalEventHandlers, ev: DragEvent) => any)|null;

/**  Fires on the target element continuously while the user drags the object over a valid drop target. <br/>*/

	ondragover:((this: GlobalEventHandlers, ev: DragEvent) => any)|null;

/**  Fires on the source object when the user starts to drag a text selection or selected object. <br/>*/

	ondragstart:((this: GlobalEventHandlers, ev: DragEvent) => any)|null;


	ondrop:((this: GlobalEventHandlers, ev: DragEvent) => any)|null;

/**  Occurs when the duration attribute is updated. <br/>*/

	ondurationchange:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Occurs when the media element is reset to its initial state. <br/>*/

	onemptied:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Occurs when the end of playback is reached. <br/>*/

	onended:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Fires when an error occurs during object loading. <br/>*/

	onerror:OnErrorEventHandler;

/**  Fires when the object receives focus. <br/>*/

	onfocus:((this: GlobalEventHandlers, ev: FocusEvent) => any)|null;


	onformdata:((this: GlobalEventHandlers, ev: FormDataEvent) => any)|null;


	ongotpointercapture:((this: GlobalEventHandlers, ev: PointerEvent) => any)|null;


	oninput:((this: GlobalEventHandlers, ev: Event) => any)|null;


	oninvalid:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Fires when the user presses a key. <br/>*/

	onkeydown:((this: GlobalEventHandlers, ev: KeyboardEvent) => any)|null;

/**  Fires when the user presses an alphanumeric key. <br/>*/

	onkeypress:((this: GlobalEventHandlers, ev: KeyboardEvent) => any)|null;

/**  Fires when the user releases a key. <br/>*/

	onkeyup:((this: GlobalEventHandlers, ev: KeyboardEvent) => any)|null;

/**  Fires immediately after the browser loads the object. <br/>*/

	onload:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Occurs when media data is loaded at the current playback position. <br/>*/

	onloadeddata:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Occurs when the duration and dimensions of the media have been determined. <br/>*/

	onloadedmetadata:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Occurs when Internet Explorer begins looking for media data. <br/>*/

	onloadstart:((this: GlobalEventHandlers, ev: Event) => any)|null;


	onlostpointercapture:((this: GlobalEventHandlers, ev: PointerEvent) => any)|null;

/**  Fires when the user clicks the object with either mouse button. <br/>*/

	onmousedown:((this: GlobalEventHandlers, ev: MouseEvent) => any)|null;


	onmouseenter:((this: GlobalEventHandlers, ev: MouseEvent) => any)|null;


	onmouseleave:((this: GlobalEventHandlers, ev: MouseEvent) => any)|null;

/**  Fires when the user moves the mouse over the object. <br/>*/

	onmousemove:((this: GlobalEventHandlers, ev: MouseEvent) => any)|null;

/**  Fires when the user moves the mouse pointer outside the boundaries of the object. <br/>*/

	onmouseout:((this: GlobalEventHandlers, ev: MouseEvent) => any)|null;

/**  Fires when the user moves the mouse pointer into the object. <br/>*/

	onmouseover:((this: GlobalEventHandlers, ev: MouseEvent) => any)|null;

/**  Fires when the user releases a mouse button while the mouse is over the object. <br/>*/

	onmouseup:((this: GlobalEventHandlers, ev: MouseEvent) => any)|null;

/**  Occurs when playback is paused. <br/>*/

	onpause:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Occurs when the play method is requested. <br/>*/

	onplay:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Occurs when the audio or video has started playing. <br/>*/

	onplaying:((this: GlobalEventHandlers, ev: Event) => any)|null;


	onpointercancel:((this: GlobalEventHandlers, ev: PointerEvent) => any)|null;


	onpointerdown:((this: GlobalEventHandlers, ev: PointerEvent) => any)|null;


	onpointerenter:((this: GlobalEventHandlers, ev: PointerEvent) => any)|null;


	onpointerleave:((this: GlobalEventHandlers, ev: PointerEvent) => any)|null;


	onpointermove:((this: GlobalEventHandlers, ev: PointerEvent) => any)|null;


	onpointerout:((this: GlobalEventHandlers, ev: PointerEvent) => any)|null;


	onpointerover:((this: GlobalEventHandlers, ev: PointerEvent) => any)|null;


	onpointerup:((this: GlobalEventHandlers, ev: PointerEvent) => any)|null;

/**  Occurs to indicate progress while downloading media data. <br/>*/

	onprogress:((this: GlobalEventHandlers, ev: ProgressEvent) => any)|null;

/**  Occurs when the playback rate is increased or decreased. <br/>*/

	onratechange:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Fires when the user resets a form. <br/>*/

	onreset:((this: GlobalEventHandlers, ev: Event) => any)|null;


	onresize:((this: GlobalEventHandlers, ev: UIEvent) => any)|null;

/**  Fires when the user repositions the scroll box in the scroll bar on the object. <br/>*/

	onscroll:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Occurs when the seek operation ends. <br/>*/

	onseeked:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Occurs when the current playback position is moved. <br/>*/

	onseeking:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Fires when the current selection changes. <br/>*/

	onselect:((this: GlobalEventHandlers, ev: Event) => any)|null;


	onselectionchange:((this: GlobalEventHandlers, ev: Event) => any)|null;


	onselectstart:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Occurs when the download has stopped. <br/>*/

	onstalled:((this: GlobalEventHandlers, ev: Event) => any)|null;


	onsubmit:((this: GlobalEventHandlers, ev: SubmitEvent) => any)|null;

/**  Occurs if the load operation has been intentionally halted. <br/>*/

	onsuspend:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Occurs to indicate the current playback position. <br/>*/

	ontimeupdate:((this: GlobalEventHandlers, ev: Event) => any)|null;


	ontoggle:((this: GlobalEventHandlers, ev: Event) => any)|null;


	ontouchcancel:((this: GlobalEventHandlers, ev: TouchEvent) => any)|null|undefined;


	ontouchend:((this: GlobalEventHandlers, ev: TouchEvent) => any)|null|undefined;


	ontouchmove:((this: GlobalEventHandlers, ev: TouchEvent) => any)|null|undefined;


	ontouchstart:((this: GlobalEventHandlers, ev: TouchEvent) => any)|null|undefined;


	ontransitioncancel:((this: GlobalEventHandlers, ev: TransitionEvent) => any)|null;


	ontransitionend:((this: GlobalEventHandlers, ev: TransitionEvent) => any)|null;


	ontransitionrun:((this: GlobalEventHandlers, ev: TransitionEvent) => any)|null;


	ontransitionstart:((this: GlobalEventHandlers, ev: TransitionEvent) => any)|null;

/**  Occurs when the volume is changed, or playback is muted or unmuted. <br/>*/

	onvolumechange:((this: GlobalEventHandlers, ev: Event) => any)|null;

/**  Occurs when playback stops because the next frame of a video resource is not available. <br/>*/

	onwaiting:((this: GlobalEventHandlers, ev: Event) => any)|null;


	onwebkitanimationend:((this: GlobalEventHandlers, ev: Event) => any)|null;


	onwebkitanimationiteration:((this: GlobalEventHandlers, ev: Event) => any)|null;


	onwebkitanimationstart:((this: GlobalEventHandlers, ev: Event) => any)|null;


	onwebkittransitionend:((this: GlobalEventHandlers, ev: Event) => any)|null;


	onwheel:((this: GlobalEventHandlers, ev: WheelEvent) => any)|null;


	addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;


	removeEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	autofocus:boolean;


	dataset:DOMStringMap;


	nonce:string;


	tabIndex:number;


	blur():CssChainT;


	focus(options?: FocusOptions):CssChainT;

/**  Sets or retrieves the character set used to encode the object. <br/>*/

	charset:string;

/**  Sets or retrieves the coordinates of the object. <br/>*/

	coords:string;


	download:string;

/**  Sets or retrieves the language code of the object. <br/>*/

	hreflang:string;

/**  Sets or retrieves the shape of the object. <br/>

 Sets or retrieves the name of the object. <br/>

 Sets or retrieves the frame name. <br/>

 Sets or retrieves the value specified in the content attribute of the meta object. <br/>

 Sets or retrieves the name of an input parameter for an element. <br/>*/

	name:string;


	ping:string;


	referrerPolicy:string|ReferrerPolicy;

/**  Sets or retrieves the relationship between the object and the destination of the link. <br/>*/

	rel:string;


	relList:DOMTokenList;

/**  Sets or retrieves the relationship between the object and the destination of the link. <br/>*/

	rev:string;

/**  Sets or retrieves the shape of the object. <br/>*/

	shape:string;

/**  Sets or retrieves the window or frame at which to target content. <br/>*/

	target:string;

/**  Retrieves or sets the text of the object as a string. <br/>

 Sets or retrieves the text string specified by the option tag. <br/>*/

	text:string;

/**  Gets the classification and default behavior of the button. <br/>

 Returns the string "fieldset". <br/>

 Returns the content type of the object. <br/>

 Sets or retrieves the MIME type of the object. <br/>

 Returns the string "output". <br/>

 Sets or retrieves the content type of the resource designated by the value attribute. <br/>

 Sets or retrieves the MIME type for the associated scripting engine. <br/>

 Retrieves the type of select control based on the value of the MULTIPLE attribute. <br/>

 Gets or sets the MIME type of a media resource. <br/>

 Retrieves the CSS language in which the style sheet is written. <br/>

 Retrieves the type of control. <br/>*/

	type:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves a text alternative to the graphic. <br/>*/

	alt:string;

/**  Sets or gets whether clicks in this region cause action. <br/>*/

	noHref:boolean;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves the side on which floating objects are not to be positioned when any IHTMLBlockElement is inserted into the document. <br/>*/

	clear:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Gets or sets the baseline URL on which relative links are based. <br/>

 Sets or retrieves a destination URL or an anchor point. <br/>*/

	href:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	aLink:string;


	background:string;


	bgColor:string;


	link:string;


	onorientationchange:((this: HTMLBodyElement, ev: Event) => any)|null;


	vLink:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	disabled:boolean;

/**  Retrieves a reference to the form that the object is embedded in. <br/>*/

	form:HTMLFormElement|null;

/**  Overrides the action attribute (where the data on a form is sent) on the parent form element. <br/>*/

	formAction:string;

/**  Used to override the encoding (formEnctype attribute) specified on the form element. <br/>*/

	formEnctype:string;

/**  Overrides the submit method attribute previously specified on a form element. <br/>*/

	formMethod:string;

/**  Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option. <br/>*/

	formNoValidate:boolean;

/**  Overrides the target attribute on a form element. <br/>*/

	formTarget:string;


	labels:NodeListOf<HTMLLabelElement>|null;

/**  Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting. <br/>*/

	validationMessage:string;

/**  Returns a  ValidityState object that represents the validity states of an element. <br/>*/

	validity:ValidityState;

/**  Sets or retrieves the default or selected value of the control. <br/>

 Returns the value of the data at the cursor's current position. <br/>

 Sets or retrieves the value of a list item. <br/>

 Sets or retrieves the value which is returned to the server when the form control is submitted. <br/>

 Returns the element's current value.

Can be set, to change the value. <br/>

 Sets or retrieves the value of an input parameter for an element. <br/>

 Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value. <br/>

 Retrieves or sets the text in the entry field of the textArea element. <br/>*/

	value:string|number;

/**  Returns whether an element will successfully validate based on forms validation rules and constraints. <br/>*/

	willValidate:boolean;

/**  Returns whether a form will validate when it is submitted, without having to submit it. <br/>*/

	checkValidity():CssChainT;


	reportValidity():CssChainT;

/**  Sets a custom error message that is displayed when a form is submitted. <br/>*/

	setCustomValidity(error: string):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Gets or sets the height of a canvas element on a document. <br/>

 Sets or retrieves the height of the object. <br/>

 Gets or sets the height of the video element. <br/>*/

	height:number|string;

/**  Gets or sets the width of a canvas element on a document. <br/>

 Sets or retrieves the width of the object. <br/>

 Gets or sets the width of the video element. <br/>

 Sets or gets a value that you can use to implement your own width functionality for the object. <br/>*/

	width:number|string;


	captureStream(frameRequestRate?: number):CssChainT;

/**  Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas. <br/>*/

	getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings):CssChainT;

/**  Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas. <br/>*/

	getContext(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings):CssChainT;

/**  Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas. <br/>*/

	getContext(contextId: "webgl", options?: WebGLContextAttributes):CssChainT;

/**  Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas. <br/>*/

	getContext(contextId: "webgl2", options?: WebGLContextAttributes):CssChainT;

/**  Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas. <br/>*/

	getContext(contextId: string, options?: any):CssChainT;


	toBlob(callback: BlobCallback, type?: string, quality?: any):CssChainT;

/**  Returns the content of the current canvas as an image that you can use as a source for another canvas or an HTML element. <br/>*/

	toDataURL(type?: string, quality?: any):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	compact:boolean;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Returns an HTMLCollection of the option elements of the datalist element. <br/>

 Returns an HTMLOptionsCollection of the list of options. <br/>*/

	options:HTMLCollectionOf<HTMLOptionElement>|HTMLOptionsCollection;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	open:boolean;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves how the object is aligned with adjacent text. <br/>

 Sets or retrieves a value that indicates the table alignment. <br/>

 Sets or retrieves the alignment of the caption or legend. <br/>

 Sets or retrieves the alignment of the object relative to the display or table. <br/>*/

	align:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves a URL to be loaded by the object. <br/>

 The address or URL of the a media resource that is to be considered. <br/>

 Retrieves the URL to an external file that contains the source code or data. <br/>*/

	src:string;


	getSVGDocument():CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Returns an HTMLCollection of the form controls in the element. <br/>

 Retrieves a collection, in source order, of all controls in a given form. <br/>*/

	elements:HTMLCollection|HTMLFormControlsCollection;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	color:string;

/**  Sets or retrieves the current typeface family. <br/>*/

	face:string;

/**  Sets or retrieves the number of rows in the list box. <br/>*/

	size:string|number;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form. <br/>*/

	acceptCharset:string;

/**  Sets or retrieves the URL to which the form content is sent for processing. <br/>*/

	action:string;

/**  Specifies whether autocomplete is applied to an editable text field. <br/>*/

	autocomplete:string;

/**  Sets or retrieves the MIME encoding for the form. <br/>*/

	encoding:string;

/**  Sets or retrieves the encoding type for the form. <br/>*/

	enctype:string;

/**  Sets or retrieves the number of objects in a collection. <br/>*/

	length:number;

/**  Sets or retrieves how to send the form data to the server. <br/>*/

	method:string;

/**  Designates a form that is not validated when submitted. <br/>*/

	noValidate:boolean;


	requestSubmit(submitter?: HTMLElement | null):CssChainT;

/**  Fires when the user resets a form. <br/>*/

	reset():CssChainT;

/**  Fires when a FORM is about to be submitted. <br/>*/

	submit():CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Retrieves the document object of the page or frame. <br/>*/

	contentDocument:Document|null;

/**  Retrieves the object of the specified. <br/>*/

	contentWindow:WindowProxy|null;

/**  Sets or retrieves whether to display a border for the frame. <br/>*/

	frameBorder:string;

/**  Sets or retrieves a URI to a long description of the object. <br/>

 Sets or retrieves a Uniform Resource Identifier (URI) to a long description of the object. <br/>*/

	longDesc:string;

/**  Sets or retrieves the top and bottom margin heights before displaying the text in a frame. <br/>*/

	marginHeight:string;

/**  Sets or retrieves the left and right margin widths before displaying the text in a frame. <br/>*/

	marginWidth:string;

/**  Sets or retrieves whether the user can resize the frame. <br/>*/

	noResize:boolean;

/**  Sets or retrieves whether the frame can be scrolled. <br/>*/

	scrolling:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves the frame widths of the object. <br/>

 Sets or retrieves the width of the object. <br/>*/

	cols:string|number;

/**  Sets or retrieves the frame heights of the object. <br/>

 Sets or retrieves the number of horizontal rows contained in the object. <br/>*/

	rows:string|HTMLCollectionOf<HTMLTableRowElement>|number;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves whether the horizontal rule is drawn with 3-D shading. <br/>*/

	noShade:boolean;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves the DTD version that governs the current document. <br/>*/

	version:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	allow:string;


	allowFullscreen:boolean;


	sandbox:DOMTokenList;

/**  Sets or retrives the content of the page that is to contain. <br/>*/

	srcdoc:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Specifies the properties of a border drawn around an object. <br/>

 Sets or retrieves the width of the border to draw around the object. <br/>*/

	border:string;

/**  Retrieves whether the object is fully loaded. <br/>*/

	complete:boolean;


	crossOrigin:string|null;

/**  Gets the address or URL of the current media resource that is selected by IHTMLMediaElement. <br/>*/

	currentSrc:string;


	decoding:"async"|"sync"|"auto";

/**  Sets or retrieves the width of the border to draw around the object. <br/>*/

	hspace:number;

/**  Sets or retrieves whether the image is a server-side image map. <br/>*/

	isMap:boolean;


	loading:string;


	lowsrc:string;

/**  The original height of the image resource before sizing. <br/>*/

	naturalHeight:number;

/**  The original width of the image resource before sizing. <br/>*/

	naturalWidth:number;


	sizes:string|DOMTokenList;


	srcset:string;

/**  Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map. <br/>*/

	useMap:string;

/**  Sets or retrieves the vertical margin for the object. <br/>*/

	vspace:number;


	x:number;


	y:number;


	decode():CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves a comma-separated list of content types. <br/>*/

	accept:string;


	capture:string;

/**  Sets or retrieves the state of the check box or radio button. <br/>*/

	checked:boolean;

/**  Sets or retrieves the state of the check box or radio button. <br/>*/

	defaultChecked:boolean;

/**  Sets or retrieves the initial contents of the object. <br/>*/

	defaultValue:string;


	dirName:string;

/**  Returns a FileList object on a file type input object. <br/>*/

	files:FileList|null;

/**  When set, overrides the rendering of checkbox controls so that the current value is not visible. <br/>*/

	indeterminate:boolean;

/**  Specifies the ID of a pre-defined datalist of options for an input element. <br/>*/

	list:HTMLElement|null;

/**  Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field. <br/>

 Defines the maximum, or "done" value for a progress element. <br/>*/

	max:string|number;

/**  Sets or retrieves the maximum number of characters that the user can enter in a text control. <br/>*/

	maxLength:number;

/**  Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field. <br/>*/

	min:string|number;


	minLength:number;

/**  Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list. <br/>*/

	multiple:boolean;

/**  Gets or sets a string containing a regular expression that the user's input must match. <br/>*/

	pattern:string;

/**  Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field. <br/>*/

	placeholder:string;

/**  Sets or retrieves the value indicated whether the content of the object is read-only. <br/>*/

	readOnly:boolean;

/**  When present, marks an element that can't be submitted without a value. <br/>*/

	required:boolean;


	selectionDirection:"forward"|"backward"|"none"|null;

/**  Gets or sets the end position or offset of a text selection. <br/>*/

	selectionEnd:number|null;

/**  Gets or sets the starting position or offset of a text selection. <br/>*/

	selectionStart:number|null;

/**  Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field. <br/>*/

	step:string;

/**  Returns a Date object representing the form control's value, if applicable; otherwise, returns null. Can be set, to change the value. Throws an "InvalidStateError" DOMException if the control isn't date- or time-based. <br/>*/

	valueAsDate:Date|null;

/**  Returns the input field value as a number. <br/>*/

	valueAsNumber:number;


	webkitEntries:ReadonlyArray<FileSystemEntry>;


	webkitdirectory:boolean;

/**  Makes the selection equal to the current object. <br/>

 Highlights the input area of a form element. <br/>*/

	select():CssChainT;


	setRangeText(replacement: string):CssChainT;


	setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode):CssChainT;

/**  Sets the start and end positions of a selection in a text field. <br/>*/

	setSelectionRange(start: number | null, end: number | null, direction?: "forward" | "backward" | "none"):CssChainT;

/**  Decrements a range input control's value by the value given by the Step attribute. If the optional parameter is used, it will decrement the input control's step value multiplied by the parameter's value. <br/>*/

	stepDown(n?: number):CssChainT;

/**  Increments a range input control's value by the value given by the Step attribute. If the optional parameter is used, will increment the input control's value by that value. <br/>*/

	stepUp(n?: number):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Returns the form control that is associated with this element. <br/>*/

	control:HTMLElement|null;

/**  Sets or retrieves the object to which the given label object is assigned. <br/>

 Sets or retrieves the object that is bound to the event script. <br/>*/

	htmlFor:string|DOMTokenList;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	as:string;


	imageSizes:string;


	imageSrcset:string;


	integrity:string;

/**  Sets or retrieves the media type. <br/>

 Gets or sets the intended media type of the media source. <br/>*/

	media:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Retrieves a collection of the area objects defined for the given map object. <br/>*/

	areas:HTMLCollection;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	behavior:string;


	direction:string;

/**  Gets or sets a flag to specify whether playback should restart after it completes. <br/>*/

	loop:number|boolean;


	scrollAmount:number;


	scrollDelay:number;


	trueSpeed:boolean;


	start():CssChainT;


	stop():CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Gets or sets a value that indicates whether to start playing the media automatically. <br/>*/

	autoplay:boolean;

/**  Gets a collection of buffered time ranges. <br/>*/

	buffered:TimeRanges;

/**  Gets or sets a flag that indicates whether the client provides a set of controls for the media (in case the developer does not include controls for the player). <br/>*/

	controls:boolean;

/**  Gets or sets the current playback position, in seconds. <br/>*/

	currentTime:number;


	defaultMuted:boolean;

/**  Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource. <br/>*/

	defaultPlaybackRate:number;


	disableRemotePlayback:boolean;

/**  Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming. <br/>*/

	duration:number;

/**  Gets information about whether the playback has ended or not. <br/>*/

	ended:boolean;

/**  Returns an object representing the current error state of the audio or video element. <br/>*/

	error:MediaError|null;

/**  Available only in secure contexts. <br/>*/

	mediaKeys:MediaKeys|null;

/**  Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted. <br/>*/

	muted:boolean;

/**  Gets the current network activity for the element. <br/>*/

	networkState:number;


	onencrypted:((this: HTMLMediaElement, ev: MediaEncryptedEvent) => any)|null;


	onwaitingforkey:((this: HTMLMediaElement, ev: Event) => any)|null;

/**  Gets a flag that specifies whether playback is paused. <br/>*/

	paused:boolean;

/**  Gets or sets the current rate of speed for the media resource to play. This speed is expressed as a multiple of the normal speed of the media resource. <br/>*/

	playbackRate:number;

/**  Gets TimeRanges for the current media resource that has been played. <br/>*/

	played:TimeRanges;

/**  Gets or sets a value indicating what data should be preloaded, if any. <br/>*/

	preload:"none"|"metadata"|"auto"|"";


	readyState:number;


	remote:RemotePlayback;

/**  Returns a TimeRanges object that represents the ranges of the current media resource that can be seeked. <br/>*/

	seekable:TimeRanges;

/**  Gets a flag that indicates whether the client is currently moving to a new playback position in the media resource. <br/>*/

	seeking:boolean;


	srcObject:MediaProvider|null;


	textTracks:TextTrackList;

/**  Gets or sets the volume level for audio portions of the media element. <br/>*/

	volume:number;


	addTextTrack(kind: TextTrackKind, label?: string, language?: string):CssChainT;

/**  Returns a string that specifies whether the client can play a given media resource type. <br/>*/

	canPlayType(type: string):CssChainT;


	fastSeek(time: number):CssChainT;

/**  Resets the audio or video object and loads a new media resource. <br/>*/

	load():CssChainT;

/**  Pauses the current playback and sets paused to TRUE. This can be used to test whether the media is playing or paused. You can also use the pause or play events to tell whether the media is playing or not. <br/>*/

	pause():CssChainT;

/**  Loads and starts playback of a media resource. <br/>*/

	play():CssChainT;

/**  Available only in secure contexts. <br/>*/

	setMediaKeys(mediaKeys: MediaKeys | null):CssChainT;


	HAVE_CURRENT_DATA:number;


	HAVE_ENOUGH_DATA:number;


	HAVE_FUTURE_DATA:number;


	HAVE_METADATA:number;


	HAVE_NOTHING:number;


	NETWORK_EMPTY:number;


	NETWORK_IDLE:number;


	NETWORK_LOADING:number;


	NETWORK_NO_SOURCE:number;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	disablePictureInPicture:boolean;


	onenterpictureinpicture:((this: HTMLVideoElement, ev: Event) => any)|null;


	onleavepictureinpicture:((this: HTMLVideoElement, ev: Event) => any)|null;

/**  Gets or sets the playsinline of the video element. for example, On iPhone, video elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins. <br/>*/

	playsInline:boolean;

/**  Gets or sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available. <br/>*/

	poster:string;

/**  Gets the intrinsic height of a video in CSS pixels, or zero if the dimensions are not known. <br/>*/

	videoHeight:number;

/**  Gets the intrinsic width of a video in CSS pixels, or zero if the dimensions are not known. <br/>*/

	videoWidth:number;


	getVideoPlaybackQuality():CssChainT;


	requestPictureInPicture():CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Gets or sets meta-information to associate with httpEquiv or name. <br/>

 Returns the template contents (a DocumentFragment). <br/>*/

	content:string|DocumentFragment;

/**  Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header. <br/>*/

	httpEquiv:string;

/**  Sets or retrieves a scheme to be used in interpreting the value of a property specified for the object. <br/>*/

	scheme:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	high:number;


	low:number;


	optimum:number;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves reference information about the object. <br/>*/

	cite:string;

/**  Sets or retrieves the date and time of a modification to the object. <br/>*/

	dateTime:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	reversed:boolean;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves a character string that can be used to implement your own archive functionality for the object. <br/>*/

	archive:string;

/**  Sets or retrieves the URL of the file containing the compiled Java class. <br/>*/

	code:string;

/**  Sets or retrieves the URL of the component. <br/>*/

	codeBase:string;

/**  Sets or retrieves the Internet media type for the code associated with the object. <br/>*/

	codeType:string;

/**  Sets or retrieves the URL that references the data of the object. <br/>*/

	data:string;


	declare:boolean;

/**  Sets or retrieves a message to be displayed while an object is loading. <br/>*/

	standby:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves a value that you can use to implement your own label functionality for the object. <br/>*/

	label:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves the status of an option. <br/>*/

	defaultSelected:boolean;

/**  Sets or retrieves the ordinal position of an option in a list box. <br/>*/

	index:number;

/**  Sets or retrieves whether the option in the list box is the default item. <br/>*/

	selected:boolean;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves the data type of the value attribute. <br/>*/

	valueType:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Returns the quotient of value/max when the value attribute is set (determinate progress bar), or -1 when the value attribute is missing (indeterminate progress bar). <br/>*/

	position:number;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	async:boolean;

/**  Sets or retrieves the status of the script. <br/>*/

	defer:boolean;

/**  Sets or retrieves the event for which the script is written. <br/>*/

	event:string;


	noModule:boolean;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves the index of the selected option in a select object. <br/>*/

	selectedIndex:number;


	selectedOptions:HTMLCollectionOf<HTMLOptionElement>;

/**  Adds an element to the areas, controlRange, or options collection. <br/>*/

	add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null):CssChainT;

/**  Retrieves a select object or an object from an options collection. <br/>*/

	item(index: number):CssChainT;

/**  Retrieves a select object or an object from an options collection. <br/>*/

	namedItem(name: string):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	assign(...nodes: (Element | Text)[]):CssChainT;


	assignedElements(options?: AssignedNodesOptions):CssChainT;


	assignedNodes(options?: AssignedNodesOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves abbreviated text for the object. <br/>*/

	abbr:string;

/**  Sets or retrieves a comma-delimited list of conceptual categories associated with the object. <br/>*/

	axis:string;

/**  Retrieves the position of the object in the cells collection of a row. <br/>*/

	cellIndex:number;


	ch:string;


	chOff:string;

/**  Sets or retrieves the number columns in the table that the object should span. <br/>*/

	colSpan:number;

/**  Sets or retrieves a list of header cells that provide information for the object. <br/>*/

	headers:string;

/**  Sets or retrieves whether the browser automatically performs wordwrap. <br/>*/

	noWrap:boolean;

/**  Sets or retrieves how many rows in a table the cell should span. <br/>*/

	rowSpan:number;

/**  Sets or retrieves the group of cells in a table to which the object's information applies. <br/>*/

	scope:string;


	vAlign:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Sets or retrieves the number of columns in the group. <br/>*/

	span:number;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Retrieves the caption object of a table. <br/>*/

	caption:HTMLTableCaptionElement|null;

/**  Sets or retrieves the amount of space between the border of the cell and the content of the cell. <br/>*/

	cellPadding:string;

/**  Sets or retrieves the amount of space between cells in a table. <br/>*/

	cellSpacing:string;

/**  Sets or retrieves the way the border frame around the table is displayed. <br/>*/

	frame:string;

/**  Sets or retrieves which dividing lines (inner borders) are displayed. <br/>*/

	rules:string;

/**  Sets or retrieves a description and/or structure of the object. <br/>*/

	summary:string;

/**  Retrieves a collection of all tBody objects in the table. Objects in this collection are in source order. <br/>*/

	tBodies:HTMLCollectionOf<HTMLTableSectionElement>;

/**  Retrieves the tFoot object of the table. <br/>*/

	tFoot:HTMLTableSectionElement|null;

/**  Retrieves the tHead object of the table. <br/>*/

	tHead:HTMLTableSectionElement|null;

/**  Creates an empty caption element in the table. <br/>*/

	createCaption():CssChainT;

/**  Creates an empty tBody element in the table. <br/>*/

	createTBody():CssChainT;

/**  Creates an empty tFoot element in the table. <br/>*/

	createTFoot():CssChainT;

/**  Returns the tHead element object if successful, or null otherwise. <br/>*/

	createTHead():CssChainT;

/**  Deletes the caption element and its contents from the table. <br/>*/

	deleteCaption():CssChainT;

/**  Removes the specified row (tr) from the element and from the rows collection. <br/>*/

	deleteRow(index: number):CssChainT;

/**  Deletes the tFoot element and its contents from the table. <br/>*/

	deleteTFoot():CssChainT;

/**  Deletes the tHead element and its contents from the table. <br/>*/

	deleteTHead():CssChainT;

/**  Creates a new row (tr) in the table, and adds the row to the rows collection. <br/>*/

	insertRow(index?: number):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Retrieves a collection of all cells in the table row. <br/>*/

	cells:HTMLCollectionOf<HTMLTableCellElement>;

/**  Retrieves the position of the object in the rows collection for the table. <br/>*/

	rowIndex:number;

/**  Retrieves the position of the object in the collection. <br/>*/

	sectionRowIndex:number;

/**  Removes the specified cell from the table row, as well as from the cells collection. <br/>*/

	deleteCell(index: number):CssChainT;

/**  Creates a new cell in the table row, and adds the cell to the cells collection. <br/>*/

	insertCell(index?: number):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	textLength:number;

/**  Sets or retrieves how to handle wordwrapping in the object. <br/>*/

	wrap:string;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;


	default:boolean;


	kind:string;


	srclang:string;

/**  Returns the TextTrack object corresponding to the text track of the track element. <br/>*/

	track:TextTrack;


	ERROR:number;


	LOADED:number;


	LOADING:number;


	NONE:number;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

/**  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture. <br/>*/

	addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions):CssChainT;

/**  Removes the event listener in target's event listener list with the same type, callback, and options. <br/>*/

	removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions):CssChainT;

}

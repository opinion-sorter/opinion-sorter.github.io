/**
 * Creates a DOM elements from HTML. 
 * @param html The HTML of the elements.
 */
function make(html: string): HTMLElement[] {
	
	let element = document.createElement("div");
	element.innerHTML = html;
	
	let list: HTMLElement[] = [];

	for (let i = 0; i < element.children.length; i++) {
		list.push(<HTMLElement>element.children[i]);		
	}

	return list;

}

/**
 * Shorthand for document.getElementById(id).
 * @param elementId The id of the element.
 */
function id(elementId: string): HTMLElement {
	return document.getElementById(elementId);
}
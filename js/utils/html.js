/**
 * Creates a DOM elements from HTML.
 * @param html The HTML of the elements.
 */
function make(html) {
    var element = document.createElement("div");
    element.innerHTML = html;
    var list = [];
    for (var i = 0; i < element.children.length; i++) {
        list.push(element.children[i]);
    }
    return list;
}
/**
 * Shorthand for document.getElementById(id).
 * @param elementId The id of the element.
 */
function id(elementId) {
    return document.getElementById(elementId);
}

"use strict";

function createParagraph (id, text) {
    var element,
        paragraph;

    element = document.getElementById(id);
    paragraph = document.createElement('p');
    paragraph.innerText = text;
    element.appendChild(paragraph);
}

createParagraph('wrapper', 'Some text');
createParagraph('test', 'Hello it`s me');
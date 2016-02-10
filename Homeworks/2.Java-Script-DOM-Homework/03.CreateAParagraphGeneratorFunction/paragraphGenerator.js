function createParagraph (id, text) {
    var element = document.getElementById(id);
    var paragraph = document.createElement('p');
    paragraph.innerText = text;
    element.appendChild(paragraph);
}

createParagraph('wrapper', 'Some text');
createParagraph('test', 'Hello it`s me');
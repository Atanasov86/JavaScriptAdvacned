"use strict";

var HTMLGen = (function (){
    function createParagraph (id, text) {
        var element,
            paragraph;

        element = document.getElementById(id);
        paragraph = document.createElement('p');
        paragraph.innerText = text;
        element.appendChild(paragraph);
    }

    function createDiv (id, divClass) {
        var element,
            div;

        element = document.getElementById(id);
        div = document.createElement('div');
        div.className = divClass;
        element.appendChild(div);
    }

    function createLink (id, text, url) {
        var element,
            link;

        element = document.getElementById(id);
        link = document.createElement('a');
        link.href = url;
        link.innerText = text;
        element.appendChild(link);
    }

    return {
        createParagraph: createParagraph,
        createDiv: createDiv,
        createLink: createLink
    }
})();

HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');

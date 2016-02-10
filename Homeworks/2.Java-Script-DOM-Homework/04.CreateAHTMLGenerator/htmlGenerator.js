var HTMLGen = (function (){
    function createParagraph (id, text) {
        var element = document.getElementById(id);
        var paragraph = document.createElement('p');
        paragraph.innerText = text;
        element.appendChild(paragraph);
    }

    function createDiv (id, divClass) {
        var element = document.getElementById(id);
        var div = document.createElement('div');
        div.className = divClass;
        element.appendChild(div);
    }

    function createLink (id, text, url) {
        var element = document.getElementById(id);
        var link = document.createElement('a');
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

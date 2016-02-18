"use strict";

var domModule = (function () {

    var getElement = function (selector) {
        return document.querySelector(selector);
    };


    function appendChild(element, child) {
        if (!(element instanceof Element)) {
            element = getElement(element);
        }

        if (!element) {
            throw new ReferenceError('Parent element is invalid or could not be found.');
        }

        if (!(child instanceof Element)) {
            child = getElement(child);
        }

        if (!child) {
            throw new ReferenceError('Child element is invalid or could not be found.');
        }

        element.appendChild(child);
    }

    function removeChild(element, child) {

        if (!(element instanceof Element)) {
            element = getElement(element);
        }

        if (!element) {
            throw new ReferenceError('Parent element is invalid or could not be found.');
        }

        if (!(child instanceof Element)) {
            child = getElement(child);
        }

        if (!child) {
            throw new ReferenceError("Child element is invalid or could not be found.");
        }

        element.removeChild(child);
    }

    function addHandler(element, eventType, eventHandler) {
        var i;

        if (!(element instanceof Element) && !Array.isArray(element)) {
            element = retrieveElements(element);
        }

        if (!element) {
            throw new ReferenceError('The element(s) requested could not be found.');
        }

        for (i in element) {
            element[i].addEventListener(eventType, eventHandler, false);
        }

    }

    function retrieveElements(selector) {
        return document.querySelectorAll(selector);
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    }

})();

var liElement = document.createElement('li');

domModule.appendChild('.birds-list', liElement);

domModule.removeChild('ul.birds-list', 'li:first-child');

domModule.addHandler('li.bird', 'click', function () {
    alert('I\'m a bird!')
});

var elements = domModule.retrieveElements(".bird");
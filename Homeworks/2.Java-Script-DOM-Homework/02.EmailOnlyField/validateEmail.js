"use strict";

function validate () {
    var inputValue,
        regex,
        element;

    inputValue = document.getElementsByTagName('input')[0].value;
    regex = /[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
    element = document.getElementsByClassName('msg')[0];
    element.innerText = inputValue;

    if (regex.test(inputValue)) {
        element.style.backgroundColor = 'green';
    } else {
        element.style.backgroundColor = 'red';
    }
}

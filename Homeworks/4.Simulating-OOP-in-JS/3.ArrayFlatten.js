"use strict";

Array.prototype.flatten = function () {
    var arr = [],
        i;

    function getElements (array) {
        for (i in array) {
            if (Array.isArray(array[i])) {
                getElements(array[i]);
            } else if (typeof array[i] != "function") {
                arr.push(array[i]);
            }
        }
    }

    getElements(this);

    return arr;
};

var array = [1, 2, 3, 4];
console.log(array.flatten());

var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());
console.log(array);


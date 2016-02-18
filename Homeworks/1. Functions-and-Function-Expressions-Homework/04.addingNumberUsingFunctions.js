"use strict";

function add(a) {
    var sum = a;

    function inner(b) {
        sum += b;
        return inner;
    }

    inner.toString = function () {
        return sum;
    };

    return inner;
}


console.log(+add(1)); // 1
console.log(+add(2)(3)); // 5
console.log(+add(1)(1)(1)(1)(1)); // 5
console.log(+add(1)(0)(-1)(-1)); // -1



var addTwo = add(2);

console.log(+addTwo); //2
console.log(+addTwo(3)); // 5
addTwo = add(2);
console.log(+addTwo(3)(5)); //10


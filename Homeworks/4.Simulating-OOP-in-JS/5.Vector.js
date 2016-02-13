var Vector = (function () {
    function Vector(array) {
        if (!array || array.length === 0) {
            throw new Error("Cannot instance Vector of an undefined or an empty array.")
        }
        this._array = array;
    }

    function isValidDimension(vector, otherVector) {
        if (vector._array.length !== otherVector._array.length) {
            throw new Error("The dimensions of vector and other must always be the same.")
        }
    }


    Vector.prototype.add = function (otherVector) {
        if (otherVector === undefined) {
            throw new Error("Cannot ")
        }
        isValidDimension(this, otherVector);
        var dimensionOfVector = this._array.length;
        var sumOfVectors = [];
        for (var i = 0; i < dimensionOfVector; i++) {
            var sum = this._array[i] + otherVector._array[i];
            sumOfVectors.push(sum);
        }

        return new Vector(sumOfVectors);
    };

    Vector.prototype.subtract = function (otherVector) {
        isValidDimension(this, otherVector);
        var dimensionOfVector = this._array.length;
        var subtractOfVectors = [];
        for (var i = 0; i < dimensionOfVector; i++) {
            var subtract = this._array[i] - otherVector._array[i];
            subtractOfVectors.push(subtract);
        }

        return new Vector(subtractOfVectors);
    };

    Vector.prototype.dot = function (otherVector) {
        isValidDimension(this, otherVector);
        var dimensionOfVector = this._array.length;
        var sumOfProductsOfVectors = 0;
        for (var i = 0; i < dimensionOfVector; i++) {
            sumOfProductsOfVectors += this._array[i] * otherVector._array[i];

        }

        return sumOfProductsOfVectors;
    };

    Vector.prototype.norm = function () {
        var dimensionOfVector = this._array.length;
        var sumOfPoweredComponents = 0;
        for (var i = 0; i < dimensionOfVector; i++) {
            sumOfPoweredComponents += Math.pow(this._array[i], 2);
        }

        return Math.sqrt(sumOfPoweredComponents);
    };


    Vector.prototype.toString = function () {
        return "(" + this._array.join(", ") + ")";

    };

    return Vector;
})();


var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.toString());
console.log(c.toString());

// The following throw errors
//var wrong = new Vector(); //uncomment to see error
//var anotherWrong = new Vector([]); //uncomment to see error

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.add(b);
console.log(result.toString());

//a.add(c); // Error

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.subtract(b);
console.log(result.toString());

//a.subtract(c); //uncomment to see error

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.dot(b);
console.log(result.toString());

//a.dot(c); //uncomment to see error

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());
String.prototype.startsWith = function (substring) {
    if (substring.length > this.length) {
        return false;
    }

    for (var i in substring) {
        if (this[i] !== substring[i]) {
            return false;
        }
    }

    return true;
};

String.prototype.endsWith = function (substring) {
    if (substring.length > this.length) {
        return false;
    }

    for (var i = substring.length - 1, j = this.length - 1; i >= 0; i--, j--) {
        if (this[j] !== substring[i]) {
            return false;
        }
    }

    return true;
};

String.prototype.left = function (count) {
    var result = "";
    if (count > this.length) {
        return this.toString();
    }

    for (var i = 0; i < count; i++){
        result+= this[i];
    }

    return result;
};

String.prototype.right = function (count) {
    var result = "";
    if (count > this.length) {
        return this.toString();
    }

    for (var i = 0, j = this.length - 1; i < count; i++,j--) {
        result = this[j] + result;
    }

    return result;
};

String.prototype.padLeft = function (count, character) {
    character = character || " ";
    var result = this.toString();
    for (var i = 0; i < count; i++){
        result = character + result;
    }

    return result;
};

String.prototype.padRight = function (count, character) {
    character = character || " ";
    var result = this.toString();
    for (var i = 0; i < count; i++){
        result += character;
    }

    return result;
};

String.prototype.repeat = function (count) {
    var result = "";
    for (var i = 0; i < count; i++) {
        result += this.toString();
    }

    return result;
};



console.log("Test startsWith() method:");
var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

console.log("Test endsWith() method:");
var example = "This is an example string used only for demonstration purposes.";
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

console.log("Test left() method:");
var example = "This is an example string used only for demonstration purposes.";
console.log(example.left(9));
console.log(example.left(90));

console.log("Test right() method:");
var example = "This is an example string used only for demonstration purposes.";
console.log(example.right(9));
console.log(example.right(90));

// Combinations must also work
console.log("Test left() and right() combinations:");
var example = "abcdefgh";
console.log(example.left(5).right(2));

console.log("Test padLeft() method:");
var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log("Test padRight() method:");
var hello = "hello";
console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

console.log("Test repeat() method");
var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));
// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));






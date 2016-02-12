function printArgsInfo() {
    if (arguments.length === 0) {
        console.log('No arguments');
    }

    for (var i in arguments) {
        var typeOfArgs = "";
        if (arguments[i] instanceof (Array)) {
            typeOfArgs = 'array';
        } else {
            typeOfArgs = typeof (arguments[i]);
        }

        console.log(arguments[i] + ' (' + typeOfArgs + ')');
    }
}

//printArgsInfo(2, 3, 2.5, -110.5564, false);
//printArgsInfo(null, undefined, "", 0, [], {});
//printArgsInfo([1, 2], ["string", "array"], ["single value"]);
//printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);
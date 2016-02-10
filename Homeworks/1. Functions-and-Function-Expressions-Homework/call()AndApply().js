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

printArgsInfo.call();
printArgsInfo.call(null, undefined, "", 0, [], {});
printArgsInfo.apply();
printArgsInfo.apply(null, [undefined, "", 0, [], {}]);


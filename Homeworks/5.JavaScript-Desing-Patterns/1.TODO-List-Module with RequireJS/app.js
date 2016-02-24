(function () {
    require.config({
        paths: {
            'container': 'models/container',
            'section': 'models/section',
            'item': 'models/item',
            'extension': 'extension',
            'factory': 'models/factory'
        }
    });
})();



require(['factory', 'extension'], function (Factory, extension) {
    "use strict";

    var date = extension();
    console.log(date);
        var containerTitle = date.dayOfWeek + "-" + date.day + "-" + date.month + "-" + date.year + " TODO List",
        container = new Factory.Container(containerTitle);

    container.addToDOM("#wrapper");
});
    



(function (){
    "use strict";
    var date = getDayOfWeek();
    var container = new todoList.Container(date.dayOfWeek + "-" + date.day  + "-" + date.month + "-" + date.year + " TODO List");
    container.addToDOM("#wrapper");
})();

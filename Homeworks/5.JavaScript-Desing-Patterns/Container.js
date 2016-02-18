var todoList = todoList || {};
(function (scope){

    var Container = (function () {

        function Container (title) {
            this._title = title;

        }

        Container.prototype.addToDom = function () {

        };

        return Container;
    })();

    return {
        container: Container,
    }
})(todoList);

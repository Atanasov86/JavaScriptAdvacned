var todoList = todoList || {};
(function (scope) {
    "use strict";

    function Item(content) {
        checkContent(content);
        this._content = content;
        this._isCompleted = false;
    }

    function checkContent (content) {
        if (!content) {
            throw new Error ("Item cannot be empty");
        }
    }

    Item.prototype.changeStatus = function () {
        this._isCompleted = !this._isCompleted;
    };

    Item.prototype.addToDOM = function (ul) {
        var item,
            itemCheckbox,
            itemContent;

        item = document.createElement('li');
        // append checkbox
        itemCheckbox = document.createElement('input');
        itemCheckbox.type = 'checkbox';
        itemCheckbox.id = 'tick';
        item.appendChild(itemCheckbox);

        // crete content div
        itemContent = document.createElement('div');
        itemContent.innerText = this._content;

        item.appendChild(itemContent);
        ul.appendChild(item);
    };

    scope.Item = Item;
})(todoList);

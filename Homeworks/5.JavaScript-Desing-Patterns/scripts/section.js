var todoList = todoList || {};

(function (scope) {
    "use strict";

    function Section(title) {
        checkTitle(title);
        this._title = title;
        this._items = [];
    }

    function checkTitle (title) {
        if (!title) {
            throw new Error("Title cannot be empty");
        }
    }

    Section.prototype.addItem = function addItem(item) {
        this._items.push(item);
    };

    Section.prototype.getItems = function getItems() {
        return this._items;
    };

    Section.prototype.addToDOM = function (selector) {

        var sectionWrapper,
            section,
            sectionTitle,
            ul,
            itemInput,
            addItemButton,
            that;

        sectionWrapper = document.querySelector(selector);
        section = document.createElement('section');
        sectionTitle = document.createElement('h2');
        sectionTitle.innerText = this._title;
        section.appendChild(sectionTitle);
        // add items
        ul = document.createElement('ul');
        section.appendChild(ul);
        this._items.forEach(function (item) {
            item.addToDOM(ul);
        });

        itemInput = document.createElement('input');
        itemInput.setAttribute('type', 'text');
        itemInput.setAttribute('class', 'itemInput');
        itemInput.setAttribute('placeholder','Add item...');
        section.appendChild(itemInput);

        addItemButton = document.createElement('button');
        addItemButton.innerText = '+';
        addItemButton.setAttribute('id', 'itemButton');
        section.appendChild(addItemButton);

        sectionWrapper.appendChild(section);

        that = this;
        addItemButton.addEventListener('click', function () {
            var content,
                newItem;

            content = this.parentElement.getElementsByClassName("itemInput")[0].value;
            newItem = new scope.Item(content);
            that.addItem();
            newItem.addToDOM(ul);
            //reset add item input
            document.getElementsByClassName('itemInput').values=null;
            console.log(document.getElementsByClassName('itemInput').values);
        })
    };

    scope.Section = Section;
})(todoList);

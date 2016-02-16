var todoList = todoList || {};
(function (scope) {
    'use strict';

    function Container(title) {
        this._title = title;
        this._sections = [];
    }

    Container.prototype.addSection = function addSection(section) {
        this._sections.push(section);
    };

    Container.prototype.getSections = function getSections() {
        return this._sections;
    };

    Container.prototype.addToDOM = function (selector) {
        var wrapper,
            container,
            h1Title,
            divSection,
            buttonDiv,
            sectionInput,
            addSectionButton,
            that;

        wrapper = document.querySelector(selector);
        // create container
        container = document.createElement('div');
        container.setAttribute('id', 'container');

        // create and append h1 title in container
        h1Title = document.createElement('h1');
        h1Title.innerText = this._title;
        container.appendChild(h1Title);

        divSection = document.createElement('div');
        divSection.id = 'sections';
        container.appendChild(divSection);

        //add all sections
        this._sections.forEach(function (section) {
            section.addToDOM('#sections');
        });

        // create wrapper div for our form
        buttonDiv = document.createElement('div');
        buttonDiv.id = 'form-section';
        sectionInput = document.createElement('input');
        sectionInput.setAttribute('id', 'section-input');
        sectionInput.setAttribute('type', 'text');
        sectionInput.setAttribute('placeholder', 'Title...');
        // append sectionInput in div
        buttonDiv.appendChild(sectionInput);

        addSectionButton = document.createElement('button');
        addSectionButton.innerText = 'New Section';
        addSectionButton.setAttribute('id', 'section-button');
        // append addSectionButton in div
        buttonDiv.appendChild(addSectionButton);

        // append addSectionButton and sectionInput in container
        container.appendChild(buttonDiv);
        // append container in wrapper
        wrapper.appendChild(container);

        that = this;
        addSectionButton.addEventListener('click', function (e) {
            var sectionTitle,
                newSection;

            sectionTitle = document.getElementById('section-input').value;
            newSection = new scope.Section(sectionTitle);
            that.addSection(newSection);
            newSection.addToDOM('#sections');
            //reset add section input
            document.getElementById('section-input').value=null;
        });

        wrapper.addEventListener('change', function (e){
            if (e.target.getAttribute('id') == 'tick'){
                if (e.target.checked) {
                    e.target.nextElementSibling.setAttribute('id', "checked");
                } else {
                    e.target.nextElementSibling.removeAttribute('id');
                    e.target.nextElementSibling.setAttribute('id', 'tick');
                }
            }
        })
    };

    scope.Container = Container;

})(todoList);

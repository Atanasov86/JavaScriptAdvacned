var app = app || {};

(function (scope){
    function Hall (name, capacity) {
        this.setName(name);
        this.setCapacity(capacity);
        this.parties = [];
        this.lectures = [];
    }

    Hall.prototype.getName = function () {
        return this._name;
    };

    Hall.prototype.setName = function (hallName) {
        validator.validateString(hallName);
        this._name = hallName;
    };

    Hall.prototype.getCapacity = function () {
        return this._capacity;
    };

    Hall.prototype.setCapacity = function (capacity) {
        validator.validateNumber(capacity);
        this._capacity = capacity;
    };

    Hall.prototype.addEvent = function (event) {
        if (event instanceof scope.party) {
            this.parties.push(event);
        } else if (event instanceof scope.lecture){
            this.lectures.push(event);
        }
    };


    scope.hall = Hall;
})(app);
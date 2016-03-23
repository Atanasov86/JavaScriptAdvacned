var app = app || {};

(function (scope) {
    function Event (options){
        if (this.constructor === Event) {
            throw new Error("Can't instantiate abstract class!");
        }

        this.setTitle(options.title);
        this.setType(options.type);
        this.setDuration(options.duration);
        this.setDate(options.date);
    }

    Event.prototype.getTitle = function (){
        return this._title;
    };

    Event.prototype.setTitle = function(value) {
        validator.validateString(value);
        this._title = value;
    };

    Event.prototype.getType = function (){
        return this._type;
    };

    Event.prototype.setType = function(value) {
        validator.validateString(value);
        this._type = value;
    };

    Event.prototype.getDuration = function (){
        return this._duration;
    };

    Event.prototype.setDuration = function (value) {
        validator.validateNumber(value);
        this._duration = value;
    };

    Event.prototype.getDate = function (){
        return this._date;
    };

    Event.prototype.setDate = function (date) {
        validator.validateDate(date);
        this._date = date;
    };

    return scope.event = Event;
})(app);
var app = app || {};

(function (scope){
    function Party (options) {
        scope.event.call(this,options);
        this.setIsCatered(options.isCatered);
        this.setIsBirthday(options.isBirthday);
        this.setOrganiser(options.organiser);
    }

    Party.extends(scope.event);

    Party.prototype.checkIsCatered = function () {
        return this._isCatered;
    };

    Party.prototype.setIsCatered = function (value) {
        value = !!value;
        this._isCatered = value;
    };

    Party.prototype.checkIsBirthday = function () {
        return this._isBirthday;
    };

    Party.prototype.setIsBirthday = function (value) {
        value = !!value;
        this._isBirthday = value;
    };

    Party.prototype.getOrganiser = function () {
        return this._organiser;
    };

    Party.prototype.setOrganiser = function (employee) {
        validator.validateEmployee(employee);
        this._organiser = employee;
    };

    scope.party = Party;
})(app);
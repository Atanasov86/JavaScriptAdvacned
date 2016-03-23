var app = app || {};

(function (scope){
    function Employee (name, workHours) {
        this.setName(name);
        this.setWorkHours(workHours);
    }

    Employee.prototype.getName = function () {
        return this._name;
    };

    Employee.prototype.setName = function (employeeName) {
        validator.validateString(employeeName);
        this._name = employeeName;
    };

    Employee.prototype.getWorkhours = function () {
        return this._workHours;
    };

    Employee.prototype.setWorkHours = function (hours) {
        validator.validateNumber(hours);
        this._workHours = hours;
    };

    scope.employee = Employee;
})(app);
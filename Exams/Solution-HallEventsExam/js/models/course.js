var app = app || {};

(function (scope){
    function Course (name, numberOfLectures) {
        this.setName(name);
        this.setNumberOfLectures(numberOfLectures);
    }

    Course.prototype.getName = function () {
        return this._name;
    };

    Course.prototype.setName = function (name) {
        validator.validateString(name);
        this._name = name;
    };

    Course.prototype.getNumberOfLectures = function () {
        return this._numberOfLectures;
    };

    Course.prototype.setNumberOfLectures = function (numberOfLectures) {
        validator.validateNumber(numberOfLectures);
        this._numberOfLectures = numberOfLectures;
    };

    scope.course = Course;
})(app);
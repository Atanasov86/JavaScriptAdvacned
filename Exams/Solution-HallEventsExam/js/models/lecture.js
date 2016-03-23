var app = app || {};

(function (scope){
    function Lecture (options) {
        scope.event.call(this, options);
        this.setTrainer(options.trainer);
        this.setCourse(options.course);
    }

    Lecture.extends(scope.event);

    Lecture.prototype.getTrainer = function () {
        return this._trainer;
    };

    Lecture.prototype.setTrainer = function (trainer) {
        validator.validateTrainer(trainer);
        this._trainer = trainer;
    };

    Lecture.prototype.getCourse = function () {
        return this._course;
    };

    Lecture.prototype.setCourse = function (course) {
        validator.validateCourse(course);
        this._course = course;
    };

    scope.lecture = Lecture;
})(app);
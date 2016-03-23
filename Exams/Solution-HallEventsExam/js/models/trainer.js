var app = app || {};

(function(scope){
    function Trainer (name, workHours) {
        scope.employee.call(this, name, workHours);
        this.courses = [];
        this.feedbacks = [];
    }

    Trainer.extends(scope.employee);

    Trainer.prototype.addFeedback = function (feedback) {
        if (typeof feedback !== "string") {
            throw new Error ("Feedback can be only string.")
        }

        this.feedbacks.push(feedback);
    };

    Trainer.prototype.addCourse = function (course) {
        validator.validateCourse(course);
        this.courses.push(course);
    };

    scope.trainer = Trainer;
})(app);
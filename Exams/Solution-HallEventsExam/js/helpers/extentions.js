Function.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

var validator = {
    validateString: function (str) {
        if (typeof str !== "string") {
            throw new Error("Property can be only string");
        }

        if (!(/^[a-zA-Z\s]+$/.test(str))) {
            throw new Error("Property can contains only letter or whitespace")
        }
    },

    validateNumber: function (num) {
        if (typeof num !== 'number' || num < 0) {
            throw new Error("Property can be only positive number ");
        }
    },

    validateDate: function (date) {
        if (!(date instanceof Date)) {
            throw new Error("Date object can be only Date instance.");
        }
    },

    validateTrainer: function (trainer) {
        if (!(trainer instanceof app.trainer)) {
            throw new Error("Trainer object can be only Trainer instance.");
        }
    },

    validateCourse: function (course) {
        if (!(course instanceof app.course)) {
            throw new Error("Course object can be only Course instance.");
        }
    },

    validateEmployee: function (employee) {
        if (!(employee instanceof app.employee)) {
            throw new Error("Course object can be only Course instance.");
        }
    }
};
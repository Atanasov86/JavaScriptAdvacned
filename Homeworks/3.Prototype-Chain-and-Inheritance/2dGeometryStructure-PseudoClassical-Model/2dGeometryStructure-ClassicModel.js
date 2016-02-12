Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

if (!Object.create) {
    Object.create = function (proto) {
        function F() {
        };
        F.prototype = proto;
        return new F();
    };
};

var shapeModule = (function () {
    // function constructor
    function Shape(color) {
        this._color = color;
    }

    Shape.prototype.toString = function () {
        return 'Color: ' + this._color;
    };


    var Circle = (function () {
        // function constructor
        function Circle(Ox, Oy, radius, color) {
            this._Ox = Ox;
            this._Oy = Oy;
            this._radius = radius;
            Shape.call(this, color);
        }

        return Circle;
    })();

    Circle.extends(Shape);
    Circle.prototype.toString = function () {
        return "Circle: " + "Center: O(" + this._Ox + ", " + this._Oy + "), "
            + "Radius: " + this._radius + ", " + Shape.prototype.toString.call(this);
    };

    Circle.prototype.draw = function () {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(this._Ox, this._Oy, this._radius, 0, 360);
            ctx.fill();
        }
    };

    var Rectangle = (function () {
        // function constructor
        function Rectangle(Ax, Ay, width, height, color) {
            this._Ax = Ax;
            this._Ay = Ay;
            this._width = width;
            this._height = height;
            Shape.call(this, color);
        }

        return Rectangle;
    })();

    Rectangle.extends(Shape);
    Rectangle.prototype.toString = function () {
        return "Rectangle: " + "TopLeft: A(" + this._Ax + ", " + this._Ay + "), "
            + "Width: " + this._width + ", " + "Height: " + this._height + ", " + Shape.prototype.toString.call(this);
    };
    Rectangle.prototype.draw = function () {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.strokeRect(this._Ax, this._Ay, this._width, this._height)
        }

    };

    var Triangle = (function () {
        // function constructor
        function Triangle(Ax, Ay, Bx, By, Cx, Cy, color) {
            this._Ax = Ax;
            this._Ay = Ay;
            this._Bx = Bx;
            this._By = By;
            this._Cx = Cx;
            this._Cy = Cy;
            Shape.call(this, color);
        }

        return Triangle;
    })();

    Triangle.extends(Shape);
    Triangle.prototype.toString = function () {
        return "Triangle: " + "Point A(" + this._Ax + ", " + this._Ay + "), "
            + "Point B(" + this._Bx + ", " + this._By + "), " + "Point C(" + this._Cx + ", " + this._Cy + "), "
            + Shape.prototype.toString.call(this);
    };

    Triangle.prototype.draw = function () {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(this._Ax, this._Ay);
            ctx.lineTo(this._Bx, this._By);
            ctx.lineTo(this._Cx, this._Cy);
            ctx.fill();
        }
    };

    var Line = (function () {
        // function constructor
        function Line(Ax, Ay, Bx, By, color) {
            this._Ax = Ax;
            this._Ay = Ay;
            this._Bx = Bx;
            this._By = By;
            Shape.call(this, color);
        }

        return Line;
    })();

    Line.extends(Shape);
    Line.prototype.toString = function () {
        return "Line: " + "Point A(" + this._Ax + ", " + this._Ay + "), "
            + "Point B(" + this._Bx + ", " + this._By + "), " + Shape.prototype.toString.call(this);
    };

    Line.prototype.draw = function () {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(this._Ax, this._Ay);
            ctx.lineTo(this._Bx, this._By);
            ctx.stroke();
        }
    };


    var Segment = (function () {
        // function constructor
        function Segment(Ax, Ay, Bx, By, color) {
            Line.call(this, Ax, Ay, Bx, By, color);
        }

        return Segment;
    })();

    Segment.extends(Shape);
    Segment.prototype.toString = function () {
        return "Segment: " + "Point A(" + this._Ax + ", " + this._Ay + "), "
            + "Point B(" + this._Bx + ", " + this._By + "), " + Shape.prototype.toString.call(this);
    };

    Segment.prototype.draw = Line.prototype.draw.call(this);


    return {
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Line: Line,
        Segment: Segment
    }
})();

var circle = new shapeModule.Circle(20, 20, 20, "#000001");
circle.draw();
console.log(circle);
console.log(circle.toString());

var rectangle = new shapeModule.Rectangle(1, 60, 50, 50, "#100000");
rectangle.draw();
console.log(rectangle);
console.log(rectangle.toString());

var triangle = new shapeModule.Triangle(120, 130, 70, 220, 100, 225, "#010000");
triangle.draw();
console.log(triangle);
console.log(triangle.toString());

var line = new shapeModule.Line(300, 25, 220, 300, "#001000");
line.draw();
console.log(line);
console.log(line.toString());

var segment = new shapeModule.Segment(400, 200, 400, 100, "#110000");
segment.draw();
console.log(segment);
console.log(segment.toString());
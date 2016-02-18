"use strict";

Object.prototype.extend = function (properties) {
    function f() {
    };
    f.prototype = Object.create(this);
    var prop;

    for (prop in properties) {
        f.prototype[prop] = properties[prop];
    }
    f.prototype._super = this;
    return new f();
};


var shapeModule = (function () {
    var shape = {
        init: function init(color) {
            this._color = color;
        },

        toString: function () {
            return 'Color: ' + this._color;
        }
    };

    var circle = shape.extend({
        init: function init (centerX, centerY, radius, color){
            this._super.init(color);
            this._centerX = centerX;
            this._centerY = centerY;
            this._radius = radius;
        },
        toString: function () {
            return "Circle: " + "Center: O(" + this._centerX + ", " + this._centerY + "), "
                + "Radius: " + this._radius  + ", " + this._super.toString();
        }
    });
    
    var rectangle = shape.extend ({
        init: function init (Ax, Ay, width, height, color) {
            this._super.init(color);
            this._Ax = Ax;
            this._Ay = Ay;
            this._width = width;
            this._height = height;
        },
        toString: function () {
            return "Rectangle: " + "TopLeft: A(" + this._Ax + ", " + this._Ay + "), "
            + "Width: " + this._width  + ", " + "Height: " + this._height+ ", " + this._super.toString();
        }
    });
    
    var triangle = shape.extend({
        
        init: function init (Ax, Ay, Bx, By, Cx, Cy, color) {
            this._super.init(color);
            this._Ax = Ax;
            this._Ay = Ay;
            this._Bx = Bx;
            this._By = By;
            this._Cx = Cx;
            this._Cy = Cy;
        },
        toString: function () {
            return "Triangle: " + "Point A(" + this._Ax + ", " + this._Ay + "), "
            + "Point B(" + this._Bx + ", " + this._By + "), " + "Point C(" + this._Cx + ", " + this._Cy + "), "
            + this._super.toString();
        }
    });
    
    var line = shape.extend({
        init: function init (Ax, Ay, Bx, By, color){
            this._super.init(color);
            this._Ax = Ax;
            this._Ay = Ay;
            this._Bx = Bx;
            this._By = By;
        },
        toString: function () {
            return "Line: " + "Point A(" + this._Ax + ", " + this._Ay + "), "
            + "Point B(" + this._Bx + ", " + this._By + "), " + this._super.toString();
        }
    });
    
    var segment = line.extend({
        init: function init (Ax, Ay, Bx, By, color) {
            this._super.init(Ax, Ay, Bx, By, color);
        },
        toString: function () {
            return  "Segment: " + "Point A(" + this._Ax + ", " + this._Ay + "), "
            + "Point B(" + this._Bx + ", " + this._By + "), " + this._super.toString();
        }
    });
 

    return {
        circle: circle,
        rectangle: rectangle,
        triangle: triangle,
        line: line,
        segment: segment
    }
})();

var circle = Object.create(shapeModule.circle);
circle.init(1, 2, 3, "#000001");
console.log(circle);
console.log(circle.toString());

var rectangle = Object.create(shapeModule.rectangle);
rectangle.init(1,2, 10, 10, "#100000");
console.log(rectangle);
console.log(rectangle.toString());

var triangle = Object.create(shapeModule.triangle);
triangle.init(1, 2, 2, 3, 2, 2, "#010000");
console.log(triangle);
console.log(triangle.toString());

var line = Object.create(shapeModule.line);
line.init(1, 2, 2, 2,"#001000");
console.log(line);
console.log(line.toString());

var segment = Object.create(shapeModule.segment);
segment.init(1, 3, 3, 3, "#110000");
console.log(segment);
console.log(segment.toString());
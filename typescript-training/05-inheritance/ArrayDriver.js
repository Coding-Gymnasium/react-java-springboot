"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// declare an array of shapes ... initially empty
let theShapes = [];
// add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
// theShapes.push("will this work?");
// theShapes.push(1776) // won't work either because the array only accepts type of
// the class Shape.
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}

import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

// declare an array of shapes ... initially empty
let theShapes: Shape[] = [];

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

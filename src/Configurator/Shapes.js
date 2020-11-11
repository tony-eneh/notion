import circle, { Circle } from "./Circle";
import ellipse, { Ellipse } from "./Ellipse";
import square, { Square } from "./Square";
import rectangle, { Rectangle } from "./Rectangle";
import kite, { Kite } from "./Kite";
import parallelogram, { Parallelogram } from "./Parallelogram";
import polygon, { Polygon } from "./Polygon";
import rhombus, { Rhombus } from "./Rhombus";
import star, { Star } from "./Star";
import trapezium, { Trapezium } from "./Trapezium";
import triangle, { Triangle } from "./Triangle";

// the default values as defined in the diff configuration files
export const defaultValues = {
  Circle: circle.DEFAULT_VALUES,
  Ellipse: ellipse.DEFAULT_VALUES,
  Square: square.DEFAULT_VALUES,
  Rectangle: rectangle.DEFAULT_VALUES,
  Kite: kite.DEFAULT_VALUES,
  Parallelogram: parallelogram.DEFAULT_VALUES,
  Polygon: polygon.DEFAULT_VALUES,
  Rhombus: rhombus.DEFAULT_VALUES,
  Star: star.DEFAULT_VALUES,
  Trapezium: trapezium.DEFAULT_VALUES,
  Triangle: triangle.DEFAULT_VALUES,
};

// the config input fields for each component
export const configFields = {
  Circle,
  Ellipse,
  Square,
  Rectangle,
  Kite,
  Parallelogram,
  Polygon,
  Rhombus,
  Star,
  Trapezium,
  Triangle,
};

// these functions convert the parameters of these shapes into commands which can be passed to the d attribute of path element to draw the shape
export const dFunctions = {
  Circle: circle.getD,
  Ellipse: ellipse.getD,
  Square: square.getD,
  Rectangle: rectangle.getD,
  Kite: kite.getD,
  Parallelogram: parallelogram.getD,
  Polygon: polygon.getD,
  Rhombus: rhombus.getD,
  Star: star.getD,
  Trapezium: trapezium.getD,
  Triangle: triangle.getD,
};

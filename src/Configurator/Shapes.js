import circle, { Circle } from "./Circle";
import ellipse, { Ellipse } from "./Ellipse";
import square, { Square } from "./Square";
import rectangle, { Rectangle } from "./Rectangle";
import kite, { Kite } from "./Kite";
import parallelogram, { Parallelogram } from "./Parallelogram";
import { Polygon, DEFAULT_VALUES as polygonDefaults } from "./Polygon";
import rhombus, { Rhombus } from "./Rhombus";
import { Star, DEFAULT_VALUES as starDefaults } from "./Star";
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
  Polygon: polygonDefaults,
  Rhombus: rhombus.DEFAULT_VALUES,
  Star: starDefaults,
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
  Polygon,
  Rhombus: rhombus.getD,
  Star,
  Trapezium: trapezium.getD,
  Triangle: triangle.getD,
};

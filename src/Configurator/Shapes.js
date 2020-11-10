import circle, { Circle } from "./Circle";
import ellipse, { Ellipse } from "./Ellipse";
import square, { Square } from "./Square";
import rectangle, { Rectangle } from "./Rectangle";
import { Kite, DEFAULT_VALUES as kiteDefaults } from "./Kite";
import {
  Parallelogram,
  DEFAULT_VALUES as parallelogramDefaults,
} from "./Parallelogram";
import { Polygon, DEFAULT_VALUES as polygonDefaults } from "./Polygon";
import { Rhombus, DEFAULT_VALUES as rhombusDefaults } from "./Rhombus";
import { Star, DEFAULT_VALUES as starDefaults } from "./Star";
import { Trapezium, DEFAULT_VALUES as trapeziumDefaults } from "./Trapezium";
import { Triangle, DEFAULT_VALUES as triangleDefaults } from "./Triangle";

// the default values as defined in the diff configuration files
export const defaultValues = {
  Circle: circle.DEFAULT_VALUES,
  Ellipse: ellipse.DEFAULT_VALUES,
  Square: square.DEFAULT_VALUES,
  Rectangle: rectangle.DEFAULT_VALUES,
  Kite: kiteDefaults,
  Parallelogram: parallelogramDefaults,
  Polygon: polygonDefaults,
  Rhombus: rhombusDefaults,
  Star: starDefaults,
  Trapezium: trapeziumDefaults,
  Triangle: triangleDefaults,
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
  Kite,
  Parallelogram,
  Polygon,
  Rhombus,
  Star,
  Trapezium,
  Triangle,
};

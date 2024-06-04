"use strict";

class GeometricFigure {
  constructor(name) {
    this.name = name;
  }

  draw() {
    document.write(`Це ${this.name}.<br>`);
  }
}

class Square extends GeometricFigure {
  constructor(sideLength) {
    super("квадрат");
    this.sideLength = sideLength;
  }

  draw() {
    super.draw();
    document.write(`Довжина сторон: ${this.sideLength}<br>`);
    document.write(
      `<div style="width: ${this.sideLength}px; height: ${this.sideLength}px; background-color: blue;"></div><br>`
    );
  }
}

class Rectangle extends GeometricFigure {
  constructor(width, height) {
    super("прямокутник");
    this.width = width;
    this.height = height;
  }

  draw() {
    super.draw();
    document.write(`Ширина: ${this.width}, Висота: ${this.height}<br>`);
    document.write(`<div style="width: ${this.width}px; height: ${this.height}px; background-color: red;"></div><br>`);
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super("коло");
    this.radius = radius;
  }

  draw() {
    super.draw();
    document.write(`Радіус: ${this.radius}<br>`);
    document.write(
      `<div style="width: ${this.radius * 2}px; height: ${
        this.radius * 2
      }px; background-color: green; border-radius: 50%;"></div><br>`
    );
  }
}

class EnhancedGeometricFigure extends GeometricFigure {
  constructor(name) {
    super(name);
  }

  setRandomBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
    document.write(`Випадковий фоновий колір: ${randomColor}<br>`);
  }
}

const square = new Square(100);
const rectangle = new Rectangle(120, 80);
const circle = new Circle(50);
const enhancedFigure = new EnhancedGeometricFigure("фігура");

enhancedFigure.setRandomBackgroundColor();
square.draw();
rectangle.draw();
circle.draw();

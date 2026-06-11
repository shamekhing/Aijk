// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  constructor(width = 80, height = 60) {
    this._width = width;
    this._height = height;
  }

  get width() { return this._width; }
  get height() { return this._height; }

  set width(w) { this._width = w; }
  set height(h) { this._height = h; }

  resize(newWidth, newHeight) {
    this.width = Math.max(1, newWidth);
    this.height = Math.max(1, newHeight);
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this._x = x;
    this._y = y;
  }

  get x() { return this._x; }
  get y() { return this._y; }

  set x(x) { this._x = x; }
  set y(y) { this._y = y; }

  move(newX, newY) {
    this.x = Math.max(0, newX);
    this.y = Math.max(0, newY);
  }
}

export class ProgramWindow {
  constructor() {
    this._screenSize = new Size(800, 600);
    this._position = new Position();
    this._size = new Size();
  }

  get screenSize() { return this._screenSize; }
  get size() { return this._size; }
  get position() { return this._position; }

  set screenSize(s) { this._screenSize = s; }
  set size(s) { this._size = s; }
  set position(p) { this._position = p; }

  resize(newSize) {
    let { width: w, height: h } = newSize;
    const { x, y } = this.position;
    const { width: sw, height: sh } = this.screenSize;

    this.size.resize(
      Math.min(sw, w + x) - x,
      Math.min(sh, h + y) - y
    );
  }

  move(newPosition) {
    let { x, y } = newPosition;
    const { width: w, height: h } = this.size;
    const { width: sw, height: sh } = this.screenSize;

    this.position.move(
      Math.min(sw, w + x) - w,
      Math.min(sh, h + y) - h
    );
  }
}

export function changeWindow(newWindow) {
  const s = new Size(400, 300), p = new Position(100, 150);

  //console.log(newWindow,s,p)

  newWindow.resize(s);

  //console.log(newWindow,s,p)

  newWindow.move(p);

  //console.log(newWindow,s,p)

  return newWindow;
}
// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * @typedef {function (number, number): [number, number]} CallbackType
 */

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(ix=0, iy=0) {
  let x = ix, y = iy;
  return function dxy(dx=0,dy=0) {
    return [x+dx,y+dy];
  }
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(ix, iy) {
  let x = ix, y = iy;
  return function dxy(sx=0,sy=0) {
    return [x*sx,y*sy];
  }
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {CallbackType} f the first function to apply
 * @param {CallbackType} g the second function to apply
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  const translate = f, scale = g;
  return function transform(x,y) {
    let tmp = translate(x,y);
    return scale(tmp[0],tmp[1])
  }
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {CallbackType} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {CallbackType} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  let lastX;
  let lastY;
  let lastResult;
  let hasLastResult = false;

  return function (x, y) {
    if (!hasLastResult || x !== lastX || y !== lastY) {
      lastX = x;
      lastY = y;
      lastResult = f(x, y);
      hasLastResult = true;
    }

    return lastResult;
  };
}
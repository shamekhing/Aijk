// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
  
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
  default:
    return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  
  let wedgesSum = 0;
  let counter = 0;
  while (wedgesSum < wedgesNeeded && counter < limes.length){
    let limeSize = limes[counter++];
    wedgesSum += limeSize == "small"? 6: limeSize == "large"? 10:8;
  }
  console.log(wedgesNeeded, limes, wedgesSum)
  return counter;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  console.log(timeLeft, orders)
  do {
    const order = orders.shift();
    timeLeft -= timeToMixJuice(order); 
    console.log(timeLeft, order)
  } while (0 < timeLeft && 0 < orders.length)
  console.log(timeLeft, orders)
  return orders;
}

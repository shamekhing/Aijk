/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(t) {
  return typeof t === "undefined" ? 'You forgot to set the timer.' : !t? 'Lasagna is done.': 'Not done, please wait.'; 
}
export function preparationTime(layers, t=2) {
  return layers.length * t
}

export function quantities(layers) {
  return {
    noodles: layers.filter(x => x == 'noodles').length * 50,
    sauce: layers.filter(x => x == 'sauce').length * 0.2
  }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, n) {
  const r = {...recipe};
  for (const key in r)
    r[key]*= n/2;
  return r;
}
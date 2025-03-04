const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 *//* matrix */
function countCats(a) {
 
  let result = a.join(',').split(",").filter(item => item == "^^").length;
 
  
  return result;
  
 
  // remove line with error and write your code here
}

module.exports = {
  countCats
};

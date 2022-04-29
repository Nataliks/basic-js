const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options) {
    
  let additionToString = [];
  if ((options.addition !== undefined)) {
  for (let i = 0; i < (options.additionRepeatTimes || 1); i++) {
    additionToString.push(String(options.addition));
  }
  }
  
  let separatorAddition = options.additionSeparator || "|";

  let additionWithSeparator = additionToString.join(`${separatorAddition}`)
   
  let string =[];

  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    if(additionToString.length > 0) {
      string.push (String(str) + additionWithSeparator);
    } else {
      string.push (String(str))
    }
  }
  
  let separatorString = options.separator || "+";
  let res = string.join(`${separatorString}`)
  return res;
 
  
}

module.exports = {
  repeater
};

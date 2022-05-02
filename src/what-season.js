const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  
  if (!date) {
    throw new NotImplementedError('Unable to determine the time of year!');
  }
  
  if (Object.prototype.toString.call(date) !== '[object Date]' || (!(date instanceof Date)) || Object.getPrototypeOf(date).constructor !== Date) {
    throw new NotImplementedError('Invalid date!');
  } 

    
  try {
    let month = date.getMonth();
    let time = date.getTime();
      
    if (month === 11 || month === 0 || month === 1) {
      return "winter";
    } else if (month === 2 || month === 3 || month === 4) {
      return "spring";
    }else if (month === 5 || month === 6 || month === 7) { 
      return "summer";
    } else if(month === 8 || month === 8 || month === 10) {
      return "autumn";
    } else {
      throw new NotImplementedError('Invalid date!');
    }
    
 } catch (err) {
    throw new NotImplementedError('Invalid date!');
 }
 

}


module.exports = {
  getSeason
};


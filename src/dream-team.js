const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
 
  if (Array.isArray(members) == false) return false;

  let arrOfNames = members.filter(item => typeof(item) == "string").map(item => item = item.trimStart());


  let firstLetter = arrOfNames.map(item => item = item [0].toUpperCase());
  let sortLetter = firstLetter.sort((a, b) => {
    if (a > b) {
     return 1;
    } else if(a < b){
      return -1;
    } else {
      return 0;
    }
  })

  let result = sortLetter.join('');

  return result;

  
}

module.exports = {
  createDreamTeam
};

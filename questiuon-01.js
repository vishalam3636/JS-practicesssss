/*
Count the Capital Letters
Given a string of lettersow many capital letters are there?

Examples
capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6

capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14

capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0
*/

// A- 65 Z-90
// "A".charCodeAt(0)
// if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
//   console.log(true);
// } else {
//   false;
// }

// SOl-01
function capitalLetters(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
      count++;
    } else {
      continue;
    }
  }

  return count;
}

// console.log(capitalLetters("hvbHKuFxMORMuBYRsgNF"));
// console.log(capitalLetters("nrrvrXlmfwjwlbcjwrzt"));
// console.log(capitalLetters("VdefGMkIeTUipnLhnIfe"));
// console.log(capitalLetters("ShwvYyeQdGsJYRBhoihI"));
// console.log(capitalLetters("ykEblUluPthiCMhxQFlz"));
// console.log(capitalLetters("NCdLUzNdihwUumkqfJqN"));

//  OTHERS SOLUTION
function capitalLetters(str) {
  let count = 0;

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === str[i].toUpperCase()) {
      count++;
    }
  }

  return count;
}

console.log(capitalLetters("hvbHKuFxMORMuBYRsgNF"));
// console.log(capitalLetters("nrrvrXlmfwjwlbcjwrzt"));
// console.log(capitalLetters("VdefGMkIeTUipnLhnIfe"));
// console.log(capitalLetters("ShwvYyeQdGsJYRBhoihI"));
// console.log(capitalLetters("ykEblUluPthiCMhxQFlz"));
// console.log(capitalLetters("NCdLUzNdihwUumkqfJqN"));

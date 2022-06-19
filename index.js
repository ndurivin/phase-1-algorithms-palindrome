function isPalindrome(word) {
  // Write your algorithm here
 
if (word === word.split("").reverse().join("")){
  return true
} else{
  return false
};

}


/* 
  Add your pseudocode here
  write the function to check the word
  slit the word, reverse, then join
  Compare the word and the reversed version
  if palindrome return true, if not return false
*/
/*
  Add written explanation of your solution here
  write the function that accepts the word as a parameter
  in JS, .reverse only works in arrays and so the word is  slit, reversed then later joined
  the resulting word is then compared against the one provided
  If the two compare both forward and in reverse, its a palindrome hence return true, if not return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

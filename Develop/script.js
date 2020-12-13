// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "_"];

var generateRandom = function() {
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  console.log(passwordLength)

  var useLowercase = window.confirm("Would you like to include lowercase letters?")
  console.log(useLowercase)
    //lowercase random
    if (useLowercase) {
      for (var i = 0; i < 1; i++) {
        var lowercaseRandom = lowercase[Math.floor(Math.random() * 26)]
        console.log(lowercaseRandom)
      }
    }
  var useUppercase = window.confirm("Would you like to include uppercase letters?")
  console.log(useUppercase)
    //uppercase random
    if (useUppercase) {
      for (var i = 0; i < 1; i++) {
        var uppercaseRandom = uppercase[Math.floor(Math.random() * 26)]
        console.log(uppercaseRandom)
      }
    }
  var useNumber = window.confirm("Would you like to include numbers?")
  console.log(useNumber)
    //number random
    if (useNumber) {
      for (var i = 0; i < 1; i++) {
        var numberRandom = number[Math.floor(Math.random() * 10)]
        console.log(numberRandom)
      }
    }
  var useSpecial = window.confirm("Would you like to include special characters?")
  console.log(useSpecial)
    //special random
    if (useSpecial) {
      for (var i = 0; i < 1; i++) {
        var specialRandom = special[Math.floor(Math.random() * 31)]
        console.log(specialRandom)
      }
    }
  }

var generatePassword=function() {
  for (var i = 0; i < passwordLength; i++) {
    var password = generatePassword[Math.floor(Math.random() * 4)]
    console.log(password)
  }
}

  // Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateRandom ()
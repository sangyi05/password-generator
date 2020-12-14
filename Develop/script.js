// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "_"];

var generatePassword = function() {
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  console.log(passwordLength)

  var useLowercase = window.confirm("Would you like to include lowercase letters?")
  var useUppercase = window.confirm("Would you like to include uppercase letters?")
  var useNumber = window.confirm("Would you like to include numbers?")
  var useSpecial = window.confirm("Would you like to include special characters?")

  //create new array based on user's choices
  var characterOptions = [];
  var userPassword = [];
    if (useLowercase) {
      characterOptions=characterOptions.concat(lowercase);
    } 
      //don't use lowercase index
    if (useUppercase) {
      characterOptions=characterOptions.concat(uppercase);
    } 
      //don't use uppercase index
    if (useNumber) {
      characterOptions=characterOptions.concat(number)
    }
      //don't use number index
    if (useSpecial) {
      characterOptions=characterOptions.concat(special) 
    } 
      //don't use special index
    console.log(characterOptions)
    
    for (var i = 0; i < passwordLength; i++){
      userPassword.push(characterOptions[Math.floor(Math.random()*characterOptions.length)])
  }

  return userPassword.join("");

  console.log(userPassword)
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

//generateRandom()
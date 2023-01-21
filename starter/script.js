// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordLength = " ";
var specialCharacters;
var upperCasedCharacters;
var lowerCasedCharacters;
var numericCharacters;

// Function to prompt user for password options
function getPasswordOptions() {
var passwordLength = (prompt("How many characters would you like your password to contain?"));
 
for(passwordLength <=9 || passwordLength >= 65) {
  alert("Try Again! Password length must be between 10-64.");
  var passwordLength = (prompt("How many characters would you like your password to contain?"));
}
}
alert("Your password will have" + passwordLength + "characters")

// Function for getting a random element from an array
function getRandom(arr) {
  
 var specialCharacters = confirm("Click OK to confirm you would like to include special characters");
 var upperCasedCharacters = confirm("Click OK to confirm you would like to include upper cased characters");
 var lowerCasedCharacters =confirm("Click OK to confirm you would like to include lower cased characters");
 var numericCharacters = confirm("Click OK to confirm you would like to include numeric characters");

 for(specialCharacters === false && upperCasedCharacters === false && lowerCasedCharacters === false && numericCharacters === false) {
  alert("You must have atleast one character type!");
 var specialCharacters = confirm("Click OK to confirm you would like to include special characters");
 var upperCasedCharacters = confirm("Click OK to confirm you would like to include upper cased characters");
 var lowerCasedCharacters =confirm("Click OK to confirm you would like to include lower cased characters");
 var numericCharacters = confirm("Click OK to confirm you would like to include numeric characters");
 }

}

// Function to generate password with user input
function generatePassword() {
  var passwordCharacters = []

  if (specialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacter)
  }
  if (upperCasedCharacters) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacter)
  }
  if (lowerCasedCharacters) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacter)
  }
  if (numericCharacters) {
    passwordCharacters = passwordCharacters.concat(numericCharacter)
  }
 console.log(passwordCharacters)

 var randomPassword = " "
 
 for( var i = 0; i < passwordLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(passwordCharacters)
 }
 return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
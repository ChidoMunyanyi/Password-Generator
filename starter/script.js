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

var confirmPasswordLength = " ";
var confirmSpecialCharacters;
var confirmUpperCasedCharacters;
var confirmLowerCasedCharacters;
var confirmNumericCharacters;

// Function to prompt user for password options
function generatePassword() {
var confirmPasswordLength = (prompt("How many characters would you like your password to contain?"));
 
while(confirmPasswordLength <=9 || confirmPasswordLength >= 65) {
  alert("Try Again! Password length must be between 10-64.");
  var confirmPasswordLength = (prompt("How many characters would you like your password to contain?"));
}
alert("Your password will have " + confirmPasswordLength + " characters");
  
 var confirmSpecialCharacters = confirm("Click OK to confirm you would like to include special characters");
 var confirmUpperCasedCharacters = confirm("Click OK to confirm you would like to include upper cased characters");
 var confirmLowerCasedCharacters =confirm("Click OK to confirm you would like to include lower cased characters");
 var confirmNumericCharacters = confirm("Click OK to confirm you would like to include numeric characters");

 while(confirmSpecialCharacters === false && confirmUpperCasedCharacters === false && confirmLowerCasedCharacters === false && confirmNumericCharacters === false) {
  alert("You must have atleast one character type!");
 var confirmSpecialCharacters = confirm("Click OK to confirm you would like to include special characters");
 var confirmUpperCasedCharacters = confirm("Click OK to confirm you would like to include upper cased characters");
 var confirmLowerCasedCharacters =confirm("Click OK to confirm you would like to include lower cased characters");
 var confirmNumericCharacters = confirm("Click OK to confirm you would like to include numeric characters");
 }

  var passwordCharacters = []

  if (confirmSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  }
  if (confirmUpperCasedCharacters) {
    passwordCharacters = passwordCharacters.concat(upperCasedCharacters)
  }
  if (confirmLowerCasedCharacters) {
    passwordCharacters = passwordCharacters.concat(lowerCasedCharacters)
  }
  if (confirmNumericCharacters) {
    passwordCharacters = passwordCharacters.concat(numericCharacters)
  }
 console.log(passwordCharacters)

 var randomPassword = " "
 
 for( var i = 0; i < confirmPasswordLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword)
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

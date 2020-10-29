// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Ask users how long and what to include in their password
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be? Between 8 and 30 characters?");
  if (passwordLength < 8 || passwordLength > 30) {
    alert("Invalid number choice")
  } else {
useUpperCase = confirm("Do you want upper case letters?");
useLowerCase = confirm("Do you want lower case letters?");
useSpecialChars = confirm('Do you want special characters?')
useNumbers = confirm('Do you want numbers?');
  }
}
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
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".split("");

function generatePassword() {
  var fnPassword = "";
  var useLowerCase = "";
  var useUpperCase = "";
  var useSpecialChars = "";
  var useNumbers = "";


  var passwordLength = prompt("How long do you want your password to be? Between 8 and 30 characters?");
  if (passwordLength < 8 || passwordLength > 30) {
    alert("Invalid number choice");
  } else {
    useLowerCase = confirm("Do you want lower case letters?");
    useUpperCase = confirm("Do you want upper case letters?");
    useSpecialChars = confirm("Do you want special characters?");
    useNumbers = confirm("Do you want numbers?");
  }

  if (useLowerCase !== true && useUpperCase !== true && useSpecialChars !== true && useNumbers !== true) {
    confirm("Please choose at least one option.");
  } else if (useLowerCase === true && useUpperCase === true && useSpecialChars === true && useNumbers === true) {
    for (var i = 0; i <= fnPassword; i++);
    fnPassword = fnPassword + value.values(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  return fnPassword;
}

generatePassword();
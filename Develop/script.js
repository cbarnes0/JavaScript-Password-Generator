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

function generatePassword() {

  // Add window.prompt to type in how long you want password to be 
  var passwordLength = Number(window.prompt('How long would you like your password to be? Please choose between 8 and 128.'));
  
  // Variables set to comfirm prompts for each of the required questions
  var useUppercase = confirm("Do you want to include uppercase letters in your password?");
  var useLowercase = confirm("Do you want to include lowercase letters in your password?");
  var useNumbers = confirm("Do you want to include numbers in your password?");
  var useSpecial = confirm("Do you want to include special characters in your password?");
  var charset = "";
  
  // Using an conditional statement to add availible characters to previously empty charset variable
  if (useUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useNumbers) {
    charset += "0123456789";
  }
  if (useSpecial) {
    charset += "!#$%&*+-/:;<=>?@[]^_`{|}~()";
  }

  // Empty password variable to be filled by the following iteration
  var password = "";

  for (var i = 0, n = charset.length; i < passwordLength; i++) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  // Displays password
  return password;
}
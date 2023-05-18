// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to prompt user for password criteria and generate password
function generatePassword() {
  // Creates the character sets (lowercase, uppercase, number, special)
  var charSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()_+-={}[]|\\:;\"',.?/~`"
  };

  // Prompt user for password character length. Had to use google to find the parseInt but that is what ties the number value stored in the passlength.
  var passLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
  
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Invalid password length!!! Please enter a number between 8 and 128.");
    return;
  }

  // Prompt user for character types to include in password. I feel like there is an easier way to do this but i dont know how.
  var useLowercase = confirm("Include lowercase letters?");
  var useUppercase = confirm("Include uppercase letters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");

  // Make sure at least one character type is selected. I'll be honest I googled this one. I struggle to understand the use of "!" before the variable name. What I think it does is display the alert if they dont choose any of these but still select a password length.
   if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
     alert("You must select at least one character type!");
     return;
   }

  // Build character set based on user selections
  var charSet = "";
  if (useLowercase) {
    charSet += charSets.lowercase;
  }
  if (useUppercase) {
    charSet += charSets.uppercase;
  }
  if (useNumeric) {
    charSet += charSets.numeric;
  }
  if (useSpecial) {
    charSet += charSets.special;
  }

  // Generate password using the characters we made variables and adding the length. 
  var password = "";
  for (var i = 0; i < passLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return password;
}
//This selects the the element with the password id and the passwordText stores the value to the element i believe?
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  
  
  
  
  
  










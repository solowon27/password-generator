project name: password-generator-by-solomon-tegegne
Date: 2021-01-23
Author: Solomon Tegegne based on university of utah bootcamp challenge
# password-generator-by-solomon-tegegne
A random password generator application for education purpose
## Description

This website generates a random password basically using javascript. The user can select the length of the password and also select the character types to include in the password. The password must be at least 8 characters long and must contain at least one character type. The password is displayed in the password element and the code words for each character in the password are displayed in the military-code element. The code words are based on the NATO phonetic alphabet and the names of the symbols on a standard keyboard. the reason why i added the code words is to make it more proffessional and fun to use.

## explanation of the code

# CodeWords
CodeWords is an object that maps each character in the generated password to a word or phrase that corresponds to the NATO phonetic alphabet or the name of the symbol.

# Variables
lowerCase: a string containing all lowercase letters
upperCase: a string containing all uppercase letters
number: a string containing all numbers
symbol: a string containing all symbols
codeWords: an object containing mappings for each character in the generated password
lowerEl: an element that represents the checkbox for lowercase letters
upperEl: an element that represents the checkbox for uppercase letters
numberEl: an element that represents the checkbox for numbers
symbolEl: an element that represents the checkbox for symbols
lengthEl: an element that represents the input for password length
passwordEl: an element that represents the output for the generated password
titleEl: an element that represents the title of the webpage
originalValue: a string containing the original value of the main heading element of the webpage
pwdMode: a boolean variable that tracks whether the title element is in password mode or not
# Functions
displayMessage(): a function that toggles the display of asterisks in the title element
generatePassword(): a function that generates a random password based on the selected criteria
writePassword(): a function that writes the generated password to the password element and also displays the code words for each character in the password
# Event Listeners
generateBtn: an event listener that listens for clicks on the "Generate Password" button and calls the writePassword() function. It also checks if the password length is at least 8 characters and if at least one character type is selected. If these conditions are not met, an alert is displayed.
## Usage

To use this application, click the "Generate Password" button and follow the prompts. The password must be at least 8 characters long and must contain at least one character type.
## installation
no installation required just click the  deployed application link below and will work on any browser.

## Credits

 with the help of youtube video by traversi media was used to create this application https://www.youtube.com/watch?v=duNmhKgtcsI&t=173s

## License
no license required

## Contributing
anyone can contribute to this project this is an open source project.
## link to the deployed application
this is the link to the deployed application https://solowon27.github.io/password-generator-by-solomon-tegegne/

Thank you for reading this file and using my application. I hope you enjoyed it. If you have any questions or suggestions, please contact me at solowon27@hotmail.com
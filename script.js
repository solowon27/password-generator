// Assignment Code

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const codeWords = {
  a: "alpha", A: "ALPHA", b: "bravo", B: "BRAVO", c: "charlie", C: "CHARLIE", d: "delta", D: "DELTA", e: "echo", E: "ECHO", f: "foxtrot", F: "FOXTROT", g: "golf", G: "GOLF", h: "hotel", H: "HOTEL", i: "india", I: "INDIA", j: "juliet", J: "JULIET", k: "kilo", K: "KILO", l: "lima", L: "LIMA", m: "mike", M: "MIKE", n: "november", N: "NOVEMBER", o: "oscar", O: "OSCAR", p: "papa", P: "PAPA", q: "quebec", Q: "QUEBEC", r: "romeo", R: "ROMEO", s: "sierra", S: "SIERRA", t: "tango", T: "TANGO", u: "uniform", U: "UNIFORM", v: "victor", V: "VICTOR", w: "whiskey", W: "WHISKEY", x: "x-ray", X: "X-RAY", y: "yankee", Y: "YANKEE", z: "zulu", Z: "ZULU",
  1: "1", 2: "2", 3: "3", 4: "4", 5: "5",6: "6", 7: "7", 8: "8", 9: "9", 0: "0",
  "!": "exclamation-mark","@": "at-sign","#": "hash","$": "dollar-sign","%": "percent-sign","^": "caret","&": "ampersand","*": "asterisk","(": "left-parenthesis",")": "right-parenthesis","_": "underscore","+": "plus-sign","~": "tilde","`": "grave-accent","|": "vertical-bar","}": "right-curly-bracket","{": "left-curly-bracket","]": "right-square-bracket","[": "left-square-bracket",":": "colon",";": "semicolon","<": "less-than-sign",">": "greater-than-sign",",": "comma",".": "period","/": "forward-slash","-": "hyphen","=": "equals-sign", "?": "question-mark"
};

const lowerEl = document.getElementById("lower-chk");
const upperEl = document.getElementById("upper-chk");
const numberEl = document.getElementById("number-chk");
const symbolEl = document.getElementById("symbol-chk");
const lengthEl = document.getElementById("length");
const passwordEl = document.getElementById("password");
const titleEl = document.getElementById("main-title");

const originalValue = titleEl.textContent;
let pwdMode = false;

function displayMessage() {
  if (pwdMode) {
    let asterisk = "";
    for (let i = 0; i < originalValue.length; i++) {
      asterisk += "*";
    }
    titleEl.textContent = asterisk;
    pwdMode = false;
  } else {
    titleEl.textContent = originalValue;
    pwdMode = true;
  }
}

setInterval(displayMessage, 2000);


function generatePassword() {
  let password = "";
  const length = +lengthEl.value;
  const charset = ( 
    (lowerEl.checked ? lowerCase : "") +
    (upperEl.checked ? upperCase : "") +
    (numberEl.checked ? number : "") +
    (symbolEl.checked ? symbol : "")
  );
  for (let i = 0; i < length; i++) {
    let generatedPassword = Math.floor(Math.random() * charset.length);
    password += charset.charAt(generatedPassword);
  }
  return password;
}
function writePassword() {
  let password = generatePassword();
  document.querySelector("#password").value = password;

  let codeWordsDisplay = "";
  for (let i = 0; i < password.length; i++) {
    let char = password.charAt(i);
    if (char === upperCase.toUpperCase() && codeWords.hasOwnProperty(char)) {
      codeWordsDisplay += codeWords[char.toUpperCase()].toUpperCase() + " ";
    } else {
      codeWordsDisplay += codeWords[char] + " ";
    }
  }
  document.querySelector("#code-words").textContent = codeWordsDisplay.trim();
}



const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowerEl.checked;
  const hasUpper = upperEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  if (length < 8 || length > 128 || !hasLower && !hasUpper && !hasNumber && !hasSymbol) {
    alert("Please select at least one character type and a minimum password length of 8 characters or not more than 128.");
    return;
  }
});
generateBtn.addEventListener("click", writePassword);


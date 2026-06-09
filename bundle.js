(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* global DOMException */

module.exports = clipboardCopy

function makeError () {
  return new DOMException('The request is not allowed', 'NotAllowedError')
}

async function copyClipboardApi (text) {
  // Use the Async Clipboard API when available. Requires a secure browsing
  // context (i.e. HTTPS)
  if (!navigator.clipboard) {
    throw makeError()
  }
  return navigator.clipboard.writeText(text)
}

async function copyExecCommand (text) {
  // Put the text to copy into a <span>
  const span = document.createElement('span')
  span.textContent = text

  // Preserve consecutive spaces and newlines
  span.style.whiteSpace = 'pre'
  span.style.webkitUserSelect = 'auto'
  span.style.userSelect = 'all'

  // Add the <span> to the page
  document.body.appendChild(span)

  // Make a selection object representing the range of text selected by the user
  const selection = window.getSelection()
  const range = window.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  // Copy text to the clipboard
  let success = false
  try {
    success = window.document.execCommand('copy')
  } finally {
    // Cleanup
    selection.removeAllRanges()
    window.document.body.removeChild(span)
  }

  if (!success) throw makeError()
}

async function clipboardCopy (text) {
  try {
    await copyClipboardApi(text)
  } catch (err) {
    // ...Otherwise, use document.execCommand() fallback
    try {
      await copyExecCommand(text)
    } catch (err2) {
      throw (err2 || err || makeError())
    }
  }
}

},{}],2:[function(require,module,exports){
function generatePassword(length = 12, includeUppercase = true, includeLowercase = true, includeNumbers = true, includeSymbols = true) {
    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
    const numberCharset = "0123456789";
    const symbolCharset = "!@#$%^&*()-_=+";

    let charset = '';

    if (includeUppercase) charset += uppercaseCharset;
    if (includeLowercase) charset += lowercaseCharset;
    if (includeNumbers) charset += numberCharset;
    if (includeSymbols) charset += symbolCharset;

    if (charset === '') {
        throw new Error('At least one character set must be included.');
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

module.exports = generatePassword;

},{}],3:[function(require,module,exports){
// PASSWORD SETTINGS

// OPTION TO SET ALL

var setAll = document.getElementById("setAll").addEventListener('change', (e)=> {
  if (e.target.checked) {
      document.getElementById("caps").checked = true
      document.getElementById("small").checked = true 
      document.getElementById("charst").checked = true 
      document.getElementById("num").checked = true 
  } else {
      document.getElementById("caps").checked = false
      document.getElementById("small").checked = false 
      document.getElementById("charst").checked = false 
      document.getElementById("num").checked = false 
  }

})

// SET CAPS
var setOptionCap = document.getElementById("caps");
setOptionCap.addEventListener('change', () => {
    setCaps = setOptionCap.checked;
})

// SET LOWERCASE
var setOptionLow = document.getElementById("small");
setOptionLow.addEventListener('change', ()  => {
    setLow = setOptionLow.checked;
})

// SET SPECIAL-CHARACTER
var setOptionCharst = document.getElementById("charst");
setOptionCharst.addEventListener('change', ()  => {
    setChar = setOptionCharst.checked;
})

// SET NUMBERS
var setOptionNum = document.getElementById("num");
setOptionNum.addEventListener('change', ()  => {
    setNum = setOptionNum.checked;
})

// PASSWORD LENGTH
var c = 8;

const incr = document.getElementById("incr");


incr.addEventListener('click', () => {
    (c < 24) && (c = c + 4 ), update(); 
});    

const decr = document.getElementById("decr");
decr.addEventListener('click', () => {
    (c > 8) && (c = c - 4), update();
})    

const update = () => {
    const count = document.getElementById('count');    
    count.textContent = c;
}    

// HANDLE GENERATE PASSWORD

var password = "";

const passGen = document.getElementById("passGen");
passGen.addEventListener('click', () => {
    const generatePassword = require('secure-password-gen');
    const passwordLength = document.getElementById("count").textContent;
    const newPassword = document.getElementById("newPassword");
    const setCaps = setOptionCap.checked;
    const setLow = setOptionLow.checked;
    const setNum = setOptionNum.checked;
    const setChar = setOptionCharst.checked;
     
    // if (Error) {
    //   alert("Set Preffered Character Set")
    // } else {
      password = generatePassword(passwordLength, setCaps, setLow, setNum, setChar);
      newPassword.value = password;
    // }
    
    return password;
})

// HANDLE COPY TO CLIPBOARD

const clipboard = require('clipboard-copy');
const toCopy = document.getElementById("toCopy");
toCopy.addEventListener('click', () => {
  clipboard(password);
  toCopy.textContent = "✅";
  setTimeout(() => {
    toCopy.textContent = "📋";    
  }, 1000);
})

},{"clipboard-copy":1,"secure-password-gen":2}]},{},[3]);

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
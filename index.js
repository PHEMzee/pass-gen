
// PASSWORD LENGTH
const incr = document.querySelector("#incr");
var c = 8;

incr.addEventListener('click', function () {
    (c < 24) && (c = c + 4 ), update(); 
}) 
const dec = () => {
    (c > 8) && (c = c - 4), update();
}
const update = () => {
    const count = document.getElementById('count');    
    count.textContent = c;    
}


// PASSWORD SETTINGS
// SET CAPS
const setCaps = (e) => {
    const setValue = e.target.checked;
  setValue && console.log(setValue)
}

// SET LOWERCASE
const setLow = (e) => {
    const setValue = e.target.checked
               
}

// SET SPECIAL-CHARACTER
const setChar = (e) => {e
    const setValue = e.target.checked
             
}

// SET NUMBERS
const setNum = (e) => {
    const setValue = e.target.checked

}


// PASSWORD GENERATOR CODE
var minLength = 8;
var upperCaseMinCount = 2;
var lowerCaseMinCount = 2;
var numberMinCount = 2;
var specialMinCount = 2;

var UPPERCASE_RE = /([A-Z])/g;
var LOWERCASE_RE = /([a-z])/g;
var NUMBER_RE = /([\d])/g;
var SPECIAL_CHAR_RE = /([\?\-])/g;
var NON_REPEATING_CHAR_RE = /([\w\d\?\-])\1{2,}/g;

    
    function isStrongEnough(password) {
        var uc = password.match(UPPERCASE_RE);
        var lc = password.match(LOWERCASE_RE);
        var n = password.match(NUMBER_RE);
        var sc = password.match(SPECIAL_CHAR_RE);
        var nr = password.match(NON_REPEATING_CHAR_RE);
    
        return password.length >= minLength && !nr && uc && uc.length >= upperCaseMinCount && lc && lc.length >= lowerCaseMinCount && n && n.length >= numberMinCount && sc && sc.length >= specialMinCount;
    }
    
    function customPassword() {
        const generatePassword = require('password-generator');
        var password = "";
        
        while (!isStrongEnough(password)) {
            password = generatePassword(c, "", /[\w\d\?\-]/);
        }
        return password;
    }
        console.log(customPassword());
        
        
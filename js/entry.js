
function validate() {
    var nameRX = /^[a-zA-Z]+$/;
    var dOfBRX = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    var emailRX = /^[a-zA-Z_\.]+@[a-zA-Z_]+?\.[a-zA-Z\.]+$/;
    var addRX = /^[0-9]+[\s]{1}[A-Za-z\s]+$/;
    var pcRX = /^[A-Z]{1,2}[0-9]{1,2}\s[0-9]{1,2}[A-Z]{2}$/;

    var passed = true;

    passed = checkRX('name', nameRX);
    passed = checkRX('DofB', dOfBRX);
    passed = checkRX('email', emailRX);
    passed = checkRX('address', addRX);
    passed = checkRX('pCode', pcRX);

    return passed;
}

function checkRX(str, rx)  {
    if(!document.getElementById(str).value.match(rx))    {
        document.getElementById(str).style.background = 'red';
        console.log("invalid " + str);
        return false;
    } else {
        document.getElementById(str).style.background = 'white';
        localStorage.setItem(str,document.getElementById(str).value);
        return true
    }
}

function validate() {
    var nameRX = /^[a-zA-Z]+$/;
    var dOfBRX = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    var emailRX = /^[a-zA-Z_\.]+@[a-zA-Z_]+?\.[a-zA-Z\.]+$/;
    var addRX = /^[0-9]+[\s]{1}[A-Za-z\s]+$/;
    var pcRX = /^[A-Z]{1,2}[0-9]{1,2}\s[0-9]{1,2}[A-Z]{2}$/;

    passed = true;

    if(!document.getElementById('name').value.match(nameRX))    {
        document.getElementById('name').style.background = 'red';
        console.log("invalid name");
        passed = false;
    } else {
        document.getElementById('name').style.background = 'white';
        localStorage.setItem('forename',document.getElementById('name').value);
    }

    if(!document.getElementById('DofB').value.match(dOfBRX))    {
        document.getElementById('DofB').style.background = 'red';
        console.log("invalid date of birth");
        passed = false;
    } else {
        document.getElementById('DofB').style.background = 'white';
        localStorage.setItem('DofB',document.getElementById('DofB').value);
    }

    if(!document.getElementById('email').value.match(emailRX))    {
        document.getElementById('email').style.background = 'red';
        console.log("invalid email");
        passed = false;
    } else {
        document.getElementById('email').style.background = 'white';
        localStorage.setItem('email',document.getElementById('email').value);
    }

    if(!document.getElementById('address').value.match(addRX))    {
        document.getElementById('address').style.background = 'red';
        console.log("invalid address");
        passed = false;
    } else {
        document.getElementById('address').style.background = 'white';
        localStorage.setItem('address',document.getElementById('address').value);
    }

    if(!document.getElementById('pCode').value.match(pcRX))    {
        document.getElementById('pCode').style.background = 'red';
        console.log("invalid postcode");
        passed = false;
    } else {
        document.getElementById('pCode').style.background = 'white';
        localStorage.setItem('pCode',document.getElementById('pCode').value);
    }

    return passed;
}
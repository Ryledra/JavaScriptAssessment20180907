
onload = function() {
    var name = localStorage.getItem("forename");
    var DofB = localStorage.getItem("DofB");
    var email = localStorage.getItem("email");
    var address = localStorage.getItem("address");
    var postcode = localStorage.getItem("pCode");

    document.getElementById("name").innerHTML += name;
    document.getElementById("DofB").innerHTML += DofB;
    document.getElementById("email").innerHTML += email;
    document.getElementById("address").innerHTML += address;
    document.getElementById("pCode").innerHTML += postcode;

}
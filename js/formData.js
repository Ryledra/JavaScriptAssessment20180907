
onload = function() {

    document.getElementById("name").innerHTML += localStorage.getItem("forename");
    document.getElementById("DofB").innerHTML += localStorage.getItem("DofB");
    document.getElementById("email").innerHTML += localStorage.getItem("email");
    document.getElementById("address").innerHTML += localStorage.getItem("address");
    document.getElementById("pCode").innerHTML += localStorage.getItem("pCode");

}

function validate() {
    var username = document.getElementById("username").value.trim().toLowerCase();
    var password = document.getElementById("password").value.trim().toLowerCase();
if(username == "" && password == ""){
    alert("usename and password must be required");
    return;
}
else if(username == ""){
    alert ("username must be required");
    return;
}
else if(password == ""){
    alert("password must be required");
    return;
}
else if (username.length < 8 || password.length < 8) {
        alert("Username and password should be more than 8 characters");
        return;
    }
    if (username == password) {
        alert("Username and Password can not be same");
        return;
    }

    var pattern = /\W/g;
    var result = password.match(pattern);

    if (result == null) {
        alert("Password must contain atleast 1 special character");
        return;
    }

    alert("Successfully loged in");
}


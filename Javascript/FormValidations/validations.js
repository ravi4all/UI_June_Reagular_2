window.addEventListener("load", initEvents);

var username;
var email;
var password;
var conf_password;

function initEvents() {
    username = document.querySelector("#box_1");
    email = document.querySelector("#box_2");
    password = document.querySelector("#box_3");
    conf_password = document.querySelector("#box_4");
    // span = document.getElementsByTagName("span");
    span = document.querySelectorAll('span');

    username.addEventListener("blur", checkBlank);
    email.addEventListener("keyup", validateEmail);

}

function checkBlank(){
    var str = username.value;
    str = str.trim();
    // if(str == "" || str.length == 0) {
    //     span[0].innerHTML = "Please fill this field";
    // }
    // else {
    //     span[0].innerHTML = "";
    // }

    // Truthy and Falsy
    // if(!str) {
    //     span[0].innerHTML = "Please fill this field";
    // }
    // else {
    //     span[0].innerHTML = "";
    // }

    if(isEmpty(str)) {
        span[0].innerHTML = "Please fill this field";
    }
    else {
        span[0].innerHTML = "";
    }

}

function isEmpty(str){
    return (str == undefined || str == "" || str.length == 0) ? true : false;
}

function validateEmail(){
    var pattern = /[a-z | 0-9]\w+[@]\w+[.]\w{2,3}/;
    var str = email.value;
    if(pattern.test(str)) {
        span[1].innerHTML = "Valid";
    }
    else {
        span[1].innerHTML = "Invalid Email";
    }
}
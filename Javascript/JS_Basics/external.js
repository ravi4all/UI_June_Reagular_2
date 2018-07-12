// Event Binding
// window.addEventListener("load", function(){
//     console.log("Window loaded...")
//     document.getElementById("btn").addEventListener("click", sayHello);
// });

window.addEventListener("load", bindEvents);

function bindEvents(){
    document.getElementById("btn").addEventListener("click", sayHello);
}

function sayHello(){
    console.log("Function called...");
    var username = document.getElementById("box_1").value;
    document.getElementById("hello").innerHTML = username;
}
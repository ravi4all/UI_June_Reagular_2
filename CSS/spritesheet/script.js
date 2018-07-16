var x;
var moveX;
var container;
var sprite;
window.addEventListener("load", initEvents);

function initEvents(){
    container = document.getElementById("container");
    sprite = document.getElementById("sprite");
    document.getElementById("body").addEventListener("keyup", movePlayer);
}

function movePlayer() {
    var key = event.keyCode;
    // console.log(key);
    if(key == 39){
        sprite.className = 'move';
        container.style.transform = 'translateX(-2%)';
    }
    else if(key == 37){

    }
    else {
        sprite.className = "";
    }
}
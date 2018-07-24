var x = 0;
var moveX;
var container;
var sprite;
var bullet;
window.addEventListener("load", initEvents);

function initEvents(){
    container = document.getElementById("container");
    sprite = document.getElementById("sprite");
    bullet = document.getElementById("bullet");
    document.getElementById("body").addEventListener("keyup", movePlayer);
}

function movePlayer() {
    var key = event.keyCode;
    // console.log(key);
    if(key == 39){
        moveX = -1;
        x += moveX;
        sprite.className = 'move';
        container.style.transform = 'translateX(' + x + '%)';
        sprite.style.transform = 'scale(4,4) rotateY(0deg)';
        setTimeout(function(){
            sprite.className = "";
        },1000);
    }
    else if(key == 37){
        moveX = 1;
        x += moveX;
        container.style.transform = 'translateX(' + x + '%)';
        sprite.style.transform = 'scale(4,4) rotateY(180deg)';
    }
    else if(key == 32){
        sprite.className = "shoot";
        bullet.className = "move";
        setTimeout(function(){
            bullet.className = "";
        },1000);
    }

}
window.addEventListener("load", initPlayer);

var audio;

function initPlayer(){
    audio = document.getElementById("audio");
    var ul = document.getElementById("songs");

    for(var i = 0; i < songsArray.length; i++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
        span.innerHTML = songsArray[i].songName;
        img.setAttribute('src', songsArray[i].songImage);
        li.className = 'list-group-item';
        li.appendChild(img);
        li.appendChild(span);
        li.addEventListener("click", playSong);
        ul.appendChild(li);
    }

}
function playSong(){

}
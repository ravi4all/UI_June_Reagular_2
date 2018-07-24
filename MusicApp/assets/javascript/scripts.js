window.addEventListener("load", initPlayer);

var audio;
var togglePlay = false;
var togglePlayButton;
var slider;

function initPlayer(){
    audio = document.getElementById("audio");
    var ul = document.getElementById("songs");
    slider = document.getElementById("slider");
    slider.addEventListener("click", seekSong);
    togglePlayButton = document.getElementById("playPause");
    togglePlayButton.addEventListener("click", toggleSong);
    document.getElementById("stopSong").addEventListener("click", stopSong);
    document.getElementById("nextSong").addEventListener("click", nextSong);
    document.getElementById("previousSong").addEventListener("click", previousSong);

    for(var i = 0; i < songsArray.length; i++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
        var playIcon = document.createElement("button");
        var btn = document.createElement("button");
        span.innerHTML = songsArray[i].songName;
        img.setAttribute('src', songsArray[i].songImage);
        img.className = "cover";
        // btn.innerHTML = '<i class="fas fa-plus"></i>';
        btn.innerHTML = "Add to playlist";
        btn.className = "btn btn-primary playListBtn d-block w-100";
        playIcon.className = 'playIcon';
        // playIcon.innerHTML = '<i class="fas fa-play"></i>';
        // li.className = 'list-group-item';
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        li.appendChild(playIcon);
        // span.addEventListener("click", setSongName);
        playIcon.addEventListener("click", setSongName);
        ul.appendChild(li);
    }

}
function setSongName(){
    // console.log(event.srcElement.parentElement.childNodes[0].innerText);
    songName = event.srcElement.parentElement.childNodes[1].innerText;
    playSong(songName);
}

function playSong(songName){
    console.log("Song change");
    var songURL;
    for(var i = 0; i < songsArray.length; i++){
        if(songsArray[i].songName == songName){
            songURL = songsArray[i].songUrl;
            audio.title = songsArray[i].songId;
        }
    }
    togglePlayButton.innerHTML = '<i class="fas fa-pause"></i>';
    audio.src = songURL;
    audio.play();
    // var sliderWidth = slider.offsetWidth;
    setInterval(function(){
        slider.value = audio.currentTime;
    },500);
    setTimeout(function(){
        var duration = audio.duration;
        slider.max = duration;
    },200);
}

function seekSong(){
    audio.currentTime = slider.value;
}

function nextSong(){
    var songId = audio.title;
    var n_song = parseInt(songId)+1;
    var songName;
    console.log(n_song);
    for(var i = 0; i < songsArray.length; i++){
        if(songsArray[i].songId == n_song) {
            songName = songsArray[i].songName;
            console.log(n_song, songName);
        }
    }
    playSong(songName);
}

function previousSong(){

}

function toggleSong(){
    if(togglePlay) {
        audio.play();
        togglePlayButton.innerHTML = '<i class="fas fa-pause"></i>';
        togglePlay = false;
    }
    else {
        audio.pause();
        togglePlayButton.innerHTML = '<i class="fas fa-play"></i>';
        togglePlay = true;
    }
}

function stopSong(){
    audio.currentTime = 0;
    audio.pause();
}
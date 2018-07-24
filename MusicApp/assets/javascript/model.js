function Song(id,name,songUrl,songimage){
    this.id = id;
    this.name = name;
    this.songUrl = songUrl;
    this.songimage = songimage;
}

var obj = {
    playList : [],

    addSong : function(id,name,songUrl, songimage){
        var song = new Song(id, name, songUrl, songimage);
        this.playList.push(song);
        console.log(this.playList);
    }

}
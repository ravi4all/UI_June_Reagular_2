window.addEventListener("load", ajaxInit);

var div;

function ajaxInit() {
    div = document.getElementById("content");
    document.getElementById("btn").addEventListener("click", loadData);
}

function loadData() {
    var ul = document.getElementById("matches");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        // console.log(this.readyState, this.status);
        if(this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            // div.innerHTML = data;
            var data = JSON.parse(json);
            // div.innerHTML = data;
            // console.log(data);
            var data = data.data;
            // console.log(data[0]);
            data.forEach(function(obj){
                var li = document.createElement("li");
                li.innerHTML = obj.date + " - " + obj.name;
                ul.appendChild(li);
            });
        }   
    }

    xhttp.open('get', 'data.json');
    xhttp.send();
}
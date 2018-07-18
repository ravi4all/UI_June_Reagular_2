window.addEventListener("scroll", function(){
    var header = document.getElementById("header");
    var div_1 = document.getElementById("section_2");
    var div_x = div_1.offsetTop;
    var scrollY = window.scrollY;
    div_x -= scrollY;
    console.log(div_x);
    if(scrollY > 300) {
        header.className = 'active';
    }
    else {
        header.className = '';
    }

    // if(scrollY > 630) {
    //     div_1.className = "active";
    // }

    if (div_x < 20) {
        div_1.className = "active";
    }
    else {
        div_1.className = "";
    }

})
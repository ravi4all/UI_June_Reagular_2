var img = $("img");
$("#start").click(function(){
    // img.animate({
    //     left : '300px',
    //     top : '200px',
    //     opacity : '0.5',
    // },2000);
    
    img.animate({left : '0px',top : '0px',opacity : '0.5'},2000);
    img.animate({left : '400px', top : '0px', opacity : '1'},2000);
    img.animate({left : '400px', top : '300px', opacity : '0.5'},2000);
    img.animate({left : '0px', top : '400px', opacity : '1'},2000);

    // img.addClass
    // img.removeClass
    // img.toggleClass
})

$("#stop").click(function(){
    img.stop();
})
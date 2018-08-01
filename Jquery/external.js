// Equivalent to window.addEventListener("load")
$(document).ready(function(){
    $("button").on("click",function(){
        var username = $("input").val();
        $("span").html(username);
    });
});
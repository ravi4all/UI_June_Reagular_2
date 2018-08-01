$("button").click(function(){
    // $(this).siblings().hide(1000);
    // var elem = $(this).siblings("img");
    // console.log(elem);
    // $(this).siblings("img").hide(1000);

    // $(this).parent().hide(1000);
    // $(this).parents().hide(1000);
    // $(this).parentsUntil("#parent_1").hide(1000);

    $(this).parents("#parent_1").siblings("#parent_2").find("img").hide(1000);
})
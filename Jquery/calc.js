$(document).ready(function(){

    $("button").click(function(){
        opr = $(this).html();
        var fnum = $("#box_1").val();
        var snum = $("#box_2").val();
        var expression = fnum + opr + snum;
        var result = eval(expression);
        $("#result").html(result);
    })

})
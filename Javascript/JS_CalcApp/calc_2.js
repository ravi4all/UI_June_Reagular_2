window.addEventListener("load", initEvents);

var f_num;
var s_num;

function initEvents(){
    f_num = document.getElementById("box_1");
    s_num = document.getElementById("box_2");
    buttons = document.getElementsByTagName("button");
    // console.log(buttons);
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", calc);
    }
}

function calc(){
    var operator = event.srcElement.innerHTML;
    // console.log(element);
    var expression = f_num.value + operator + s_num.value;
    var result = eval(expression);
    document.getElementById("result").innerHTML = result;
}

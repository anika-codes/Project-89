function send(){
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    real_ans = parseInt(number1) * parseInt(number2);
    ques = "<h4> "+ number1 + "X" + number2 + "</h4>";
    ans = "Answer - " + "<input id = 'answer' type = 'text'> <br>";
    check_btn = "<button onclick = 'check_answer()' class = 'btn btn-warning' > Check </button>";


    ans_div = ques+ans+check_btn
    document.getElementById("output").innerHTML = ans_div;

    document.getElementById("number1").value = "none";
    document.getElementById("number2").value = "null";
}
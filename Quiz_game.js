question_turn = "player1";
answer_turn = "player2";

function send(){
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    real_ans = parseInt(number1) * parseInt(number2);
    ques = "<h4> "+ number1 + "X" + number2 + "</h4>";
    ans = "Answer - " + "<input id = 'answer' type = 'text'> <br>";
    check_btn = "<button onclick = 'check_answer()' class = 'btn btn-warning' > Check </button>";


    ans_div = ques+ans+check_btn
    document.getElementById("output").innerHTML = ans_div;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check(){
    get_answer = document.getElementById("ans").value;
    if(get_answer == real_ans){
        if(answer_turn == player1){
            player1 = player1 + 1;
        }
        else{
            player2 = player2 + 1;
        }
    }
    if(question_turn = player1){
        question_turn = player2;
        document.getElementById("player_question").innerHTML = "Question Turn-" + player2_name;
    }
    else{
        question_turn = player1;
        document.getElementById("player_question").innerHTML = "Question Turn-" + player1_name;
    }
}


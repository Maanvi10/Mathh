player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1_name + ":";
document.getElementById("player2").innerHTML = player2_name + ":";


document.getElementById("score1").innerHTML = player1_score;
document.getElementById("score2").innerHTML = player2_score;


document.getElementById("qturn").innerHTML = "Question Turn:" + player1_name;
document.getElementById("aturn").innerHTML = "Answer Turn:" + player2_name;


function send() {
  number1 = document.getElementById("1Number").value;
  number2 = document.getElementById("2Number").value;

  actual_ans = parseInt(number1) * parseInt(number2);

  question_number = "<h4>" + number1 + "  ×  " + number2 + "</h4>";
  input_box = "<br>Answer : <input type='text' id = 'input_check_box'>";
  check_button = "<br><br><button class='btn btn-primary' onclick= 'check()'>Check</button>";
  row = question_number + input_box + check_button ;

  document.getElementById("output").innerHTML = row;
  document.getElementById("1Number").value = " ";
  document.getElementById("2Number").value = " ";

}

questionturn="Q";
answerturn="R";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_ans)
    {
        if(answerturn == "Q")
        {
            player1_score = player1_score +1;
            document.getElementById("score1").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score +1;
            document.getElementById("score2").innerHTML = player2_score;
        }
        if(answerturn == "Q")
        {
            answerturn = "Q"
            document.getElementById("aturn").innerHTML = "Answer Turn -" + player1_name;
        }
        else{
            answerturn = "R"
            document.getElementById("aturn").innerHTML = "Answer Turn -" + player2_name;
        }

        if(questionturn == "Q")
        {
            questionturn = "Q"
            document.getElementById("qturn").innerHTML = "Question Turn -" + player1_name;
        }
        else{
           questionturn = "R"
            document.getElementById("qturn").innerHTML = "Question Turn -" + player2_name;
        }

    }
}
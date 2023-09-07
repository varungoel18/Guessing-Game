let secretNumber  = Math.trunc((Math.random() *20) + 1);
let score = 20;
let highestScore = 0;

function check() {
    document.getElementById('label1').innerHTML = score;
    var userValue = document.getElementById("num").value;
    if (userValue == secretNumber) {
        highestScore = score;
        document.getElementById("label4").innerHTML = highestScore;
        document.getElementById("label0").innerHTML = "Hurray! You Win";
        document.body.style.backgroundColor = "green";
        
    }
    else if(userValue>secretNumber) {
        document.getElementById("label0").innerHTML="Too High";
        score --;
    }
    else if(userValue<secretNumber) {
        document.getElementById("label0").innerHTML = "Too Low";
        score--;

    }

}
function again() {
    secretNumber  = Math.trunc((Math.random() *20) + 1);
    highestScore = 0;
    score = 20;
    document.getElementById('label1').innerHTML = score;
    document.getElementById("label4").innerHTML = highestScore;
    document.body.style.backgroundColor = "black";
}
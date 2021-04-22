var userS = 0;
var compS = 0;
var userS_span = document.getElementById("user-scr");
var compS_span = document.getElementById("comp-scr");
const scoreB_div = document.querySelector(".scoreboard")
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function compChoice() {
    const choices = [' r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber];
}

function game(userChoice) {
    var dushman = compChoice();
    //   console.log(`CPUs ${dushman}`);
    switch (dushman + userChoice) {
        case "sr":
        case "rp":
        case "ps":
            win(dushman);
            break;

        case "pr":
        case "sp":
        case "rs":
            lose(dushman);
            break;

        case "rr":
        case "ss":
        case "pp":
            draw(dushman);
            break;
    }
}

function win(villian) {
    userS = userS + 1;
    userS_span.innerHTML = userS;
    compS_span.innerHTML = compS;
    switch (villian) {
        case "s":
            document.getElementById("output").innerHTML = "Rock breaks Scissors ! You Win";
            break;

        case "r":
            document.getElementById("output").innerHTML = "Paper covers Rock ! You Win";
            break;

        case p:
            document.getElementById("output").innerHTML = "Scissor cuts Paper ! You Win";
            break;
    }
    console.log("WINs");

}

function lose(villian) {
    console.log("LOSES")
    compS++;
    userS_span.innerHTML = userS;
    compS_span.innerHTML = compS;
    switch (villian) {
        case "s":
            document.getElementById("output").innerHTML = "Scissor cuts Paper ! You Lose";
            break;
        case "r":
            document.getElementById("output").innerHTML = "Rock Breaks Scissor ! You Lose";
            break;

        case "p":
            document.getElementById("output").innerHTML = "Paper Covers Rock ! You Lose";
            break;
    }
}

function draw(villian) {
    console.log("DRAW");
    userS_span.innerHTML = userS;
    compS_span.innerHTML = compS;
    switch (villian) {
        case "s":
            document.getElementById("output").innerHTML = "DRAW";
            break;
        case "r":
            document.getElementById("output").innerHTML = "DRAW";
            break;

        case "p":
            document.getElementById("output").innerHTML = "DRAW";
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    scissor_div.addEventListener('click', function () {
        game("s");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })
}

main();

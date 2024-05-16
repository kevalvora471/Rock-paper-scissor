function makeComputerMove() {
    let computerMove;
    const x = Math.random();
    if (x <= 1 / 3) {
        computerMove = "Rock";
    }
    else if (x <= 2 / 3) {
        computerMove = "Paper";
    }
    else {
        computerMove = "Scissor";
    }
    return computerMove;
}

let winScore = 0;
let loseScore = 0;
let tieScore = 0;




function Rock() {
    let computerMove = makeComputerMove();
    console.log(`Your Move : Rock , Computer Move : ${computerMove}`);
    let Result;
    if (computerMove === "Rock") {
        tieScore++;
        Result = "Tie.";
    }
    else if (computerMove === "Paper") {
        loseScore++;
        Result = "You lose.";
    }
    else {
        winScore++;
        Result = "You win.";
    }

    let res = document.querySelector(".Result");
    res.innerHTML = Result;

    let move = document.querySelector(".move");
    move.innerHTML = `You <img src="rock-emoji.png" class="images"> <img src="${computerMove.toLowerCase()}-emoji.png" class="images"> Computer`;

    let para = document.querySelector('.score');
    para.innerHTML = `Wins : ${winScore} / Losses : ${loseScore} / Ties : ${tieScore}`;
}

function Paper() {
    let computerMove = makeComputerMove();
    console.log(`Your Move : Paper , Computer Move : ${computerMove}`);
    let Result;
    if (computerMove === "Paper") {
        tieScore++;
        Result = "Tie.";
    }
    else if (computerMove === "Scissor") {
        loseScore++;
        Result = "You lose.";
    }
    else {
        winScore++;
        Result = "You win.";
    }

    let res = document.querySelector(".Result");
    res.innerHTML = Result;

    let move = document.querySelector(".move");
    move.innerHTML = `You <img src="paper-emoji.png" class="images"> <img src="${computerMove.toLowerCase()}-emoji.png" class="images"> Computer`;

    let para = document.querySelector('.score');
    para.innerHTML = `Wins : ${winScore} / Losses : ${loseScore} / Ties : ${tieScore}`;
}

function Scissor() {
    let computerMove = makeComputerMove();
    console.log(`Your Move : Scissor , Computer Move : ${computerMove}`);
    let Result;
    if (computerMove === "Scissor") {
        tieScore++;
        Result = "Tie.";
    }
    else if (computerMove === "Rock") {
        loseScore++;
        Result = "You lose.";
    }
    else {
        winScore++;
        Result = "You win.";
    }

    let res = document.querySelector(".Result");
    res.innerHTML = Result;

    let move = document.querySelector(".move");
    move.innerHTML = `You <img src="scissor-emoji.png" class="images"> <img src="${computerMove.toLowerCase()}-emoji.png" class="images"> Computer`;

    let para = document.querySelector('.score');
    para.innerHTML = `Wins : ${winScore} / Losses : ${loseScore} / Ties : ${tieScore}`;
}

function Reset(){
    winScore = 0;
    loseScore = 0;
    tieScore = 0;

    let res = document.querySelector(".Result");
    res.innerHTML = "";

    let move = document.querySelector(".move");
    move.innerHTML = "";


    let para = document.querySelector('.score');
    para.innerHTML = `Wins : ${winScore} / Losses : ${loseScore} / Ties : ${tieScore}`;

    
}
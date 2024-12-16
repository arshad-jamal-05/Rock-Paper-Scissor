let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// generate computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// draw game
const drawGame = () => {
  //   console.log("game is draw");
  msg.innerText = "Game is draw. Play again !";
  msg.style.backgroundColor = "#081b31";
};

// show winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("You win !");
    msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("Computer win !");
    msg.innerText = `You Lost ! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// play game
const playGame = (userChoice) => {
  //   console.log("user choice = ", userChoice);
  const compChoice = genCompChoice();
  //   console.log("computer choice = ", compChoice);

  if (compChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock or scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// your choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});

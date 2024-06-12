let userPoint = 0;
let comPoint = 0;
let turn = document.getElementById("turn");
let ResultBoard = document.getElementById("turnAndresult");
let UserScore = document.getElementById("userScore");
let compScore = document.getElementById("compScore");
let options = document.querySelectorAll(".Option");
let randomChoicebyComp = () => {
  let choices = ["rock", "paper", "scissors"];
  let ranID = Math.floor(Math.random() * 3);
  return choices[ranID];
};
let TurnSwitch = () => {
  if (turn.innerText == "Your Turn") {
    turn.innerText = "Computer's Turn";
    turn.style.backgroundColor = "#435e79";
    turn.style.color = "white";
  } else {
    turn.innerText = "Your Turn";
    turn.style.backgroundColor = "#b2c5d8";
    turn.style.color = "black";
  }
};

let playGame = (UserchoiceId) => {
  let CompChoiceId = randomChoicebyComp();
  console.log("user's choice =", UserchoiceId);
  console.log("Computer's choice =", CompChoiceId);
  if (UserchoiceId === CompChoiceId) {
    console.log("");
    ResultBoard.style.backgroundColor = "#081829";
    ResultBoard.innerText = "It's a Tie!";
  } else if (
    (UserchoiceId === "rock" && CompChoiceId == "scissors") ||
    (UserchoiceId === "scissors" && CompChoiceId == "paper") ||
    (UserchoiceId === "paper" && CompChoiceId == "rock")
  ) {
    console.log("You Win!");
    userPoint++;
    UserScore.innerText = userPoint;
    console.log(`User Score: ${UserScore.innerText}`);
    ResultBoard.style.backgroundColor = "green";
    ResultBoard.innerText = "You Win!";
  } else {
    console.log("Computer Wins!");
    comPoint++;
    compScore.innerText = comPoint;
    console.log(`Computer Score: ${compScore.innerText}`);

    ResultBoard.style.backgroundColor = "red";
    ResultBoard.innerText = "Computer Wins!";
  }
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    const UserchoiceId = option.getAttribute("id");
    TurnSwitch();
    playGame(UserchoiceId);
  });
});

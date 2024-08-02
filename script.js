const body = document.querySelector("body");
const container = document.createElement("div");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const winText = document.createElement("Div");
const humanScoreText = document.createElement("Div");
const computerScoreText = document.createElement("Div");

rockButton.style.backgroundColor = "red";
paperButton.style.backgroundColor = "blue";
scissorsButton.style.backgroundColor = "green";

rockButton.style.height = "200px";
rockButton.style.width = "500px";

paperButton.style.height = "200px";
paperButton.style.width = "500px";

scissorsButton.style.height = "200px";
scissorsButton.style.width = "500px";

rockButton.style.display = "block";
paperButton.style.display = "block";
scissorsButton.style.display = "block";

rockButton.style.margin = "auto";
paperButton.style.margin = "auto";
scissorsButton.style.margin = "auto";


rockButton.innerText = "ROCK";
paperButton.innerText = "PAPER";
scissorsButton.innerText = "SCISSORS";

winText.style.textAlign = "center";
winText.style.padding = "10px";

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);


body.appendChild(container);
body.appendChild(winText);
body.appendChild(humanScoreText);
body.appendChild(computerScoreText);


humanScore = 0;
computerScore = 0;

humanScoreText.innerHTML = humanScore;
computerScoreText.innerHTML = computerScore;

function playerChoice(player)
{
    if(player === 0) {
        return "Rock";
    }
    else if(player === 1) {
        return "Scissors";
    }
    else if(player === 2) {
        return "Paper";
    }
    else
    {
        console.log("Incorrect number");
    }
        
}

function computerChoice(randomNumber)
{
    if (randomNumber === 0) {
        return "Rock";
    }
    else if (randomNumber === 1) {
        return "Scissors";
    }
    else if (randomNumber === 2) {
        return "Paper";
    }
}

function game(player, computer)
{
    if(player == "Rock" && computer == "Paper"){
        console.log("You picked Rock and the Computer picked Paper! You lost this round.");
        winText.innerText = "You picked Rock and the Computer picked Paper! You lost this round.";
        computerScore++;
    }
    else if(player == "Scissors" && computer == "Rock"){
        console.log("You picked Scissors and the Computer picked Rock! You lost this round.");
        winText.innerText = "You picked Scissors and the Computer picked Rock! You lost this round.";
        computerScore++; 
    }
    else if(player == "Paper" && computer == "Scissors") {
        console.log("You picked Paper and the Computer picked Scissors! You lost this round.");
        winText.innerText = "You picked Paper and the Computer picked Scissors! You lost this round.";
        computerScore++;    
    }
    else if(player == "Rock" && computer == "Scissors") {
        console.log("You picked Rock and the Computer picked Scissors! You won this round.");
        winText.innerText = "You picked Rock and the Computer picked Scissors! You won this round.";
        humanScore++;    
    }
    else if(player == "Paper" && computer == "Rock") {
        console.log("You picked Paper and the Computer picked Rock! You won this round.");
        winText.innerText = "You picked Paper and the Computer picked Rock! You won this round.";
        humanScore++;      
    }
    else if(player == "Scissors" && computer == "Paper") {
        console.log("You picked Scissors and the Computer picked Paper! You won this round.");
        winText.innerText = "You picked Scissors and the Computer picked Paper! You won this round.";
        humanScore++;       
    }
    else if(player == computer)
    {
        console.log("Tie round");
        winText.innerText = "Tie round";
    }
}

function rpc(player)
{
   
    randomNumber = Math.floor(Math.random() * 3);
    pC = playerChoice(player);
    cC = computerChoice(randomNumber);

    game(pC, cC);
      
}

rockButton.addEventListener("click", function rockClick(){
    player = 0;
    rpc(player);
});

scissorsButton.addEventListener("click", function scissorsButton(){
    player = 1;
    rpc(player);
});

paperButton.addEventListener("click", function paperClick(){
    player = 2;
    rpc(player);
});

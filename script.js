let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scisors"];
    const randIdx = Math.floor(Math.random() * 3 );
    return options[randIdx];
};

const drawGame = () =>  {
    msg.innerText = "Game was draw . play again";

};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    
    } else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText=`You lose ${compChoice} beats ${userChoice}`;
    }
};

const playgame = (userChoice) =>{

    const compChoice = genCompChoice();

    if(userChoice === compChoice){
    drawGame();
    } else {
        let userWin =true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if (userChoice==="paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);

    });
});


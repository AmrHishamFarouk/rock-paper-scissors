//vaiables to put choices of the computer and player
let computer;
let player;

//putting variables for the players scores
let compScore = 0,
    playerScore = 0;

//vriable to check if the game ended
let gameRun = true;

const rbutton = document.querySelector('rockbtn');
const pbutton = document.querySelector('paperbtn');
const sbutton = document.querySelector('scissorsbtn');
//loop for the sequence of the program

rbutton.addEventListener('click',() =>{
    do {
        computer = getComputerChoice();
        player =  1;
        playRound(player,computer);
        checkending(compScore,playerScore);    
    
    }
    while(gameRun);
});

pbutton.addEventListener('click',() =>{
    do {
        computer = getComputerChoice();
        player =  3;
        playRound(player,computer);
        checkending(compScore,playerScore);    
    
    }
    while(gameRun);
})

sbutton.addEventListener('click',() =>{
    do {
        computer = getComputerChoice();
        player =  2;
        playRound(player,computer);
        checkending(compScore,playerScore);    
    
    }
    while(gameRun);
});


//function to make a random choice:
//(rock or paper or scissors)

function getComputerChoice(){
    let num =Math.floor(Math.random() * 3) + 1;
    //1 is rock , 2 is scissors , 3 is paper
    return num;
}


//function to check the winner
function playRound(player,computer){
    if(player==computer){
        console.log('draw');
        return;
    }
    else if(computer == 2 && player == 1){
        console.log('you win! rock beats scissors');
        playerScore++;
        return ;
    }
    else if(computer == 3 && player == 1){
        console.log('you lose! paper beats rock');
        compScore++;
        return ;
    }
    else if(computer == 1 && player == 2){
        console.log('you lose! rock beats scissors');
        compScore++;
        return ;
    }
    else if(computer == 3 && player == 2){
        console.log('you win! scissors beats paper');
        playerScore++;
        return ;
    }
    else if(computer == 2 && player == 3){
        console.log('you lose! scissors beats paper');
        compScore++;
        return ;
    }
    else if(computer == 1 && player == 3){
        console.log('you win! paper beats rock');
        playerScore++;
        return ;
    }
}

//function to check if someone winned to declare winner
function checkending(compScore,playerScore){
    if(compScore == 5){
        console.log('computer wins!')
        gameRun = false;
    }
    else if(playerScore == 5){
        consolelog('player wins!')
        gameRun = false;
    }
    return;
}
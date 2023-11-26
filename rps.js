//vaiables to put choices of the computer and player
let computer;
let player;

//putting variables for the players scores
let compScore = 0,
    playerScore = 0;

//vriable to check if the game ended
let gameRun = true;

const rbutton = document.querySelector('.rockbtn');
const pbutton = document.querySelector('.paperbtn');
const sbutton = document.querySelector('.scissorsbtn');
const rstbutton = document.querySelector('.rstbtn');

rstbutton.addEventListener('click',() =>{
    compScore = 0;
    playerScore = 0;
    gameRun = true;
    document.querySelector('.playscore').innerHTML= playerScore;
    document.querySelector('.compscore').innerHTML= compScore;
    document.querySelector('.declarWinner').innerHTML='';
    document.querySelector('.declareRoundWinner').innerHTML = '';
    document.querySelector('.alert').innerHTML='';

});


rbutton.addEventListener('click',() =>{
    if(gameRun == true){
        computer = getComputerChoice();
        player =  1;
        playRound(player,computer);
        checkending(compScore,playerScore); 
    }   
    else{
        document.querySelector('.alert').innerHTML='press reset';
    }
});

pbutton.addEventListener('click',() =>{
        if(gameRun == true){
            computer = getComputerChoice();
            player =  3;
            playRound(player,computer);
            checkending(compScore,playerScore);    
        }
        else{
            document.querySelector('.alert').innerHTML='press reset';
        }
    });

sbutton.addEventListener('click',() =>{
    if(gameRun == true){
        computer = getComputerChoice();
        player =  2;
        playRound(player,computer);
        checkending(compScore,playerScore);        
    }
    else{
        document.querySelector('.alert').innerHTML='press reset';
    }
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
        document.querySelector('.declareRoundWinner').innerHTML = 'draw';
        return;
    }
    else if(computer == 2 && player == 1){
        document.querySelector('.declareRoundWinner').innerHTML = 'you win! rock beats scissors';
        playerScore++;
        document.querySelector('.playscore').innerHTML= playerScore;
        return ;
    }
    else if(computer == 3 && player == 1){
        document.querySelector('.declareRoundWinner').innerHTML = 'you lose! paper beats rock';
        compScore++;
        document.querySelector('.compscore').innerHTML= compScore;
        return ;
    }
    else if(computer == 1 && player == 2){
        document.querySelector('.declareRoundWinner').innerHTML = 'you lose! rock beats scissors';
        compScore++;
        document.querySelector('.compscore').innerHTML= compScore;
        return ;
    }
    else if(computer == 3 && player == 2){
        document.querySelector('.declareRoundWinner').innerHTML = 'you win! scissors beats paper';
        playerScore++;
        document.querySelector('.playscore').innerHTML= playerScore;
        return ;
    }
    else if(computer == 2 && player == 3){
        document.querySelector('.declareRoundWinner').innerHTML = 'you lose! scissors beats paper';
        compScore++;
        document.querySelector('.compscore').innerHTML= compScore;
        return ;
    }
    else if(computer == 1 && player == 3){
        document.querySelector('.declareRoundWinner').innerHTML = 'you win! paper beats rock';
        playerScore++;
        document.querySelector('.playscore').innerHTML= playerScore;
        return ;
    }
}

//function to check if someone winned to declare winner
function checkending(compScore,playerScore){
    if(compScore == 5){
        document.querySelector('.declarWinner').innerHTML='computer wins!';
        gameRun = false;
    }
    else if(playerScore == 5){
        document.querySelector('.declarWinner').innerHTML= 'player wins!'
        gameRun = false;
    }
    return;
}
let computer;
let player;

//putting variables for the players scores
let compScore = 0,
    playerScore = 0;
//loop for the sequence of the program
do {
    console.log("hello");
    computer = getComputerChoice();
    player = getPlayerschoice();
    console.log('nice')
    playRound(player,computer);
    checkending(compScore,playerScore);
}
while(gameRun);


//function to make a random choice:
//(rock or paper or scissors)
function getComputerChoice(){
    let num =Math.floor(Math.random() * 3) + 1;
    if(num == 1){
        return 'rock';
    }
    else if(num == 2){
        return 'paper';
    }
    else if(num == 3){
        return 'scissors';
    }
}

//function to get players choice
function getPlayerschoice(){
    do{
        let player = prompt("1 for rock, 2 for scissors, 3 for paper");
        //convert it to lower case to make it easier to compare
    }
    while(player!='1'||player!='2'||player!='3');
    return player;   
}


//function to check the winner
function playRound(player,computer){
    if(player==computer){
        return 'draw';
    }
    else if(computer =='scissors'&& player =='1'){
        let result = 'you win! rock beats '+computer;
        playerScore++;
        return result;
    }
    else if(computer =='paper' && player == '1'){
        let result = 'you lose! '+ computer +' beats rock';
        compScore++;
        return result;
    }
    else if(computer =='rock' && player == '2'){
        let result = 'you lose! '+ computer +' beats scissors';
        compScore++;
        return result;
    }
    else if(computer =='paper' && player == '2'){
        let result = 'you win! scissors beats '+computer;
        playerScore++;
        return result;
    }
    else if(computer =='scissors' && player == '3'){
        let result = 'you lose! '+ computer +' beats paper';
        compScore++;
        return result;
    }
    else if(computer =='rock' && player == '3'){
        let result = 'you win! paper beats '+computer;
        playerScore++;
        return result;
    }
}

let gameRun = true;

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
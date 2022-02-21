
function computerPlay(){
    let possibleOptions = ['rock','paper','scissors'];
    return possibleOptions[Math.floor(Math.random() * possibleOptions.length)];
}

let computerScore=0;
let playerScore=0;

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection===computerSelection){
    return ('It\'s a tie')
}
else if (playerSelection === 'rock' && computerSelection === 'paper'){
    computerScore++;
    return ('You Lose! Paper beats Rock')
}
else if (playerSelection === 'paper' && computerSelection === 'rock'){
    playerScore++;
    return ('You win! Paper beats Rock')
}
else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    computerScore++;
    return ('You lose ! Scissors beat paper')
}
else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    playerScore++;
    return ('You win ! Scissors beat paper')
}
else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    playerScore++;
    return ('You win ! Rock beat scissors')    
}
else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    computerScore++;
    return ('You lose ! Rock beat scissors')    
}
}

for(let i=0;i<5;i++){
    let computerSelection = computerPlay();
    result = window.prompt( `Choose: Rock, Paper or Scissors \n Player score ${playerScore} \n Computer score ${computerScore}`, '' );
    let playerSelection = result;
    let output = playRound(playerSelection, computerSelection);
    console.log(output);
    console.log(computerScore);
    console.log(playerScore);
    
}
if (computerScore<playerScore) {
    console.log('you won the game');
    window.alert("won");
}
else if (computerScore>playerScore){
    console.log('you lost the game');
    window.alert("lost");
}
else{
    console.log('tie !');
    window.alert("tie");
}
    



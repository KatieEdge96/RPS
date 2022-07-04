

let computerScore = 0 ;
let playerScore = 0 ;
let moves = 0 ;

const playGame = () => {

    const rockBtn = document.querySelector('.rock') ;
    const paperBtn = document.querySelector('.paper') ;
    const scissorBtn = document.querySelector('.scissor') ;
    const playerOptions = [rockBtn,paperBtn,scissorBtn] ;
    const computerOptions = ['rock','paper','scissor'] 


playerOptions.forEach(option => {
    option.addEventListener('click'.function() { 

        const movesLeft = document.querySelector('.movesLeft') ,
        moves++;
        movesLeft.innerText = 'Moves Remaining: ${5-moves}';

        const choiceNumber = Math.floor(Math.random()*3) ;
        const computerChoice = computerOptions[choiceNumber] ;

        winner(this.innerText.computerChoice)

        if(moves == 5){
            gameOver(playerOptions.movesLeft) ;
        }

    })
})

}
        
       

    


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSection === 'ROCK')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}
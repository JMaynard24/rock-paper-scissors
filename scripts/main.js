/*
Rock = 1
Paper = 2
Scissors = 3
*/

let playerWins = 0;
let computerWins = 0;

function randomNumber(min, max)
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay()
{
    return randomNumber(1,3);
}

function round(playerInput, computerInput)
{
    if (playerInput == computerInput)
    {
        alert("Tie! You chose the same one!")
    }
    else if (playerInput == 1 && computerInput == 2)
    {
        computerWins++;
        alert("You Lose! Paper beats Rock!")
    }
    else if (playerInput == 1 && computerInput == 3)
    {
        playerWins++;
        alert("You Win! Rock beats Scissors!")
    }
    else if (playerInput == 2 && computerInput == 1)
    {
        playerWins++;
        alert("You Win! Paper beats Rock!")
    }
    else if (playerInput == 2 && computerInput == 3)
    {
        computerWins++;
        alert("You Lose! Scissors beats Paper!")
    }
    else if (playerInput == 3 && computerInput == 1)
    {
        computerWins++;
        alert("You Lose! Rock beats Scissors!")
    }
    else if (playerInput == 3 && computerInput == 2)
    {
        playerWins++;
        alert("You Win! Scissors beats Paper!")
    }
}

function game()
{
    let rounds = 5;
    let roundcount = 0;
    let playerChoice = ""
    let playerChoiceNum = 0;
    let computerChoiceNum = 0;
    playerWins = 0;
    computerWins = 0;
    while (rounds > roundcount)
    {
        playerChoice = prompt(`Round ${Number(roundcount) + 1}/${rounds}: Choose rock, paper, or scissors!`)
        console.log(playerChoice)
        playerChoice = playerChoice.toLowerCase()
        if (playerChoice == "rock")
        {
            playerChoiceNum = 1;
        }
        else if (playerChoice == "paper")
        {
            playerChoiceNum = 2;
        }
        else if (playerChoice == "scissors")
        {
            playerChoiceNum = 3;
        }
        else
        {
            alert("Invalid input. Try again!")
        }

        if (playerChoiceNum != 0)
        {
            computerChoiceNum = computerPlay()
            console.log(computerChoiceNum)
            round(playerChoiceNum, computerChoiceNum)
            roundcount += 1;
        }
        playerChoiceNum = 0;
    }

    if (playerWins > computerWins)
    {
        alert(`With ${playerWins} wins, you are victorious!`)
    }
    else if (playerWins == computerWins)
    {
        alert(`Both of you got ${playerWins} wins so nobody wins...`)
    }
    else
    {
        alert(`With ${computerWins} wins, the computer has defeated you...`)
    }
}
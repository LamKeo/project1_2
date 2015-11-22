// I want to make 2 variables, players.
//global variables that can be used anywhere because they are outside of the function.
var playerMove;
var compMove;
// var playerScore;
// var compScore;
// var round = 0;

//Gives the player the option of pressing enter
$(document).ready(function() {
  // Listeners
  var btn = document.getElementsByTagName("body")[0];
  btn.addEventListener("keydown", function(event) {
    // look for specific keys to be pressed
    if (event.keyCode == 13) {
      console.log("enter has been pressed!");
      myFunction();
    }
    // console.logs the keyCode for whatever button is pressed
    //console.log(event.keyCode);
  });
});

// then call the function
// but lets make sure there is an answer
function myFunction() {
  playerMove = document.getElementById('playerMove').value;
  //takes whatever text in the input box and assigns it to playerMove but only when the submit button is clicked
  //if no text is in the input box but submit is clicked then...
  //alert('Choose rock, paper, or scissors');
  compMove = Math.random();

  if (playerMove.length != 0) {
    computerMove();
    compare(playerMove, compMove);
  } else {
    alert('Choose rock, paper, or scissors');
  }
}

// Generate a computer move
function computerMove() {
  var comp = Math.random();
//give the computer some parameters
  if (comp < 0.34) {
   compMove = "rock";
  } else if(comp <= 0.67) {
   compMove = "paper";
  } else {
   compMove = "scissors";
  }
}

// function roundUp(winner){
//     round++; //increments round
//     if(winner === computer){
//         compScore++; //increments score
//         document.getElementById("compScore").innerHTML  = compScore; //updates HTML
//     }
//     else if(winner === player){
//         playerScore++; //increments score
//         document.getElementById("playerScore").innerHTML  = playerScore; //updates HTML
//     }
// };
//I want to make a function to compare player and comp's moves.

  function compare(playerMove, compMove) {
    console.log(compMove);

    if (playerMove === compMove) {
      document.getElementById('result').innerHTML = "It\'s a tie!";

    } else if (playerMove === 'rock') {
      if (compMove === "scissors") {
        document.getElementById('result').innerHTML = "It\'s The Rock!";
        // playerScore += 1;
      } else {
        document.getElementById('result').innerHTML = "It\'s a wrap for you!";
        // compScore += 1;
      }
    } else if (playerMove === 'paper') {
      if (compMove === 'rock') {
        document.getElementById('result').innerHTML = "It\'s a wrap for you!";
        // playerScore += 1;
      } else {
        document.getElementById('result').innerHTML = "You just got cut!";
        // compScore += 1;
      }
    } else if (playerMove === 'scissors') {
      if (compMove === "rock") {
        document.getElementById('result').innerHTML = "It\'s The Rock!";
        // compScore += 1;
      } else {
        document.getElementById('result').innerHTML = "You just got cut!";
        // playerScore += 1;
      }
    }
}


//}

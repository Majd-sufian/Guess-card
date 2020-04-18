let correctNumber = getRandomNumber()
console.log(correctNumber + "number")

function getRandomNumber(){
  var randomNumber = Math.round(Math.random() * 13) +1
  return randomNumber
}


let guesses = []

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

function playGame(){
  let tries = guesses.length +1 
  if (tries <= 3){
    var history = document.getElementById('history');
    let numberGuess = document.getElementById('number-guess').value;
    history.innerHTML = numberGuess
    displayResult(numberGuess)
    saveGuessHistory(numberGuess)
    displayHistory()
  }
  else {
    gameOver()
  }
}

function displayResult(numberGuess){
  if (numberGuess == correctNumber) {
    showImage()
    return(showYouWon())
  }
  else if (numberGuess > correctNumber) {
    return(showNumberAbove())
  }
  else {
    return(showNumberBelow())
  }
}

function showImage () {
  var changeImage = `<img src="img/${correctNumber} d.png" alt="card"/>`
  document.getElementById("guess-card-1").innerHTML = changeImage
  document.getElementById("guess-card-2").innerHTML = changeImage
}

function initGame(){
  resetResultContent()
}

function resetResultContent(){
  let restImage = '<img src="img/back d.png" alt="card"/>'
  document.getElementById("result").innerHTML = "";
  document.getElementById("history").innerHTML = "";
  document.getElementById("guess-card-1").innerHTML = restImage
  document.getElementById("guess-card-2").innerHTML = restImage
  guesses = []
}

function saveGuessHistory(guess) {
  guesses.push(guess)
  let times = guess.length
}

function displayHistory() {
  // 4
  let index = 0
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *

  while(index < guesses.length){
    check = guesses[index] == correctNumber ? 'correct' : 'wrong'
  list += `<li class='list-group-item'>You guessed ${guesses[index]} - ${ check} </li>`
  index+=1
  }
  
  let gameTimes = `you tried ${guesses.length} times`
  document.getElementById("history").innerHTML = list;
  document.getElementById("times").innerHTML = gameTimes;
}


function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
    case "danger":
      dialog = "<div class='alert alert-danger' role='alert'>"
      break;  
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  dialog = getDialog('won', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}

function gameOver () {
  const text = "Game Over Try Again!"
  dialog = getDialog('danger', text)
  document.getElementById("result").innerHTML = dialog;
}
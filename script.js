let correctNumber = getRandomNumber()
console.log(correctNumber + "one")

function getRandomNumber(){
  var randomNumber = Math.round(Math.random() * 10)
  return randomNumber
}

let images = {
  1: 'img/1 d.png',
  2: 'img/2 d.png',
  3: 'img/3 d.png',
  4: 'img/4 d.png',
  5: 'img/5 d.png',
  6: 'img/6 d.png',
  7: 'img/7 d.png',
  8: 'img/8 d.png',
  9: 'img/9 d.png',
  10: 'img/10 d.png',
}

let guesses = []

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

function playGame(){
  var history = document.getElementById('history');
  let numberGuess = document.getElementById('number-guess').value;
  history.innerHTML = numberGuess
  displayResult(numberGuess)
  saveGuessHistory(numberGuess)
  displayHistory()
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

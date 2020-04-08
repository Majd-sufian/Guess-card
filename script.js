let correctNumber = getRandomNumber()
console.log(correctNumber + "one")

let guesses = []
console.log(guesses)

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}


function playGame(){
  // 1
  var history = document.getElementById('history');
  let numberGuess = document.getElementById('number-guess').value;
  console.log(numberGuess)
  // 2
  history.innerHTML = numberGuess
  displayResult(numberGuess)
  saveGuessHistory(numberGuess)
  displayHistory()
}

function displayResult(numberGuess){
  if (numberGuess == correctNumber) {
    return(showYouWon())
  }
  else if (numberGuess > correctNumber) {
    return(showNumberAbove())
  }
  else {
    return(showNumberBelow())
  }
}


function initGame(){
  resetResultContent()
}

function resetResultContent(){
  document.getElementById("result").innerHTML = "";
  document.getElementById("history").innerHTML = "";

}

function getRandomNumber(){
  var randomNumber = Math.round(Math.random() * 100)
  return randomNumber
}

function saveGuessHistory(guess) {
  guesses.push(guess)
  console.log(guesses)
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
  list += '</ul>'
  let gameTimes = `you tried ${guesses.length} times`
  // 5
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

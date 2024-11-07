const dice1Img = document.getElementById("dice1Img");
const dice2Img = document.getElementById("dice2Img");
const p1Tag = document.getElementById("p1Tag");
const p2Tag = document.getElementById("p2Tag");
const winDisplay = document.getElementById("winDisplay");
const randomNrFrom1To6 = () => Math.floor(Math.random() * 6);
const arrayWithDiceNames = ["one", "two", "three", "four", "five", "six"];

const dice1Roll = randomNrFrom1To6();
const dice2Roll = randomNrFrom1To6();

dice1Img.src = `./images/dice-${arrayWithDiceNames[dice1Roll]}.svg`;
dice2Img.src = `./images/dice-${arrayWithDiceNames[dice2Roll]}.svg`;
    
if (dice1Roll === dice2Roll) {
  winDisplay.innerHTML = "Draw!";
  p1Tag.innerHTML = "Player1";
  p2Tag.innerHTML = "Player2";
  p1Tag.style.color = "yellow";
  p2Tag.style.color = "yellow";
} else if (dice1Roll > dice2Roll) {
  winDisplay.innerHTML = "Player1 WIN";
  p1Tag.style.color = "#00d100";
  p2Tag.style.color = "#ff0000";
  p1Tag.innerHTML = "▼ Player1";
  p2Tag.innerHTML = "Player2";
} else {
  winDisplay.innerHTML = "Player2 WIN";
  p1Tag.style.color = "#ff0000";
  p2Tag.style.color = "#00d100";
  p1Tag.innerHTML = "Player1";
  p2Tag.innerHTML = "Player2 ▼";
}
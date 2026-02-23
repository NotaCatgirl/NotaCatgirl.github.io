//event listeners
document.querySelector("#spinBtn").addEventListener("click", spin);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

let symbols;
let r1 = document.querySelector("#reel1");
let r2 = document.querySelector("#reel2");
let r3 = document.querySelector("#reel3");
let moneyLeft;
let betAmount;
let wonAmount;
let lostAmount;
initializeGame();

function initializeGame() {
symbols = ["🍒", "🍋", "⭐"];
  r1.textContent = symbols[0];
  r2.textContent = symbols[1];
  r3.textContent = symbols[2];
  moneyLeft = 10000;
  betAmount = 0;
  wonAmount = 0;
  lostAmount =  0;
  document.querySelector("#moneyLeft").textContent = "$" + moneyLeft;
  document.querySelector("#won").textContent = "$" + wonAmount;
  document.querySelector("#lost").textContent = "$" + lostAmount;
document.querySelector("#spinResult").textContent = "";
document.querySelector("#wonImg").style.display = "none";
document.querySelector("#lostImg").style.display = "none";
}

function random(list) {
  return list[Math.floor(Math.random() * symbols.length)];
}

function spin() {
    document.querySelector("#wonImg").style.display = "none";
    document.querySelector("#lostImg").style.display = "none";
  if (document.querySelector("#betNum").value == "" 
  || document.querySelector("#betNum").value <= 0 
  || document.querySelector("#betNum").value > moneyLeft
|| !Number.isInteger(parseInt(document.querySelector("#betNum").value))) {
    alert("Please enter a valid bet amount.");
    return;
  } else if (moneyLeft <= 0) {
    alert("You have no money left!");
    return;
  } else if (moneyLeft >= 1000000) {
    alert("Congratulations! You have reached won one million dollars!");
    return;
} else{
    betAmount = parseInt(document.querySelector("#betNum").value);
}
  
  r1.textContent = random(symbols);
  r2.textContent = random(symbols);
  r3.textContent = random(symbols);

  if (r1.textContent == r2.textContent && r2.textContent == r3.textContent) {
    document.querySelector("#spinResult").textContent =
      "Congratulations! You won!";
    document.querySelector("#spinResult").style.color = "green";
    moneyLeft += 2 * betAmount;
    document.querySelector("#moneyLeft").textContent = "$" + moneyLeft;
    wonAmount += 2 * betAmount;
    document.querySelector("#won").textContent = "$" + wonAmount;
    document.querySelector("#wonImg").style.display = "inline";
  } else {
    document.querySelector("#spinResult").textContent =
      "Better luck next time!";
    document.querySelector("#spinResult").style.color = "red";
    moneyLeft -= betAmount;
    document.querySelector("#moneyLeft").textContent = "$" + moneyLeft;
    lostAmount += betAmount;
    document.querySelector("#lost").textContent = "$" + lostAmount;
    document.querySelector("#lostImg").style.display = "inline";
  }
}

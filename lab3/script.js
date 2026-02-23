document.querySelector("button").addEventListener("click", submit);
document.querySelector("#right1").style.display = "none";
document.querySelector("#right2").style.display = "none";
document.querySelector("#right3").style.display = "none";
document.querySelector("#right4").style.display = "none";
document.querySelector("#right5").style.display = "none";
document.querySelector("#wrong1").style.display = "none";
document.querySelector("#wrong2").style.display = "none";
document.querySelector("#wrong3").style.display = "none";
document.querySelector("#wrong4").style.display = "none";
document.querySelector("#wrong5").style.display = "none";

let fb1 = document.querySelector("#fb1");
let fb2 = document.querySelector("#fb2");
let fb3 = document.querySelector("#fb3");
let fb4 = document.querySelector("#fb4");
let fb5 = document.querySelector("#fb5");

function submit() {
  let score = 0;
  let answer1 = document.querySelector("input[name=q1]:checked").value;
  let answer2 = document.querySelector("#q2").value;
  let answer3 = document.querySelector("#q3").value;
  let answer4 = document.querySelector("#q4").value;
  let answer5 = document.querySelector("input[id=q5]:checked").value;
  if (answer1 === "false") {
    score += 20;
    fb1.textContent = "Correct!";
    fb1.style.color = "green";
    document.querySelector("#right1").style.display = "block";
  } else {
    fb1.textContent = "Incorrect!";
    fb1.style.color = "red";
    document.querySelector("#wrong1").style.display = "block";
  }
  if (answer2 === "Donald Trump") {
    score += 20;
    fb2.textContent = "Correct!";
    fb2.style.color = "green";
    document.querySelector("#right2").style.display = "block";
  } else {
    fb2.textContent = "Incorrect!";
    fb2.style.color = "red";
    document.querySelector("#wrong2").style.display = "block";
  }
  if (answer3 === "7") {
    score += 20;
    fb3.textContent = "Correct!";
    fb3.style.color = "green";
    document.querySelector("#right3").style.display = "block";
  } else {
    fb3.textContent = "Incorrect!";
    fb3.style.color = "red";
    document.querySelector("#wrong3").style.display = "block";
  }
  if (answer4 === "seaside") {
    score += 20;
    fb4.textContent = "Correct!";
    fb4.style.color = "green";
    document.querySelector("#right4").style.display = "block";
  } else {
    fb4.textContent = "Incorrect!";
    fb4.style.color = "red";
    document.querySelector("#wrong4").style.display = "block";
  }
  if (answer5 === "cst") {
    score += 20;
    fb5.textContent = "Correct!";
    fb5.style.color = "green";
    document.querySelector("#right5").style.display = "block";
  } else {
    fb5.textContent = "Incorrect!";
    fb5.style.color = "red";
    document.querySelector("#wrong5").style.display = "block";
  }
  document.querySelector("#score").textContent = "Your score is: " + score;
  if (score >= 60) {
    document.querySelector("#results").textContent =
      "Congratulations! You passed the quiz!";
  } else {
    document.querySelector("#results").textContent =
      "You failed the quiz. Please try again.";
  }
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.querySelector("#results").textContent =
    " You have taken this quiz " + localStorage.clickcount + " times.";
}

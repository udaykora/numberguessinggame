// Generate a random number between 1 and 20
const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;
let highscore = 0;
h_s = 0;

document.querySelector(".check").addEventListener("click", function () {
  const a = Number(document.querySelector(".num").value);
  if (a == randomNumber) {
    document.body.style.backgroundColor = "yellow";

    document.querySelector(".hurray").textContent =
      "Hurray! its the correct number😎";
    document.querySelector(".guess").value = randomNumber;
    if (h_s < a) {
      document.querySelector(".highscore").textContent = a;
    }
  } else {
    score = score - 1;
    document.querySelector(".score").textContent = score;
    if (randomNumber > a) {
      document.querySelector(".hurray").textContent = "its too low😢";
    } else {
      document.querySelector(".hurray").textContent = "its too high😑";
    }
  }
});

document.querySelector(".playagain").addEventListener("click", function () {
  location.reload();
});


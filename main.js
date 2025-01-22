// KF Panda Character Search Start

// HTML Variables
let nameEl = document.getElementById("char-name");
let quoteEl = document.getElementById("char-quote");
let imgEl = document.getElementById("char-img");

// BUTTON CLICKED
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let charName = document.getElementById("search-in").value;

  // Character Output
  if (charName == "po") {
    nameEl.innerHTML = "Po";
    quoteEl.innerHTML = "Buddy, I am the Dragon Warrior.";
    imgEl.src = "img/Po.png";
  } else if (charName == "tigress") {
    nameEl.innerHTML = "Tigress";
    quoteEl.innerHTML = "That was pretty hardcore!";
    imgEl.src = "img/Tigress.png";
  } else if (charName == "mantis") {
    nameEl.innerHTML = "Mantis";
    quoteEl.innerHTML = "Fear the bug!";
    imgEl.src = "img/Mantis.png";
  } else if (charName == "monkey") {
    nameEl.innerHTML = "Monkey";
    quoteEl.innerHTML = "We should hang out.";
    imgEl.src = "img/Monkey.png";
  }
}

// Po: "Buddy, I am the Dragon Warrior."
// Tigress: "That was pretty hardcore!"
// Mantis: "Fear the bug!"
// Monkey: "We should hang out!"
// Crane: "You will never chain my warrior spirit!"
// Viper: "I don't need to bite to fight!"

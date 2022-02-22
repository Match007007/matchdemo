"use strict";
/*
console.log(document.querySelector('.message').textContent); // get the element information by selecting the name of the class and use the methods to do that ( method means function ,  xxxxx.xxx.xxx, those dots are called methods)

//DOM  Document Object Model is a a pathway for the javascript to get access to the html content, attributes and even css elements and changed them )

//document here is the object and queryselector is the method

//DOM !== javascript !!!!!!!!!!

// DOM is not part of javascropt , we use the API, Application Programming Interface (Libraries written in javascript), we are just using the webapi to do the DOM

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = '13';

document.querySelector('.score').textContent = '10';
document.querySelector('.guess').value = '23';

*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = "?";
let Score = 20;
let Highscore = 0;
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".highscore").textContent = Highscore;
  Score = 20;
  document.querySelector(".score").textContent = Score;
  document.querySelector(".message").textContent = "👶🏻冇禁易比你估中既👶🏻";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#000000";

  if (!guess) {
    document.querySelector(".message").textContent =
      "🧐醒呀喂, 填個數學字,大佬!!!!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "估中左,抵錫💋";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "20rem";

    if (Score > Highscore) {
      Highscore = Score;
      document.querySelector(".highscore").textContent = Highscore;
    }
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "😅太大啦 ";
    Score--;
    document.querySelector(".score").textContent = Score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "😅太細啦 ";
    Score--;
    document.querySelector(".score").textContent = Score;
  }
});

// console.log("hello");
//  x or 0
// change x and 0
// check won

let player = "X";
let gameOver = false;

const changePlayer = () => {
  return player === "X" ? "0" : "X";
};

const checkWon = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let winPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winPos.forEach((ele) => {
    if (
      boxTexts[ele[0]].innerText === boxTexts[ele[1]].innerText &&
      boxTexts[ele[1]].innerText === boxTexts[ele[2]].innerText &&
      boxTexts[ele[0]].innerText !== ""
    ) {
      count=0;
      document.getElementById("result").innerText =
        boxTexts[ele[0]].innerText + " Won";
      gameOver = true;
      document.querySelector("img").style.width = "100px";
    }
  });
};
let count=0;
let boxes = document.getElementsByClassName("box");
// console.log(boxes);
Array.from(boxes).forEach((box) => {
  let boxText = box.querySelector(".boxText");

  box.addEventListener("click", () => {
    if (boxText.innerText === "" && !gameOver) {
      count=count+1;
      boxText.innerText = player;
      player = changePlayer();
      checkWon();
      document.getElementsByClassName("player")[0].innerText = player;
    }
    if(count==9 && !gameOver)
    {
      document.getElementById("result").innerText= "Draw";
      gameOver=true;
      count=0;
    }
  });
});

// reset button
let reset = document.getElementsByClassName("reset")[0];
// console.log(reset);
reset.addEventListener("click", () => {
  let boxTexts = document.querySelectorAll(".boxText");
  //   console.log(boxTexts);
  boxTexts.forEach((boxText) => {
    boxText.innerText = "";
  });
  let image = document.querySelector("img");
  image.style.width = "0px";
  player = "X";
  gameOver = false;
  document.getElementById("result").innerText= "Game in Progress";
});

// implement draw
// vanish the gif as soon as the game restarts

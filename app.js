const blocks = document.querySelectorAll(".block");
const playertext = document.getElementById("player");
const errortext = document.getElementById("error");

let player = "X";
let gameOver = false;
let winner;

function startgame() {
  playertext.textContent = `${player}'s Turn !`;

  blocks.forEach((block) =>
    block.addEventListener("click", () => choosearea(block))
  );
}

function choosearea(block) {
  if (block.textContent === "") {
    block.textContent = player;
    if (player === "O") {
      block.style.color = "red";
    }
    turnPlayer();
  } else {
    errortext.textContent = "heyy, it's not empty";
    block.style.border = "2px solid green ";
    setTimeout(() => {
      errortext.textContent === "";
      block.style.border = "2px solid red yellow";
    }, 2500);
  }

  checkwin();
  checktie();
  if (gameOver) {
    playertext.textContent = `game over, ${winner}won`;
    blocks.forEach((block) => (block.style.pointerEvents = "none"));
  }
}
function turnPlayer() {
  if (player === "X") {
    player = "O";
    playertext.textContent = `${player}'s Turn !`;
    return;
  } else if (player === "O") {
    player = "X";
    playertext.textContent = `${player}'s Turn !`;
    return;
  }
}
function checkwin() {
  checkrows();
  checkcolums();
  checkdiagonals();
  // win
}

function checktie() {
  const values = [];
  blocks.forEach((block) => values.push(block.textContent));
  if (!values.includes("")) {
    playerText.textContent = "Tie !";
    blocks.forEach((block) => (block.style.pointerEvents = "none"));
  }
  //tie
}

function checkrows() {
  let row1 =
    blocks[0].textContent == blocks[1].textContent &&
    blocks[0].textContent == blocks[2].textContent &&
    blocks[0].textContent !== "";
  let row2 =
    blocks[3].textContent == blocks[4].textContent &&
    blocks[3].textContent == blocks[5].textContent &&
    blocks[3].textContent !== "";
  let row3 =
    blocks[6].textContent == blocks[7].textContent &&
    blocks[6].textContent == blocks[8].textContent &&
    blocks[6].textContent !== "";
  if (row1 || row2 || row3) {
    gameOver = true;
  }
  if (row1) return (winner = blocks[0].textContent);
  if (row2) return (winner = blocks[3].textContent);
  if (row3) return (winner = blocks[6].textContent);
  //check rows
}

function checkcolums() {
  // check colums
  let col1 =
    blocks[0].textContent == blocks[3].textContent &&
    blocks[0].textContent == blocks[6].textContent &&
    blocks[0].textContent !== "";
  let col2 =
    blocks[1].textContent == blocks[4].textContent &&
    blocks[1].textContent == blocks[7].textContent &&
    blocks[1].textContent !== "";
  let col3 =
    blocks[2].textContent == blocks[5].textContent &&
    blocks[2].textContent == blocks[8].textContent &&
    blocks[2].textContent !== "";
  if (col1 || col2 || col3) {
    gameOver = true;
  }
  if (col1) return (winner = blocks[0].textContent);
  if (col2) return (winner = blocks[1].textContent);
  if (col3) return (winner = blocks[2].textContent);
}
function checkdiagonals() {
  // check diagonals
  let dia1 =
    blocks[0].textContent == blocks[4].textContent &&
    blocks[0].textContent == blocks[8].textContent &&
    blocks[0].textContent !== "";
  let dia2 =
    blocks[2].textContent == blocks[4].textContent &&
    blocks[2].textContent == blocks[6].textContent &&
    blocks[2].textContent !== "";

  if (dia1 || dia2) {
    gameOver = true;
  }
  if (dia1) return (winner = blocks[0].textContent);
  if (dia2) return (winner = blocks[1].textContent);
}

startgame();

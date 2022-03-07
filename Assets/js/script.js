document.addEventListener("DOMContentLoaded", (e) => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

const handleClick = (e) => {
  let square = e.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      alert("O jogo acabou! O vencedor foi o jogador " + playerTime);
    }, 100);
  }
  updateSquares();
};

const updateSquares = () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class ='${symbol}'></div>`;
    }
  });
};

function resetGame () {
    let squares = document.querySelectorAll(".square");

    squares.forEach ( element => {
        element.innerHTML = '';
    } )
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    symbols = ["o", "x"];
    gameOver = false;
}

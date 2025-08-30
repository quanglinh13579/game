let randomNumber;
let attemptsLeft;

resetGame();

function checkGuess() {
  let input = document.getElementById("guessInput");
  let guess = Number(input.value);

 if (!guess || guess < 1 || guess > 50) {
    document.getElementById("message").innerText = "Nhập số từ 1 đến 50!";
    return;
  }


  attemptsLeft--;

  if (guess === randomNumber) {
    document.getElementById("message").innerText = "Chính xác! Bạn đã thắng!";
    document.getElementById("guessInput").disabled = true;
  } else if (attemptsLeft === 0) {
    document.getElementById("message").innerText = "Game Over! Số đúng là " + randomNumber;
    document.getElementById("guessInput").disabled = true;
  } else if (guess < randomNumber) {
    document.getElementById("message").innerText = "Số lớn hơn!";
  } else {
    document.getElementById("message").innerText = "Số nhỏ hơn!";
  }

  document.getElementById("attempts").innerText = "Còn " + attemptsLeft + " lần đoán";
  input.value = "";
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 50) + 1;
  attemptsLeft = 8; 
  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").innerText = "";
  document.getElementById("attempts").innerText = "Bạn có 8 lần đoán";
}

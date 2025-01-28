alert("Boas vindas ao Jogo do Número Secreto!");
let secretNumber = Math.floor(Math.random() * 100) + 1;
alert(secretNumber);
let attempts = 0;
let guess = 0;
let message = "Tente adivinhar o número secreto!";

while (guess !== secretNumber) {
    guess = parseInt(prompt(message));
    attempts++;
    if (guess > secretNumber) {
        message = "O número secreto é menor!";
    } else if (guess < secretNumber) {
        message = "O número secreto é maior!";
    }
}

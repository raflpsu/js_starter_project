alert("Boas vindas ao Jogo do Número Secreto!");
let secretNumber = Math.floor(Math.random() * 100) + 1;
alert(secretNumber);
let attempts = 0;
let userNumber = 0;
let message = "Tente adivinhar o número secreto! \nDica: Ele está entre 1 e 100.";

while (userNumber !== secretNumber) {
    userNumber = parseInt(prompt(message));
    attempts++;
    if (userNumber > secretNumber) {
        message = "O número secreto é menor!";
    } else if (userNumber < secretNumber) {
        message = "O número secreto é maior!";
    }
}

// operador ternário
// condição ? valor_se_verdadeiro : valor_se_falso

let changeAttemptsText = attempts === 1 ? "tentativa" : "tentativas";
alert(message = `Parabéns! Você acertou o número secreto ${secretNumber} em ${attempts} ${changeAttemptsText}.`);

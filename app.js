alert("Boas vindas ao Jogo do Número Secreto!");
let maxNumber = parseInt(prompt("Qual o seu nível de dificuldade? Digite o valor máximo para o número secreto:"));
let secretNumber = Math.floor(Math.random() * maxNumber) + 1;
alert(secretNumber);
let attempts = 0;
let userNumber = 0;
let message = `Tente adivinhar o número secreto! \nDica: Ele está entre 1 e ${maxNumber}.`;

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

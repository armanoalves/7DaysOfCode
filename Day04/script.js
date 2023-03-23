let adivinha = 7;
let tentativas = 3;

while (tentativas !== 0) {
    let escolha = parseInt(prompt("Tente adivinhar um número que estou pensando, está entre 10 e 0: "));

    if (escolha !== adivinha) {
        tentativas--;
        alert("Você errou! Tente novamente!")
    } else if (escolha === adivinha) {
        alert("Parabens! Você acertou!!");
        tentativas = 0;
    }
}


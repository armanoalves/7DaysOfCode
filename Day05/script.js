let listaCompras = [
    frutas = {
        nome: 'frutas',
        lista: []
    },
    laticinios = {
        nome: 'laticínios',
        lista: []
    },
    congelados = {
        nome: 'congelados',
        lista: []
    },
    doces = {
        nome: 'doces',
        lista: []
    }
];


while (true) {
    let choice = prompt("Deseja adicionar uma comida na sua lista de compras? ");
    if (choice === 'sim') {
        let comida = prompt("Digite qual comida você quer adicionar: ");
        let choiceTwo = prompt("Qual categoria essa comida se encaixa? frutas, laticínios, congelados, doces");

        for (let i = 0; i < listaCompras.length; i++) {
            if (choiceTwo === listaCompras[i].nome) {
                listaCompras[i].lista.push(comida);
            } else {
                alert("Escolha não encontrada!");
            }
        }
    } else if (choice === "não") {
        break;
    } else {
        alert("Escolha digitada não está dentro dos parâmetros!!");
    }
}

alert("Tenha um bom dia!");
alert(`Lista de compras: \n ${listaCompras[0].nome}: ${listaCompras[0].lista}\n ${listaCompras[1].nome}: ${listaCompras[1].lista}\n ${listaCompras[2].nome}: ${listaCompras[2].lista}\n ${listaCompras[3].nome}: ${listaCompras[3].lista}`);


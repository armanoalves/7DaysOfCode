function somar(num1, num2) {
    return num1 + num2;
  }
  
function subtrair(num1, num2) {
    return num1 - num2;
}
  
function multiplicar(num1, num2) {
    return num1 * num2;
}
  

function dividir(num1, num2) {
    return num1 / num2;
}
  
function exibirErro() {
    alert("Opção inválida! Tente novamente.");
}

while (true) {
    let opcao = prompt("Escolha uma opção:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair\nDigite a opção desejada:");
    console.log(opcao);
    if (opcao == 1) {
        console.log(opcao);
      let num1 = parseFloat(prompt("Digite o primeiro número:"));
      let num2 = parseFloat(prompt("Digite o segundo número:"));
      console.log(num1, num2);
      console.log("Resultado:", somar(num1, num2));

    } else if (opcao == 2) {
      let num1 = parseFloat(prompt("Digite o primeiro número:"));
      let num2 = parseFloat(prompt("Digite o segundo número:"));
      alert("Resultado:", subtrair(num1, num2));

    } else if (opcao == 3) {
      let num1 = parseFloat(prompt("Digite o primeiro número:"));
      let num2 = parseFloat(prompt("Digite o segundo número:"));
      alert("Resultado:", multiplicar(num1, num2));

    } else if (opcao == 4) {
      let num1 = parseFloat(prompt("Digite o primeiro número:"));
      let num2 = parseFloat(prompt("Digite o segundo número:"));
      alert("Resultado:", dividir(num1, num2));

    } else if (opcao == 5) {
      alert("Saindo da calculadora...");
      break;

    } else {
      exibirErro();
    }
}
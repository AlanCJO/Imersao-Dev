
// document.addEventListener("DOMContentLoaded", () => dolarToReal());
// window.onload = function() {
//     setTimeout(() => {
//         dolarToReal();
//     }, 1000); 
// }

function dolarToReal() {

    const valorEmDolar = parseFloat(prompt("Qual o valor em dólar que você quer converter?"));
    const valorEmReal = (valorEmDolar * 5.65).toFixed(2);
    alert(valorEmReal);
}

// Revisão
// variáveis var int - float - string
// alert - parseInt - parseFloat - prompt
// operações + somar * multiplicar
// comentário final

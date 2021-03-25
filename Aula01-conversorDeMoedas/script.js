function dollarToReal(event) {
    event.preventDefault();

    let dollarValue = document.getElementById("dolar").value;

    if (isNumber(dollarValue)) {
        dollarValue = parseFloat(dollarValue);

        convertDollarToReal(dollarValue);
    }
}

function isNumber(value) {
    const numbers = /^[0-9.,]+$/;
    let isNumber = true;
    const input = document.getElementById("dolar");
    
    if (!value.match(numbers)) {
        input.classList.add('error');
        input.value = "digite somente números"
        isNumber = false;
    }

    return isNumber;
}

function clearError(event) {
    const element = event.path[0]
    if (element.value === "digite somente números") {
        element.value = '';
        element.classList.remove('error');
    }
}

function formatValues(value) {
    const valueToString = "R$ " + String(value).replace('.', ',');

    return valueToString;
}

function addHTML(text) {
    const div = document.getElementsByClassName("container-value")[0];
    const input = document.getElementById("info");

    div.classList.remove("hidden");
    input.setAttribute("value", text);    
}

function convertDollarToReal(dollar) {
    const endpointUSD = 'https://economia.awesomeapi.com.br/json/USD';
    let realValue;

    fetch(endpointUSD).then(response => {
        return response.json();
    }).then(data => {
        const real = data[0].bid;
        realValue = (dollar * real).toFixed(2);
        realValue = formatValues(realValue);
        addHTML(realValue);
    });
}
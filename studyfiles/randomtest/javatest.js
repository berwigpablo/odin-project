document.getElementById('sumButton').addEventListener("click", displaySum);

function displaySum() {
    let firstNum = Number(document.getElementById('firstNum').innerHTML)
    let secondNum = Number(document.getElementById('secondNum').innerHTML)

    let total = firstNum + secondNum;
    document.getElementById("answer").innerHTML = `${firstNum} + ${secondNum} é igual a ${total} e a Étila é a pessoa mais linda do mundo!`;
}



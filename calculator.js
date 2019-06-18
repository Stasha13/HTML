function add(){
    const a = parseInt(document.getElementById("inputa").value);
    const b = parseInt(document.getElementById("inputb").value);
        const c = a + b;
        document.getElementById('inputc').value=c;
        const resultElement = document.createElement('p');
        resultElement.innerText = c;
        document.getElementById('history').appendChild(resultElement);
}
function subtract (){
    const a = parseInt(document.getElementById("inputa").value);
    const b = parseInt(document.getElementById("inputb").value);
        const c = a - b;
        document.getElementById('inputc').value=c;
        const resultElement = document.createElement('p');
        resultElement.innerText = c;
        document.getElementById('history').appendChild(resultElement);
}
function multiply (){
    const a = parseInt(document.getElementById("inputa").value);
    const b = parseInt(document.getElementById("inputb").value);
        const c = a * b;
        document.getElementById('inputc').value=c;
        const resultElement = document.createElement('p');
        resultElement.innerText = c;
        document.getElementById('history').appendChild(resultElement);
}
function divide (){
    const a = parseInt(document.getElementById("inputa").value);
    const b = parseInt(document.getElementById("inputb").value);
        const c = a / b;
        document.getElementById('inputc').value=c;
        const resultElement = document.createElement('p');
        resultElement.innerText = c;
        document.getElementById('history').appendChild(resultElement);
}
function updateHistory(){
    document.getElementByID('result').innerText = res;
}



function calc() {
    const a = +document.getElementById("inputa").value;
    const b = +document.getElementById("inputb").value;
    
    return {
    add: function() {
        writeOutput(a + b);
    },
    sub: function() {
        writeOutput(a - b);
    },  
    mul: function() {
        writeOutput(a * b);
    },  
    div: function() {
        writeOutput(a / b);
    
        }
    }
}
function writeOutput(out) {
    console.log(out);
    document.getElementById("result").innerText = out;

    const resultElement = document.createElement('p');
    resultElement.innerText = out;
    document.getElementById('history').appendChild(resultElement);
}
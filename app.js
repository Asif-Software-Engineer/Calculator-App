function display(val) {
    document.getElementById('result') .value+= val
}
function solve() {
    let x = document.getElementById('result').value
    let y = eval(x)
    document.getElementById('result').value = y
}
function Perc() {
    let x = document.getElementById('result').value
    let y = eval(x) *100
    document.getElementById('result').value = y
}
function clearscreen() {
    document.getElementById('result') .value=''
}
function Delete(Del) {
    let str = document.getElementById('result').value;
    str = str.substring(0, str.length-1)
    document.getElementById('result').value = str;
}



// const numberButtons = document.querySelectorAll('[number]')
// const operationButtons = document.querySelectorAll('[Operator]')
// const equalsButton = document.querySelector('[equal]')
// const deleteButton = document.querySelector('[Deletion]')
// const allClearButton = document.querySelector('[clear]')

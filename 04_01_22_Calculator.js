

function add() {
    let a = Number(document.getElementById("x").value);
    let b = Number(document.getElementById("y").value);
    var c;
    c = a + b
    document.getElementById("result").innerText = "Addition result:" + c;
}
function sub() {
    let a = Number(document.getElementById("x").value);
    let b = Number(document.getElementById("y").value);
    var c;
    c = a - b
    document.getElementById("result").innerText = "Subtraction result:" + c;
}
function mul() {
    let a = Number(document.getElementById("x").value);
    let b = Number(document.getElementById("y").value);
    var c;
    c = a * b
    document.getElementById("result").innerText = "Multiplication result:" + c;
}
function div() {
    let a = Number(document.getElementById("x").value);
    let b = Number(document.getElementById("y").value);
    var c;
    c = a / b
    document.getElementById("result").innerText = "Division result:" + c;
}
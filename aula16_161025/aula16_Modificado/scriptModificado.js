function somar(){
    //define os valores fixos dentro da função
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    var resultado = n1 + n2;
    document.getElementById("alvo").textContent = `Somar: ${resultado}`;
}

function subtrair(){
    //define os valores fixos dentro da função
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    var resultado = n1 - n2;
    document.getElementById("alvo").textContent = `Subtração: ${resultado}`;
}

function multiplicar(){
    //define os valores fixos dentro da função
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    const resultado = n1 * n2;
    document.getElementById("alvo").textContent = `Multiplicação: ${resultado}`;
}

function dividir(){
    //define os valores fixos dentro da função
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    var resultado = n1 / n2;
    document.getElementById("alvo").textContent = `Divisão: ${resultado}`;
}
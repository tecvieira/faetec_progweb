function somar(){
    //define os valores fixos dentro da função
    const n1 = 5;
    const n2 = 3;
    const resultado = n1 + n2;
    document.getElementById("alvo").textContent = `Somar: ${resultado}`;
}

function subtrair(){
    //define os valores fixos dentro da função
    const n1 = 10;
    const n2 = 4;
    const resultado = n1 - n2;
    document.getElementById("alvo").textContent = `Subtração: ${resultado}`;
}

function multiplicar(){
    //define os valores fixos dentro da função
    const n1 = 6;
    const n2 = 7;
    const resultado = n1 * n2;
    document.getElementById("alvo").textContent = `Multiplicação: ${resultado}`;
}

function dividir(){
    //define os valores fixos dentro da função
    const n1 = 20;
    const n2 = 5;
    const resultado = n1 / n2;
    document.getElementById("alvo").textContent = `Divisão: ${resultado}`;
}
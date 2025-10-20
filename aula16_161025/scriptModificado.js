function somar() {
    //define os valores fixos dentro da função
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    var resultado = n1 + n2;
    document.getElementById("alvo").textContent = `Somar: ${resultado}`;
}

function subtrair() {
    //define os valores fixos dentro da função
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    var resultado = n1 - n2;
    document.getElementById("alvo").textContent = `Subtração: ${resultado}`;
}

function multiplicar() {
    //define os valores fixos dentro da função
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    const resultado = n1 * n2;
    document.getElementById("alvo").textContent = `Multiplicação: ${resultado}`;
}

function dividir() {
    //define os valores fixos dentro da função
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    var resultado = n1 / n2;
    document.getElementById("alvo").textContent = `Divisão: ${resultado}`;
}

// --- Funções de Cálculo (Mantidas) ---

function somar() {
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    var resultado = n1 + n2;
    document.getElementById("alvo").textContent = `Soma: ${resultado}`;
}

function subtrair() {
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    var resultado = n1 - n2;
    document.getElementById("alvo").textContent = `Subtração: ${resultado}`;
}

function multiplicar() {
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    const resultado = n1 * n2;
    document.getElementById("alvo").textContent = `Multiplicação: ${resultado}`;
}

function dividir() {
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    var resultado = n1 / n2;
    document.getElementById("alvo").textContent = `Divisão: ${resultado}`;
}

// --- Função de Limpeza Corrigida ---

function limpaCampo() {
    // Limpa o valor do primeiro campo de input
    document.getElementById("campo1").value = "";
    
    // Limpa o valor do segundo campo de input
    document.getElementById("campo2").value = "";
    
    // Limpa o texto de exibição do resultado (o elemento com id="alvo")
    document.getElementById("alvo").textContent = "Resultado será exibido aqui.";
}
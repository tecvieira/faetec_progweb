function somar() {
    //define os valores fixos dentro da função
    var n1 = Number(document.getElementById("campo1").value);
    var n2 = Number(document.getElementById("campo2").value);
    var resultado = n1 + n2;
    document.getElementById("alvo").textContent = `Somar: ${resultado}`;
    // document.getElementById("alvo").textContent = "Somar" + resultado;
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

function array(){
    let frutas = ["maçã", " banana", "laranja"];
    //Mostra todos elementos do array neste caso frutas
    // document.getElementById("alvo").textContent = frutas;
    //Mostra apenas o elemento indicado pelo índice
    // document.getElementById("alvo").textContent = frutas[0];
    // document.getElementById("alvo").textContent = frutas[1];
    // document.getElementById("alvo").textContent = frutas[2];
     // push - adiciona mais um elemento no final da lista
    // frutas.push("uva");
    // remove o último elemento
    // frutas.pop()
    // unshift adiciona no ínicio da lista
    // frutas.unshift("abacaxi");
    //  shift -removeu o primeiro valor de um array
    // frutas.shift();
    console.log(frutas.lengh);
     for(let i = 0; i < frutas.length; i++){
        if(frutas[i] === "maçã"){ // verifica se o elemento atual é exatamente igual a "maçã"
            // alert("Encontrei a maçã na posição: " +i)
             document.getElementById("alvo").textContent = `Encontrei a maçã na posição: ${i}`;
            break // interrompe a execução
        }

         console.log(frutas[i]);
     }

    // document.getElementById("alvo").textContent = frutas;
    // console.log(frutas);
}


// --- Função de Limpeza de todos os campos ---

function limpaCampo() {
    // Limpa o valor do primeiro campo de input
    document.getElementById("campo1").value = "";
    
    // Limpa o valor do segundo campo de input
    document.getElementById("campo2").value = "";
    
    // Limpa o texto de exibição do resultado (o elemento com id="alvo")
    document.getElementById("alvo").textContent = "Resultado será exibido aqui.";
}
//Array inicial
let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

document.getElementById("arrayBase").textContent = frutas.join(", ");

// Exibe o Array inicial completo
function mostrarArray() {
    document.getElementById("resultado").textContent = `Array inicial: ` + frutas.join(", ");
}

// Adiciona um item ao final do array
function adicionarItem() {
    frutas.push("manga");
    document.getElementById("resultado").textContent = `Adicionado: manga. Array agora: ` + frutas.join(", ");
}

//Remove o último ítem do array
function removeUltimo(){
    let removido = frutas.pop();
    document.getElementById("resultado").textContent = `Removido: ${removido}. Array agora: `+ frutas.join(", ");
}

//Ordenar o array
function ordenarArray(){
    let ordenado = frutas.sort();
    document.getElementById("resultado").textContent = `Array ordenado:` + frutas.join(", ");
}

//Filtrar ítens com mais de 5 letras
function filtrarItens(){
    let filtrado = frutas.filter(f => f.length > 5);
    document.getElementById("resultado").textContent = `Itens com mais de 5 letras: ${filtrado.join(", ")}`;
}

//Transforma todos os ítens em maiuscula
function mapearArray(){
    let maiusculas = frutas.map(f => f.toUpperCase());
    document.getElementById("resultado").textContent = `Itens em maiusculas: ${maiusculas.join(", ")}`;
}

//Soma exemplo númerico com reduce
function somarItens(){
    let numeros = [10, 20, 30, 40];
    let soma = numeros.reduce((total, n) => total + n, 0);
    document.getElementById("resultado").textContent = `Array numérico: [${numeros}]. A soma dos elementos é: ${soma}.`;
}

//Desafio: Crie uma nova função, utilizando o array frutas, onde mostre a resposta na <div id= "resultado"> da página.

function novaFuncao(){
    let filtrado = frutas.filter(f => f.length > 5);
    let maiusculas = filtrado.map(f => f.toUpperCase());
    let ordenado = maiusculas.sort();
    document.getElementById("resultado").textContent = `Exibindo ítens com mais de 5 letra em maiuculo e ordenado ` + ordenado.join(", ");
}
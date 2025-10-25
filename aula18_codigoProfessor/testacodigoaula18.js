// Array inicial
let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

document.getElementById("arrayBase").textContent = frutas.join(", ");

// Exibe o array completo
function mostrarArray() {
    // CORREÇÃO: Usar apenas crases (`) para template literal
    exibir(`Array atual: [ ${frutas.join(", ")} ]`);
}

// Função auxiliar para exibir resultados
function exibir(texto) {
    document.getElementById("resultado").innerHTML = texto;
}


// Adiciona um item ao final do array
function adicionarItem() {
    frutas.push("manga");
    // Adicionado ponto e vírgula, e corrigido o uso do template literal
    exibir(`Adicionado: manga<br>Array agora: ${frutas.join(", ")}`);
}


// Remove o último item do array
function removerUltimo() {
    let removido = frutas.pop();
    // CORREÇÃO: Usar apenas crases (`) para template literal
    exibir(`Removido: ${removido}<br>Array agora: ${frutas.join(", ")}`);
}


// Ordena o array
function ordenarArray() {
    frutas.sort();
    exibir("Array ordenado: " + frutas.join(", ")); // Aqui pode usar aspas simples, mas para consistência, poderia usar template literal também.
}


// Filtra itens com mais de 5 letras
function filtrarItens() {
    let filtrado = frutas.filter(f => f.length > 5);
    exibir("Itens com mais de 5 letras: " + filtrado.join(", "));
}


// Transforma todos os itens em maiúsculas
function mapearArray() {
    let maiusculas = frutas.map(f => f.toUpperCase());
    exibir("Itens em maiúsculas: " + maiusculas.join(", "));
}


// Soma exemplo numérico com reduce
function somarItens() {
    let numeros = [10, 20, 30, 40];
    let soma = numeros.reduce((total, n) => total + n, 0);
    // CORREÇÃO: Usar apenas crases (`) para template literal
    exibir(`Array numérico: [${numeros.join(", ")}]<br>Soma total: ${soma}`);
}



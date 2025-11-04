// Array base
let frutas = ["Maçã", "Banana", "Uva", "Abacaxi", "Manga"];
document.getElementById("arrayBase").textContent = frutas.join(", ");

// Exibe os resultados na div
function exibir(texto) {
    document.getElementById("resultado").innerHTML = texto;
}

// find() - encontra o primeiro item que satisfaça uma condição
function encontrarItem() {
    let encontrada = frutas.find(f => f.length > 5);
    exibir(`Primeira fruta com mais de 5 letras: <strong>${encontrada}</strong>`);
}

// includes() - verifica se um item existe no array
function verificarExistencia() {
    let existe = frutas.includes("Uva");
    exibir(`O array contém "Uva" ? <strong>${existe ? "Sim" : "Não"}</strong>`);
}

// some() / every() - verifica condições parciais ou totais
function verificarCondicao() {
    let temA = frutas.some(f => f.includes("a"));
    let todasMaior4 = frutas.every(f => f.length > 4);
    exibir(`Alguma fruta tem a letra "a"? <strong>${temA}</strong><br>
    Todas têm mais de 4 letras? <strong>${todasMaior4}</strong>`);
}

// findIndex() - retorna o índice do primeiro item que satisfaz uma condição
function buscarIndice() {
    let indice = frutas.findIndex(f => f.startsWith("B"));
    exibir(`Índice da fruta que começa com "B": <strong>${indice}</strong>`);
}


// toLowerCase() - converte texto para minúsculas
function textoMinusculo() {
    let texto = "JAVASCRIPT É INCRÍVEL!";
    exibir(`Texto original: ${ texto } < br > Em minúsculas: <strong>${texto.toLowerCase()}</strong>`);
}

// replace() - substitui parte de uma string
function substituirTexto() {
    let frase = "Eu gosto de Java.";
    let nova = frase.replace("Java", "JavaScript");
    exibir(`Antes: ${ frase } < br > Depois: <strong>${nova}</strong>`);
}

// split() - divide texto em partes e retorna array
function dividirTexto() {
    let frase = "maçã, banana, uva, manga";
    let partes = frase.split(", ");
    exibir(`Frase dividida: <strong>${JSON.stringify(partes)}</strong>`);
}

// Math.random() - gera número aleatório
function numeroAleatorio() {
    let numero = Math.floor(Math.random() * 10) + 1;
    exibir(`Número aleatório entre 1 e 10: <strong>${numero}</strong>`);
}

// Date() - mostra a data atual formatada
function dataAtual() {
    let hoje = new Date();
    exibir(`Data atual: <strong>${hoje.toLocaleDateString("pt-BR")}</strong><br>
    Hora: <strong>${hoje.toLocaleTimeString("pt-BR")}</strong>`);
}

// Escolhe uma fruta aleatória destro de uma lista
function geraFruta() {
    const randomIndex = Math.floor(Math.random() * frutas.length);
    const frutaAleatoria = frutas[randomIndex];
    exibir(`Fruta aleatória gerada: <strong>${frutaAleatoria}</strong>`)
}

// Pesquisa uma fruta na lista (Função implementada)
function pesquisaFruta() {
    const inputElement = document.getElementById("minhaFruta");
    const pesquisa = inputElement.value.trim();
    if (pesquisa === "") {
        exibir("<span>Erro:</span> Por favor, digite o nome de uma fruta para pesquisar.");
        return;
    }

    // Pesquisa de forma case-insensitive
    const pesquisaMinuscula = pesquisa.toLowerCase();
    const encontrada = frutas.some(f => f.toLowerCase() === pesquisaMinuscula);

    if (encontrada) {
        exibir(`A fruta <strong>"${pesquisa}"</strong> <span class="text-green-600 font-bold">existe</span> na lista. (Demonstra o uso de <code>some()</code> e <code>toLowerCase()</code>)`);
    } else {
        exibir(`A fruta <strong>"${pesquisa}"</strong> <span class="text-red-600 font-bold">não existe</span> na lista. (Demonstra o uso de <code>some()</code> e <code>toLowerCase()</code>)`);
    }

}

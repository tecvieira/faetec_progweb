//Array base:
let frutas = ["Maçã", "Banana", "Uva", "Abacaxi", "Manga"];

//Exibe os resultados
function exibir(texto){
    document.getElementById("arrayBase").textContent = frutas.join(", ");
}

//find() - encontra o primeiro item que satisfaça uma condição
function encontrarItem(){
    let encontrada = frutas.find(f=> f.length > 5);
    exibir(`Primeira fruta com mais de 5 letras:<strong>${encontrada}</strong>`)
}
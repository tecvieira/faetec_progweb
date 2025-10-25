 //Array inicial
let frutas = ["maçã", "banana","laranja","uva","abacaxi"];

document.getElementById("arrayBase").textContent = frutas.join(" ,")

function mostrarArray(){
    exibir(Array atual:[${frutas.join(",")}]);
}




//Adiciona um ítem ao final do array
function adicionarItem(){
    frutas.push("manga");
    exibir("Adicionado: manga <br> Array agora:" + frutas.join(" ,"));
}
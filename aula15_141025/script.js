function modificarBox() {
    const box = document.getElementById("fogo");

    box.classList.remove("box");
    box.classList.add("box-modificado");

}


function restauraPadrao() {
    const box = document.getElementById("fogo");
    
    box.classList.remove("box-modificado");
    box.classList.add("box");
}

//Função 2: verificar se um número é par
function ePar(){
    var numero = Number(document.getElementById("campo1").value);
    if((numero % 2 === 0) == true){
        alert("Par");
    } else{
        alert("Impar")
    }
    }


//Função 3: converter uma string para maiuscula
function converteParaMaiuscula(){
   var string = document.getElementById("campo1").value;
   alert( string.toUpperCase());
}

function verificaDoisValores(){
    var numero1 = Number(document.getElementById("campo1").value);
    var numero2 = Number(document.getElementById("campo2").value);
    if(numero1 === numero2){
        alert("São Identico");
    } else{
        alert("Não são identicos")

    }
}
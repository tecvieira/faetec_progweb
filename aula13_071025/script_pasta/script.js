function somar(a, b){
    var campo1 = Number(document.getElementById("campo1").value);
    // busca o valor de campo 1 no input do html
    var campo2 = Number(document.getElementById("campo2").value);
    // busca o valor de campo 2 no input do html
    var result = campo1 + campo2;
    // vai somar os valores das varáveis campo1 e campo 2
    console.log(result);
    // vai apresentar o resultado no console dentro de F12
    alert(result);
    // vai saltar na tela mostrando o valor

}


function mudaClasse(){
    var elemento = document.getElementById("div3");
    elemento.classList.remove("texto");
    elemento.classList.add("boxNovo");
    // adicionando funcionalida para desabilitar o campo 2 
    var campo2 = document.getElementById("campo2");
    campo2.setAttribute("disabled", true);
}


function removeAtributo(){
    // remove o bloqueio do campo 2
     var campo2 = document.getElementById("campo2");
     campo2.removeAttribute("disabled");

    //  desfaz a classe anterior e volta ao original
     var elemento = document.getElementById("div3");
    //  não esqueça de remover a classe anterior
     elemento.classList.remove("boxNovo");
    //  adicionando a classe original
    elemento.classList.add("texto");
 
}

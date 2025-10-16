function modificarBox() {
    const box = document.getElementById("fogo");
    box.classList.remove("box");
    box.classList.add("box-modificado");
}

//Restaura o padrão box nas 3 divs
function restauraPadrao() {
    const box = document.getElementById("fogo");
    box.classList.remove("box-modificado");
    box.classList.add("box");
    const elemento1 = document.getElementById("terra");
    elemento1.classList.remove("elemento");
    elemento1.classList.add("box");
    const elemento2 = document.getElementById("ar");
    elemento2.classList.remove("elemento");
    elemento2.classList.add("box");
}

//Função 2: verificar se um número é par
function ePar() {
    var numero = Number(document.getElementById("campo1").value);
    if ((numero % 2 === 0) == true) {
        alert("Par");
    } else {
        alert("Impar")
    }
}

//Função 3: converter uma string para maiuscula
function converteParaMaiuscula() {
    var string = document.getElementById("campo1").value;
    alert(string.toUpperCase());
}

//faz somar dois valores
function somar(a, b) {
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

//Verifica se dois valores são e iguais e do mesmo tipo
function verificaDoisValores() {
    var numero1 = Number(document.getElementById("campo1").value);
    var numero2 = Number(document.getElementById("campo2").value);
    if (numero1 === numero2) {
        alert("São Identico");
    } else {
        alert("Não são identicos")
    }
}
//Muda a classe em duas div simultaneamente e bloqueia campo 2
function mudaclasse() {
    const elemento1 = document.getElementById("terra");
    const elemento2 = document.getElementById("ar");
    elemento1.classList.remove("box");
    elemento2.classList.remove("box");
    elemento1.classList.add("elemento");
    elemento2.classList.add("elemento");
    //desabilitar o campo 2 
    var campo2 = document.getElementById("campo2");
    campo2.setAttribute("disabled", true);
}

function removeAtributo() {
    // remove o bloqueio do campo 2
    var campo2 = document.getElementById("campo2");
    campo2.removeAttribute("disabled");
}

function executarFuncao() {
    var campo = document.getElementById("campo").value;
    var maior = campo.toLowerCase();
    var resultado = maior.includes("mundo");
    document.getElementById("resultado").textContent = resultado;
}


function limparDiv(){
    document.getElementById("campo").value = "";
    document.getElementById("resultado").textContent = "";
}

//var resultado = campo.toUpperCase(); saída em maiusculo

//   var resultado = campo.toLowerCase(); saída em minusculo

// var resultado = campo.trim(); remove espaço antes
// var resultado = campo.replace(campo, "novo"); verifica se o dado existe e se é igual

//var resultado = campo.includes("novo"); recebe o dado na variável campo e compara com ítem

//console.log("novo") - mostra no console

//Usando toUpperCase() ou toLowerCase() verificar se no texto existe no campo ignorando a variação de maiuscula e minusculas
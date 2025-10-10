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
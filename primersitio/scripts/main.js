var imagenElemento = document.querySelector("img");
let imagenes = ["img/bat.png","img/bat1.png"];

imagenElemento.onclick = function () {
    var imagenElementoSRC = imagenElemento.getAttribute("src");
    if (imagenElementoSRC == "img/bat.png") {
        imagenElemento.setAttribute("src","img/bat1.png");
    } else {
        imagenElemento.setAttribute("src","img/bat.png");
    }
}

function nuevoNombre() {
    var meinNombre = prompt("Digite su nombre, camarada :3 ");
    if (!meinNombre) {
        nuevoNombre()
    } else {
    localStorage.setItem("nombre",meinNombre);
    }
}
function showNombre() {
    var meinTitulo = document.querySelector("h1");
    var meinNombre = localStorage.getItem("nombre");
    meinTitulo.textContent = "Hola, "+meinNombre+"!";
}
var meinBoton = document.querySelector("button");
meinBoton.onclick = function () {
    nuevoNombre();
    showNombre();
}
if (!localStorage.getItem("nombre")) {
    nuevoNombre();
    showNombre();
} else {
    showNombre();
}

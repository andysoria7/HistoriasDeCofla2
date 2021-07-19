
let alto = window.screen.height; // Es el alto.
let ancho = window.screen.width; // es el ancho.

comprar = confirm(`El alto es: ${alto}, El ancho es: ${ancho}`);

if(comprar){
    alert("Compra realizada exitosamente");
}else {
    alert("Compra cancelada");
}
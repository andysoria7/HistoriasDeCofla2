
const sendButton = document.getElementById('snd-nota');
sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try {
        prevRes = parseInt (document.getElementById('nota').value);
        if(isNaN(prevRes)) {
            throw "Gracioso";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(8,4,prevRes);
    } catch(e){
        resultado = "¿Sos gracioso?";
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado,mensaje);
})

const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado = "NO PODES SER TAN HDP";
        break;
        case 2: resultado = "SOS MALISIMO PARA MI MATERIA";
        break;
        case 3: resultado = "NO SABES CASI NADA";
        break;
        case 4: resultado = "MUY MAL";
        break;
        case 5: resultado = "MAL";
        break;
        case 6: resultado = "REGULAR";
        break;
        case 7: resultado = "BIEN, PERO PUEDE MEJORAR";
        break;
        case 8: resultado = "MUY BIEN";
        break;
        case 9: resultado = "EXCELENTE";
        break;
        case 10: resultado = "INSUPERABLE PAPU";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if(promedio >= 7) {
        
        return "<span class='green'>APROBADO</span>";
    }
    return "<span class='red'>DESAPROBADO</span>";

}




const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex"
    modal.style.animation = "aparecer 1s forwards"
    

}



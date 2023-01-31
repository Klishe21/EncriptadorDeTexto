const entradaTexto = document.querySelector(".entrada-texto");

const salidaTexto = document.querySelector(".salida-texto");


function botonEncriptar(){

    const textoEncriptado = encriptar(entradaTexto.value)

    salidaTexto.value = textoEncriptado    

    entradaTexto.value = " "

    salidaTexto.style.backgroundImage = "none"

}

function encriptar(stringEncriptado){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringEncriptado=stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncriptado.includes(matrizCodigo[i][0])){

            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }

    return stringEncriptado

}

function botonDesencriptar(){

    const textoEncriptado = desencriptar(entradaTexto.value)

    salidaTexto.value = textoEncriptado    

    entradaTexto.value = " "

}

function desencriptar(stringDesencriptado){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
        
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        
        }   
    }

    return stringDesencriptado
}
function  copiar()  {
    const  textcopy = salidaTexto.valor;
    navigator.clipboard.writeText(salidaTexto.value);
    }
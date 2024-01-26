let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste!!, lo hiciste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCampo();
        cursorInput();
    }
    return;

}

function limpiarCampo() {
    document.getElementById('numeroUsuario').value = '';

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}


function cursorInput() {
    document.getElementById('numeroUsuario').focus();
}

function nuevoIntento() {
    limpiarCampo();
    condicionesIniciales();
    cursorInput();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')

}

condicionesIniciales();



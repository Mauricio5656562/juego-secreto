let NumeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = parseInt(prompt('digite el numero maximo del juego'));

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}



function verificarIntento(){
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeusuario === NumeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el  usuario no acerto
        if(numeroDeusuario > NumeroSecreto){
            asignarTextoElemento('p','El numero es menor');
        }else{
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
  
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados)
    //si ya sorteamos todos los números podemos
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos lo numeros posibles')
        console.log(listaNumerosSorteados.sort());
    } else{
    //Si el numero generado esta incluido en la lista

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto();
    console.log(NumeroSecreto);
    intentos = 1;
    return;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el numro aleatorio
    //inicialiazar el numero de intentos
    condicionesIniciales();
    //deshabilidar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}
condicionesIniciales();



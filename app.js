// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

function agregarAmigo() {
    let amigo = document.getElementById('amigo');
    let amigoInput=amigo.value;
    if (amigoInput!=""){
        amigos.push(amigoInput);
        amigo.value = '';
        ActualizarLista();
    }
    else{
        alert('Ingrese un nombre de amigo');
    }
}

function ActualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}


function sortearAmigo(){
    if (amigos.length>0){
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById('amigoSorteado');
        resultado.textContent = "El amigo secreto sorteado es:" + amigoSorteado;
    }
    else{
        alert('No se han ingresado amigos aun');
    }
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

function agregarAmigo() {
    let amigo = document.getElementById('amigo');
    let amigoInput=amigo.value;
    if (amigoInput!=""){
        let lista = document.getElementById('listaAmigos');
        let li = document.createElement('li');
        li.textContent = amigoInput;
        lista.appendChild(li);
        amigos.push(amigoInput);
        amigo.value = '';
    }
    else{
        alert('Ingrese un nombre de amigo');
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
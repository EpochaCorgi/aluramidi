const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i=0;  i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        if(evento.code === "Enter" || evento.code === "Space"){
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if(elemento === null){
        console.log('Elemento não encontrado');
    } else if (elemento.localName === 'audio'){
            elemento.play();
        } else{
            console.log('Elemento não é um audio');
        }
}

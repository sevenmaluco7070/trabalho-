function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();

if (elemento === null) {
alert('Elemento não Encontrado');

}

}
const listaDeTeclas = document.querySelectorAll('.tecla');

        
        for(let contador = 0; contador < listaDeTeclas.length;contador++) {
            const tecla = listaDeTeclas[contador];
            const instrumento = tecla.classList[1];
            const idAudio = `#som_${instrumento}`;
            console.log(idAudio);
            console.log(instrumento);

            tecla.onclick = function(){
               tocaSom(idAudio);  
            }
            tecla.onkeydown = function() {
             tecla.classlist.add('ativa'); 
            }
            tecla.onkeyup = function(){
                tecla.classlist.remove('ativa');
            }
            console.log(contador)
      }

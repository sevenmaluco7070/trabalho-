//a função que deve ser executada é tocaSom, mas que som? Nesse caso, sará o parâmetro idElentoaudio. Ou seja, o endereço da tecla será procurado no html e reproduzido.
function tocaSom(idElementoAudio){
const elemento = document.querySelector(idElementoAudio);
// se o elemento pesquisado forigual a "inexistente", o alerta de elemento não encontrado não aparecerá.
      if(elemento === null){ 
         alert('Elemento não encontrado');
      }
//se o elemento exibir, a função play daquele elemento acordará, ou seja, a tecla será reproduzida.
      if(elemento && elemento.localName === 'audio'){
        elemento.play();
      }else {
        alert('Elemento não encontrado');
      }
}
//querySelector encontra as informações da tela pesquisada no documento
const listaDeTeclas = document.querySelectorAll('.tecla');
// Estrutura de repetição - Enquanto 
// para que as teclas não sejam repetidas de maneira infinita, criamos o flor, com valor de início 0, e valor final chamado de contador < ListaDeTeclas.Length, para que a repetição seja exatamente do tamanho da nossa lista, que é de 9 teclas.
        for(let contador = 0; contador < listaDeTeclas.length;contador++) {
            const tecla = listaDeTeclas[contador];
// classlist armazena todos as todas as informações do elemento pesquisado.
            const instrumento = tecla.classList[1];
// o idAudio é responsável por identificar o som do botão pesquisado.
            const idAudio = `#som_${instrumento}`;
            console.log(idAudio);
// onclick significa "ao clicar na tecla" a função tocaSom será executada, o id daquele audio será buscado e reproduzindo.
            console.log(instrumento);

            tecla.onclick = function(){
               tocaSom(idAudio);  
            };
//onkeydown significa "quando a tecla estiver pressionada", nesse caso uma função? É a estilização de mudança de cor do botão quando as teclas Enter e space forem apertadas.
            tecla.onkeydown = function() {
             tecla.classList.add('ativa'); 
            };
//onkeyup significa "quando a tecla estiver erguida, não pressionada", nesse caso, a função será removida.
            tecla.onkeyup = function(){
                tecla.classList.remove('ativa');
            };
            console.log(contador)
      }

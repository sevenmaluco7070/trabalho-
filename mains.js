//a função que deve ser executada é tocaSom, mas que som? Nesse caso, sará o parâmetro idElentoaudio. Ou seja, o endereço da tecla será procurado no html e reproduzido.
function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}
// se o elemento pesquisado forigual a "inexistente", o alerta de elemento não encontrado não aparecerá.
// Estrutura de repetição - Enquanto 
const listaDeTeclas = document.querySelectorAll('.tecla');
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
             tecla.classlist.add('ativa'); 
            };
//onkeyup significa "quando a tecla estiver erguida, não pressionada", nesse caso, a função será removida.
            tecla.onkeyup = function(){
                tecla.classlist.remove('ativa');
            }
            console.log(contador)
      }

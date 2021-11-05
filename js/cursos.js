window.onload = function(){
    console.log('terminou de carregar a página');
    buscaCursos();
}

function buscaCursos(){
    //funcao que busca os dados em api/cursos.php e monta o HTML na página
    
    fetch('api/dadoscursos.php') //url sendo requisitada
        .then((resposta) => { //pega a resposta no formato json
            return resposta.json();
        })
        .then((dados) => {    //aquela resposta contem dados
            console.log(dados);  //exibe os dados no console
        }); 

}
//as variaveis resposta e dados poderiam ter outros nomes, a seu gosto, mas assim fica bem explicativo

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());


//função que cria um conjunto de links dos semestres para filtrar disciplinas


function linksSemestres(semestres){
    let links = document.querySelector("#links");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let txt = document.createTextNode("Todos");

    li.appendChild(txt);
    ul.appendChild(li);
    
    
    //Gera os <li> com 1, 2, 3... semestre
    for (let i = 1; i <= semestres; i++) {
        let li = document.createElement("li");
        let txt = document.createTextNode(i + "o. Semestre");
        li.appendChild(txt); 
        ul.appendChild(li);  
       
}
    
    links.appendChild(ul);
    
   

    then(dados => {
        console.log(dados);
        nomeCurso.innerHTML = dados.nome;
        semCurso.innerHTML = "Duração: " + dados.semestres + " semestres";
        coordCurso.innerHTML = "Coordenador: " + dados.coordenador.nome;
        
        //invoca a função que vai criar os links
        linksSemestres(dados.semestres);
    });

}

function buscaCurso(idCurso){
    var nomeCurso = document.querySelector("#nomecurso");
    var semCurso = document.querySelector("#semcurso");
    var coordCurso = document.querySelector("#coordcurso");
    fetch('api/dadoscursos.php?id='+idCurso)
        .then(response => {
            return response.json();
        })
        .then(dados => {
            console.log(dados);
            nomeCurso.innerHTML = dados.nome;
            semCurso.innerHTML = "Duração: " + dados.semestres + " semestres";
            coordCurso.innerHTML = "Coordenador: " + dados.coordenador.nome;
            linksSemestres(dados.semestres);

            //invoca a função que cria os links de semestres
            linksSemestres(dados.id, dados.semestres);
            //invoca a função que faz requisição das disciplinas
            //usa o id do curso, e semestre 0 (todos)
            listaDisciplinas(dados.id, 0);

        });
}

window.onload = function(){
    console.log(params);
    buscaCurso(params.id);

  }
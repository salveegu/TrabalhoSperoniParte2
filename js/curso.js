const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());


function listaDisciplinas(id_curso, semestre){
    //seleciona a div e limpa o seu conteúdo
    let divDisciplinas = document.querySelector("#disciplinas");
    divDisciplinas.innerHTML = "";
    //requisição AJAX
    fetch("api/dadosdisciplinas.php?id_curso="+id_curso+"&semestre="+semestre)
    .then(response => {
        //pega a resposta como json
        return response.json();
    })
    .then(disciplinas => {
        //exibe no console os dados retornados 
        console.log(disciplinas);
    })
}

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

           
        });
}

window.onload = function(){
    console.log(params);
    buscaCurso(params.id);

  }
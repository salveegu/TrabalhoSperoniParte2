
window.onload = function(){
    console.log('terminou de carregar a página');
    buscaCursos();
}

function buscaCursos(){
    //funcao que busca os dados em api/cursos.php e monta o HTML na página

    //recupera o elemento com id #tabelaCursos, e guarda em uma variável com o mesmo nome
    let tabelaCursos = document.querySelector("#tabela-cursos");

    fetch('api/dadoscursos.php') //url sendo requisitada
        .then((resposta) => { //pega a resposta no formato json
            return resposta.json();
        })
        .then((dados) => {    //aquela resposta contem dados
            dados.forEach(curso => { //para cada curso contido em dados
                console.log(curso.nome); //exibe o nome do curso no console
                
                 //DOM - Document Object Model
                let tr = document.createElement("tr");
                //cria uma célula para o id, dentro dela um nó de texto, e dentro do nó um valor - adiciona célula na linha
                let tdid = document.createElement("td");
                let textid = document.createTextNode(curso.id);
                tdid.appendChild(textid);
                tr.appendChild(tdid);

                //cria uma célula para o id, dentro dela um nó de texto, e dentro do nó um valor - adiciona célula na linha
                let tdnome = document.createElement("td");
                let textnome = document.createTextNode(curso.nome);
                tdnome.appendChild(textnome);
                tr.appendChild(tdnome);

                //cria uma célula para o id, dentro dela um nó de texto, e dentro do nó um valor - adiciona célula na linha
                let tdsemestres = document.createElement("td");
                let textsemestres = document.createTextNode(curso.semestres);
                tdsemestres.appendChild(textsemestres);
                tr.appendChild(tdsemestres);
                
                //-----------------------------------------------
                //cria uma célula para o id, dentro dela um nó de texto, e dentro do nó um valor - adiciona célula na linha

                let tdcoord = document.createElement("td");

                let linkcoord = document.createElement("a");

                let textcoord = document.createTextNode(curso.coordenador.nome);

                //tdcoord.appendChild(textcoord);
                
                tr.appendChild(tdcoord);
                linkcoord.appendChild(textcoord);
                linkcoord.setAttribute("href", "#");
                linkcoord.setAttribute("onclick", "linkProfessor(this)");
                linkcoord.setAttribute("data-coord", curso.coordenador.id);
                tdcoord.appendChild(linkcoord);
                tr.appendChild(tdcoord);

                //-----------------------------------------------

                //adiciona a linha na tabela
                tabelaCursos.appendChild(tr);

               


            })
        
    })
    .catch(err => console.error(err)); //caso dê erro, mostra no console
}
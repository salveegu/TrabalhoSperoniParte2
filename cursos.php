<?php
  include('cabecalho.html');
  include('dados.php');
?>
  <main class="container">
      <h2>Lista dos Cursos</h2>
      <table class="table table-striped">
          <thead>
              <th>Id</th>
              <th>Nome</th>
              <th>Semestres</th>
              <th>coordenador</th>
          </thead>
          
          <tbody>
              <!-- Aqui vão as linhas com os dados -->
              <?php
                $cursos = getCursos();
                foreach($cursos as $curso){
                    echo ("<tr>
                            <td>".$curso['id']."</td>

                            <td><a href ='curso.php?id=".$curso['id']."'>".$curso['nome']."</a></td>

                            <td>".$curso['semestres']."</td>");
                    //pega o id do coordenador do curso
                    $idCoord = $curso['coordenador'];
                    //busca os dados do professor e armazena em $coordenador (retorna um array)
                    $coordenador = getProfessor($idCoord);
                    //exibe o nome do coordenador na coluna da tabela
                    echo (" <td><a href='professor.php?id=".$coordenador['id']."'>".$coordenador['nome']."</a></td>
                    </tr>");
                }

              ?>
          </tbody>
          


      </table>
  </main>
<?php
  include('rodape.html');
?>

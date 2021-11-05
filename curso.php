<?php
include ('cabecalho.html');
include ('dados.php');
?>
<main class="container">
    <h2>Curso</h2>
    <br>
    <?php
    //exibe o conteúdo do Array $_GET
   // print_r($_GET);
    //recuperamos o valor da posição id

    $id = $_GET['id'];

    //buscamos os dados do professor com aquele id

    $curso = getCurso($id);
    //exibindo o conteúdo do array $curso
    //print_r($curso);

    echo ('<dl>
    <dt>'.$curso['nome'].'</dt>
    <dd>Este é o id do curso ='.$curso['id'].'</dd>
    <dd>Quantidade de semestres do curso ='.$curso['semestres'].'</dd>
    <dd>Este é o ID do coordenador do curso ='.$curso['coordenador'].'</dd>
  </dl>');

?>
</main>

<?php
include ('rodape.html');
?>

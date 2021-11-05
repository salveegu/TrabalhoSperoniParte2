<?php
include ('cabecalho.html');
include ('dados.php');
?>
<main class="container">
    <h2>Dados do Professor</h2>
    <?php
    //exibe o conteúdo do Array $_GET
   // print_r($_GET);
    //recuperamos o valor da posição id
    $id = $_GET['id'];
    //buscamos os dados do professor com aquele id
    $professor = getProfessor($id);
    //exibindo o conteúdo do array $professor
   // print_r($professor);
   echo ('<dl>
            <dt>'.$professor['nome'].'</dt>
            <dd>Este é o professor com id = '.$professor['id'].'</dd>
            <dd>Email = '.$professor['email'].'</dd>
            <dd>Telefone = '.$professor['tel'].'</dd>
          </dl>');
?>

</main>
<?php
include ('rodape.html');
?>

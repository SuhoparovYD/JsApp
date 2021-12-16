<html>
  <head>
    <title>Т е с т</title>
  <title>canvas</title>
  <meta charset="utf-8">
 
 <script src="js\bootstrap.min.js"></script> 
 <link href="css\bootstrap.min.css" rel="stylesheet">
    <script type="text/javascript" src="js\sgr7.js"> </script>

  </head>
  <body>

 
<?php

  // Соединяемся, выбираем базу данных
  $link = mysqli_connect("localhost", "root", "mPassW0rd", "mydb");

  if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
  }

  $result = mysqli_query($link, "SELECT xl,xr FROM slabs", MYSQLI_USE_RESULT);

  $coord = array(0 => array("xr" => 0,"xl" => 0));
  $i=0;

  while ($line = mysqli_fetch_array($result)) {

     $coord[$i++]=array($line[0],$line[1]);
  }

// Освобождаем память от результата
  mysqli_free_result($result);

// Закрываем соединение
  mysqli_close($link);

  $json1 = json_encode($coord); 

?>

<script type="text/javascript">
  var id1 = <?php print_r($json1); ?>;

  for (i=0; i < id1.length-1; i++)  {
	   
    ar1[i]=+id1[i][0];
    ar2[i]=+id1[i][1];

}
</script>

<form name="NoMaxRect">
<br>
    Номер макс прямоугольника <input type="text" name="noMR" value = "0" size="1">
    <input type="button" name="buttonMRect" value="Следующий" onClick="newMRect();"><br>
</form>

<form name="forma1">
<br>
	Номер строки <input type="text" name="yn" value = "3" size="1">  
    Координаты (л,п) <input type="text" name="xln"  value = "33" size="4">
                     <input type="text" name="xrn" value = "243" size="4"><br>
    <input type="button" name="buttonCoord" value="Заменить" onClick="newSlab();"><br>
</form>
	
   <canvas id="mypicture" width="400" height="500">
    <p>Ваш браузер не поддерживает рисование.</p>
	
	<script>  drawSlab();
	</script>
	
  </body>
</html>
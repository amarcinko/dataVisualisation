<?php 
$host = "localhost";
  $user = "root";
  $pass = "";

  $databaseName = "mojipodaci";

  $con = mysql_connect($host,$user,$pass);
  $dbs = mysql_select_db($databaseName);

	if ( !mysql_query("SELECT * FROM drzave WHERE skr = '$_POST[drz]'") )
	{
		die(mysql_error());
	}

	else{
		$query = mysql_query("SELECT * FROM drzave WHERE skr = '$_POST[drz]'");
		$row = mysql_fetch_row($query);
		$result = $row[2];
		if ($result == "")
		{
			$result = "Podaci za ".$_POST['drz']." nisu uneseni!";
		}
		echo $result;
	}
  ?>
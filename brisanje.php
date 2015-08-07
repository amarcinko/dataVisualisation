<?php 
$host = "localhost";
  $user = "root";
  $pass = "";

  $databaseName = "mojipodaci";

  $con = mysql_connect($host,$user,$pass);
  $dbs = mysql_select_db($databaseName);

  	if ($_POST['tip'] == "o")
  	{
  		unlink('fls/'.$_POST['naziv'].'.php');
  	}

	if ( !mysql_query("SELECT * FROM meta WHERE naziv = '$_POST[naziv]'") )
	{
		die(mysql_error());
	}

	else{
		$query = mysql_query("SELECT * FROM meta WHERE naziv = '$_POST[naziv]'");
		$row = mysql_fetch_row($query);
		$query_2 = mysql_query("DELETE FROM meta WHERE naziv = '$_POST[naziv]'");
		$query_2 = mysql_query("DROP TABLE 'row[3]'");
		$result = $row[4];
		if ($result == "")
		{
			$result = "Greška";
		}
		echo "Podaci '".$result."'' su obrisani!";
	}
  ?>
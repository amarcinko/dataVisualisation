<script language="javascript"> 

podaci_x = new Array();
podaci_y = new Array();

<?php 

	mysql_connect("localhost", "root", "") or
    die("Greška! Spajanje sa bazom neuspješno: " . mysql_error());
	mysql_select_db("mojipodaci");

if(!isset($_GET['tab']))
{
$rez = mysql_query("SELECT * FROM tablica");
$_GET['tab'] = "tablica";
}
elseif (isset($_GET['tab'])) {
	$a = mysql_query("SELECT tab FROM meta WHERE naziv = '$_GET[tab]' ");
	$b = mysql_fetch_row($a);
	$rez = mysql_query("SELECT * FROM $b[0]");
}
$br = 0;

 while ($redak = mysql_fetch_array($rez, MYSQL_NUM)) {

      $pod_x[$br] = $redak[1];
      $pod_y[$br] = $redak[2];

      $br++;
 }

	$js_pod_x = json_encode($pod_x);
	$js_pod_y = json_encode($pod_y);

 echo "var podaci_x = ". $js_pod_x . ";\n";
 echo "var podaci_y = ". $js_pod_y . ";\n";

?>

</script>

<head>

 <meta charset="utf-8">

		
<link  rel="stylesheet" type="text/css" href="/form/c3/c3.css"></script>	 

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"> </script>
<script src="http://d3js.org/d3.v3.min.js"></script>

<script language="javascript" src="/form/fcnt.js"> </script>
<script language="javascript" src="graf6_d3.js"> </script>

<link  rel="stylesheet" type="text/css" href="/form/style.css"></script>	 
<script language="javascript" src="/form/c3/c3.min.js"> </script>

</head>

<body>


  <br>


<div class="prewgraf" style="width:80%; margin-top: 10px; height:450px;">

<b> <?php 
$sql = "SELECT puni_naziv FROM meta WHERE naziv = '$_GET[tab]' ";
$result = mysql_query($sql);
$red = mysql_fetch_row($result);
echo $red[0];
 ?></b>
<br>
<div id="graf" style="margin-top: 50px;">
</div>
</div>


</body>
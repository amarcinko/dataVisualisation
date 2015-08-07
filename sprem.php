<head>

 <meta charset="utf-8">

 <title> Spremljeni podaci! </title>

		
<link  rel="stylesheet" type="text/css" href="style.css"></script>	 

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"> </script>
<script src="http://d3js.org/d3.v3.min.js"></script>

<script language="javascript" src="fcnt.js"></script>



</head>

<body style="">

<?php include "header.php"; ?>

  <br>
  <br>


<div style="width: 120px; float: left; margin-top: 50px; margin-left: 60px; color: #080808;">

<b>Obrasci:</b>

<table class="sprem_okv_o">

<?php 

	mysql_connect("localhost", "root", "") or
    die("Greška! Spajanje sa bazom neuspješno: " . mysql_error());
    mysql_select_db("mojipodaci");
    
$sql = "SELECT * FROM meta WHERE tip = 'obr' ";
$result = mysql_query($sql);

if (!$result) {
    echo "Nema tablica!\n";
    echo 'Error: ' . mysql_error();
    exit;
}


while ($row = mysql_fetch_row($result)) {


    printf("<tr>
		<td><div  class='stavke' id='gstavka' onclick='window.location = \" /form/fls/$row[1].php\"'> {$row[4]} </div></td>
         <td><div  class='brisi' onclick='brisanje(\"$row[1]\",\"o\")'> X </div></td>
		</tr>");
}
?>
	
</table>
</div>

<div style="width: 120px; float: left; margin-top: 50px; margin-left: 60px; color: #080808;">

<b>Stupčasti graf:</b>
<table class="sprem_okv_g">

<?php 

$sql = "SELECT * FROM meta WHERE tip = 'graf1' ";
$result = mysql_query($sql);

if (!$result) {
    echo "Nema tablica!\n";
    echo 'Error: ' . mysql_error();
    exit;
}


while ($row = mysql_fetch_row($result)) {

    printf("<tr>
        <td><div  class='stavke' id='gstavka' onclick='window.location = \" /form/grafovi/graf1.php?tab=$row[1]\"'> {$row[4]} </div></td>
         <td><div  class='brisi' onclick='brisanje(\"$row[1]\",\"g\")'> X </div></td>
        </tr>");
}

?>
    
</table>
</div>

<div style="width: 120px; float: left; margin-top: 50px; margin-left: 60px; color: #080808;">

<b>Linijski graf:</b>
<table class="sprem_okv_g">

<?php 

$sql = "SELECT * FROM meta WHERE tip = 'graf2' ";
$result = mysql_query($sql);

if (!$result) {
    echo "Nema tablica!\n";
    echo 'Error: ' . mysql_error();
    exit;
}


while ($row = mysql_fetch_row($result)) {

    printf("<tr>
        <td><div  class='stavke' id='gstavka' onclick='window.location = \" /form/grafovi/graf2.php?tab=$row[1]\"'> {$row[4]} </div></td>
         <td><div  class='brisi' onclick='brisanje(\"$row[1]\",\"g\")'> X </div></td>
        </tr>");
}

?>
    
</table>
</div>


<div style="width: 120px; float: left; margin-top: 50px; margin-left: 60px; color: #080808;">

<b>Pita graf:</b>
<table class="sprem_okv_g">

<?php 

$sql = "SELECT * FROM meta WHERE tip = 'graf3' ";
$result = mysql_query($sql);

if (!$result) {
    echo "Nema tablica!\n";
    echo 'Error: ' . mysql_error();
    exit;
}


while ($row = mysql_fetch_row($result)) {

    printf("<tr>
        <td><div  class='stavke' id='gstavka' onclick='window.location = \" /form/grafovi/graf3.php?tab=$row[1]\"'> {$row[4]} </div></td>
         <td><div  class='brisi' onclick='brisanje(\"$row[1]\",\"g\")'> X </div></td>
        </tr>");
}

?>
    
</table>
</div>

<div style="width: 120px; float: left; margin-top: 50px; margin-left: 60px; color: #080808;">

<b>Krafna graf:</b>
<table class="sprem_okv_g">

<?php 

$sql = "SELECT * FROM meta WHERE tip = 'graf4' ";
$result = mysql_query($sql);

if (!$result) {
    echo "Nema tablica!\n";
    echo 'Error: ' . mysql_error();
    exit;
}


while ($row = mysql_fetch_row($result)) {

    printf("<tr>
        <td><div  class='stavke' id='gstavka' onclick='window.location = \" /form/grafovi/graf4.php?tab=$row[1]\"'> {$row[4]} </div></td>
         <td><div  class='brisi' onclick='brisanje(\"$row[1]\",\"g\")'> X </div></td>
        </tr>");
}

?>
    
</table>
</div>

<div style="width: 120px; float: left; margin-top: 50px; margin-left: 60px; color: #080808;">

<b style="font-size:12px;">Usporedni linijski:</b>
<table class="sprem_okv_g">

<?php 

$sql = "SELECT * FROM meta WHERE tip = 'graf5' ";
$result = mysql_query($sql);

if (!$result) {
    echo "Nema tablica!\n";
    echo 'Error: ' . mysql_error();
    exit;
}


while ($row = mysql_fetch_row($result)) {

    printf("<tr>
        <td><div  class='stavke' id='gstavka' onclick='window.location = \" /form/grafovi/graf5.php?tab=$row[1]\"'> {$row[4]} </div></td>
         <td><div  class='brisi' onclick='brisanje(\"$row[1]\",\"g\")'> X </div></td>
        </tr>");
}

?>
    
</table>
</div>

<div style="width: 120px; float: left; margin-top: 50px; margin-left: 60px; color: #080808;">

<b style="font-size:12px;">Usporedni stupci:</b>
<table class="sprem_okv_g">

<?php 

$sql = "SELECT * FROM meta WHERE tip = 'graf6' ";
$result = mysql_query($sql);

if (!$result) {
    echo "Nema tablica!\n";
    echo 'Error: ' . mysql_error();
    exit;
}


while ($row = mysql_fetch_row($result)) {

    printf("<tr>
        <td><div  class='stavke' id='gstavka' onclick='window.location = \" /form/grafovi/graf6.php?tab=$row[1]\"'> {$row[4]} </div></td>
        <td><div  class='brisi' onclick='brisanje(\"$row[1]\",\"g\")'> X </div></td>
        </tr>");
}

?>
    
</table>
</div>

</body>

<script>
function brisanje (x,tip) 
{ 
    $.post('brisanje.php', {'naziv': x, 'tip': tip},
                 function(response)
                 {
                   alert(response);
                   window.location.replace("sprem.php");
                  }
            );
}

</script>



<head>

<title> Unos podataka! </title>

 <meta charset="utf-8">

		
<link  rel="stylesheet" type="text/css" href="style.css"></script>	 

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"> </script>
<script src="http://d3js.org/d3.v3.min.js"></script>

<script src="http://d3js.org/topojson.v1.min.js"></script>
<script src="http://d3js.org/d3.geo.projection.v0.min.js"></script>
<script src="http://d3js.org/d3.geo.tile.v0.min.js"></script>
<script src="js/d3.twine.js"></script>

<script>

	var drz = "<?php echo $_GET['drz']?>";
	var drzava = "";


	$.getJSON( "js/data/admin0_50m.json", function( data ) {

	var ok = 0;
  var x=data.objects.admin0.geometries;
  	
  	for(i = 0; i<241; i++)
  	{
  		if (x[i].properties.iso_a3 == drz)
  			{
	  			var ok = 1;
	  			drzava = x[i].properties.admin;
	  			$("#naziv_drzave").html(drzava);
	  			break;
  			}

  	}

  	if (ok == 0)
  	{
  		alert("Krivo odabrana država!")
  		window.location = "geoviz.php";
  	}
	});
</script>


<script language="javascript" src="fcnt.js"></script>

</head>

<body style="">

<?php include 'header.php';

	mysql_connect("localhost", "root", "") or
    die("Greška! Spajanje sa bazom neuspješno: " . mysql_error());
    mysql_select_db("mojipodaci");

    if (isset($_POST['spremi']))
    {	
    	$q1 = "UPDATE drzave SET tekst = '$_POST[tekst]' WHERE skr = '$_GET[drz]'";
    	$q2 = "INSERT INTO drzave (skr, tekst) VALUES ('$_GET[drz]','$_POST[tekst]')";
    	mysql_query($q1);
    	if (mysql_affected_rows() == 0)
    	{
    		mysql_query($q2);
    		if(mysql_affected_rows() == 0)
    		{
    			die(mysql_error());
    		}
    		else
	    	{
	    		echo "<p style='position: relative; float: right;'><b style='color: red'>Novi podaci uneseni!</b></p>";
	    	}
    	}
    	else
    	{
    		echo "<p style='position: relative; float: right;'><b style='color: red'>Podaci uneseni!</b></p>";
    	}
    	
    }

    if( $q3 = mysql_query("SELECT * FROM drzave WHERE skr ='$_GET[drz]'"))
    {
    	if(mysql_affected_rows() == 1)
    		{
    			$row = mysql_fetch_row($q3);
    		}
    	else
    	{
    		$row[2] = "";
    	}
    }
    else
    	{
    		$row[2] = ""; 
    	}
?>

  <br>
  <br>
 <div id="geo_d_m_wrapper">
	<div id="geo_menu">
		<table style="width: 270px; text-align: center;">
			<tr>
				<td> <a href="geoviz.php"> <div class="stavke">Pregled podataka </div> </a></td>
			</tr>
		</table>
	</div>

  <div style="font-size: 14px; text-align:left">
  <br>
  Kratica za dodavanje grafova: <br> <br>
  <textarea type="text" rows="4" style="width:90%; font-size: 17px;"><moj-graf id="REDNI_BROJ" name="BROJ_GRAFA">naziv_grafa</moj-graf></textarea>
  <br>
  <p style="font-size: 14px; text-align:left"> BROJ GRAFA: </p>
  <p style="font-size: 14px; font-weight: normal;"> 
  Stupčasti graf: 1 <br>
  Linijski graf: 2 <br>
  Pita graf: 3 <br>
  Krafna graf: 4 <br>
  Linijski usporedni: 5 <br>
  Stupčasti usporedni: 6 <br>
  </p><br>
  <p>
  Maksimalan broj grafova po državi je: 50<br>
  U kraticu se (atribut id) upisuje redni broj grafa (1,2 ili 3) i tip grafa (atribut name; mogući tipovi 1-6).</p>
  </div>

</div>

<div id="geo_unos">
	
<form method="POST" action="">
<table style="color: black">
<tr>
		<td>
			Država:
		</td>
		<td id = "naziv_drzave" style="font-weight: bold;">
		
		</td>
	<tr>
	<tr>
		<td>
			Skraćenica:
		</td>
		<td>
		<b>
		<?php echo $_GET['drz'] ?>
		</b>
		</td>
	<tr>
		<td style="vertical-align:text-top;">
			Tekst:
		</td>	
		<td>
			 <textarea rows="20" cols="100" name="tekst"><?php echo $row[2]; ?></textarea>
 		</td>
 	</tr>
 </table>
 <input type="submit" class="button" name="spremi">
</form>

</div>


</div>


</body>

<script language="javascript" src="geo.js"></script>
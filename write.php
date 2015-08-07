<?php

	if (isset($_POST["html"]))
	{
            mysql_connect("localhost", "root", "") or die(mysql_error());

  		mysql_select_db("mojipodaci") or die(mysql_error());

  		$naz = str_replace(' ', '_', $_POST['naz']);

  		if(!mysql_query("INSERT INTO meta (naziv, tip, puni_naziv) VALUES ('$naz', 'obr','$_POST[naz]')"))
				{
				echo mysql_error();
				}
				if(!($qry=mysql_query("SELECT id FROM meta WHERE naziv ='$naz'")))
				{
				echo mysql_error();
				}
				else
				{
					$resl = mysql_fetch_row($qry);
				}

				if(!mysql_query("UPDATE meta SET tab='obr_".$resl[0]."' WHERE id='".$resl[0]."' "))
				{
				echo mysql_error();
				}

				if($qry_2=mysql_query("SELECT tab FROM meta WHERE naziv ='$naz'"))
				{
					$resl_2 = mysql_fetch_row($qry_2);
				}
				else
				{
					echo mysql_error();
				}

				if(!mysql_query("CREATE TABLE ".$resl_2[0]." (id INT NOT NULL AUTO_INCREMENT,PRIMARY KEY(id))"))
				{
				echo mysql_error();
				}
                
                for($i = 0; $i < count($_POST["labele"]); $i++) 
                {
                    if(!mysql_query("ALTER TABLE ".$resl_2[0]." ADD `".$_POST['labele'][$i]."` VARCHAR( 255 )"))
                    { echo mysql_error(); } 
                }
        
	$div_html = $_POST["html"];
	$mojadat = str_replace(' ', '_', $_POST["dat"]);

	$check_1 = '<?php
                

  		mysql_connect("localhost", "root", "") or die(mysql_error());
  		mysql_select_db("mojipodaci") or die(mysql_error()); 
                
                if (isset($_POST["spremi"]))
                    { 
                    if( !mysql_query("INSERT INTO '.$resl_2[0].'(' ;
        
        $check_2_zadnji = "`".$_POST["labele"][count($_POST["labele"])-1]."`";
        
        $check_3 = ') VALUES (' ;
        
        $zadnja = $_POST["stavke"][count($_POST["labele"])-1];
        
        $zadnja_x = "\$_POST[".$zadnja."]";
        
        $check_3_zadnji = "'$zadnja_x' ) \") )
                        { echo mysql_error(); }
                        
                        echo '<p style=\'position:relative; float:right; color:red;\'>Podaci uneseni!</p>';
                        
                        }
          
                ?>";


	$head = ' <head>
 			<meta charset="utf-8">
			<link  rel="stylesheet" type="text/css" href="/form/style.css"></script>	 
			<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
			<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"> </script>
			<script src="http://d3js.org/d3.v3.min.js"></script>
			<script language="javascript" src="/form/fcnt.js"></script>
			</head>' ;

	$header = '<header><a href="/form/index.php" class="logo">
    <b style="color: #eee">Moji</b>
    <b style="color: rgba(24,149,215,1);">Podaci: </b></a>
	<span class="menu"> <a href="/form/create.php"> Dodaj obrazac </a> </span>
	<span class="menu"> <a href="/form/predef.php"> Dodaj graf </a> </span>
	<span class="menu"> <a href="/form/geoviz.php"> Geo podaci </a> </span>
	<span class="menu"> <a href="/form/sprem.php"> Spremljeni podaci </a> </span>
  	</header>';

	$menu = '<div style="width: 120px; float: center; margin-top: 0px; margin-left: 80px; position:absolute;"> <table> 
	<tr><td><div  class="stavke" id="s1">Obrazac</div></td></tr>
	<tr><td><div  class="stavke" id="s2">Tablica</div></td></tr>
	<tr><td><div  class="stavke" id="s3">Kod</div></td></tr> </table> </div>';
	
	$okvir = '<div class="prewrite" id="okv1" style="display: block;">';
	$pocetakforme = '<form method="POST" action="">';
	$krajforme = '<input type="submit" name="spremi" value="Unos" class="button"> </form>';
	$okvirz = '</div>';

	$okvir_tab = '<div class="prewrite" id="okv2">  <b>Prikaz podataka:</b> <br><br>';
	$pocetaktab = "<table class='gridtable' align='center'>
					<?php \$sql_q = 'select * from information_schema.columns where table_schema = \"mojipodaci\" and table_name = \"".$resl_2[0]."\" '; 
						\$reee = mysql_query(\$sql_q);
						while (\$reed = mysql_fetch_row(\$reee))
						{ echo '<th>'.\$reed[3] .'</th>'; } ?>";

	$vadiizbaze = "<?php if(!(\$res=mysql_query('SELECT * FROM ".$resl_2[0]." '))) 
					{ echo'Nema sadrzaja!'; }
					else { while (\$redak = mysql_fetch_row(\$res)) 
							{ echo '<tr>'; 
								for(\$ni = 0; \$ni <".(count($_POST["labele"])+1)."; \$ni++ ) 
									{ echo '<td>'.\$redak[\$ni].'</td>'; } echo '</tr>'; }  } ?>";
	$krajtab = '</table>';
	$okvirtabz = '</div>';

	$okvir_kod = '<div class="prewrite" id="okv3">';
	$pocetakkod = '<b>HTML kod obrasca:<b> <br><br> <textarea cols="50" rows="20">';
	$krajkod = '</textarea>';
	$okvirkodz = '</div>';


	

	$fh = fopen($mojadat, 'w') or die("can't open file");
        
	fwrite($fh, $check_1);
        for($o=0;$o<(count($_POST["labele"])-1);$o++)
        {
        fwrite($fh, "`".$_POST["labele"][$o]."`, ");
        }
        fwrite($fh, $check_2_zadnji);
        fwrite($fh, $check_3);
        for($o=0;$o<(count($_POST["labele"])-1);$o++)
        {
        fwrite($fh, "'\$_POST[".$_POST["stavke"][$o]."]', ");
        }
        fwrite($fh, $check_3_zadnji);
	fwrite($fh, $head);
	fwrite($fh, $header);
	fwrite($fh, $menu);
	fwrite($fh, $okvir);
	fwrite($fh, $pocetakforme);
	fwrite($fh, $div_html);
	fwrite($fh, $krajforme);
	fwrite($fh, $okvirz);
	fwrite($fh, $okvir_tab);
	fwrite($fh, $pocetaktab);
	fwrite($fh, $vadiizbaze);
	fwrite($fh, $krajtab);
	fwrite($fh, $okvirtabz);
	fwrite($fh, $okvir_kod);
	fwrite($fh, $pocetakkod);
	fwrite($fh, $div_html);
	fwrite($fh, $krajkod);
	fwrite($fh, $okvirkodz);
	fclose($fh);

	echo "Vaš obrazac je kreiran!" ;

	}
?>


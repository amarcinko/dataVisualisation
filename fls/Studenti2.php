<?php
                

  		mysql_connect("localhost", "root", "") or die(mysql_error());
  		mysql_select_db("mojipodaci") or die(mysql_error()); 
                
                if (isset($_POST["spremi"]))
                    { 
                    if( !mysql_query("INSERT INTO obr_83(`Ime`, `Prezime`, `Adresa`, `Datum`, `Boja`) VALUES ('$_POST[tb0]', '$_POST[tb1]', '$_POST[tb2]', '$_POST[date3]', '$_POST[clr4]' ) ") )
                        { echo mysql_error(); }
                        
                        echo '<p style=\'position:relative; float:right; color:red;\'>Podaci uneseni!</p>';
                        
                        }
          
                ?> <head>
 			<meta charset="utf-8">
			<link  rel="stylesheet" type="text/css" href="/form/style.css"></script>	 
			<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
			<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"> </script>
			<script src="http://d3js.org/d3.v3.min.js"></script>
			<script language="javascript" src="/form/fcnt.js"></script>
			</head><header><a href="/form/index.php" class="logo">
    <b style="color: #eee">Moji</b>
    <b style="color: rgba(24,149,215,1);">Podaci: </b></a>
	<span class="menu"> <a href="/form/create.php"> Dodaj obrazac </a> </span>
	<span class="menu"> <a href="/form/predef.php"> Dodaj graf </a> </span>
	<span class="menu"> <a href="/form/geoviz.php"> Geo podaci </a> </span>
	<span class="menu"> <a href="/form/sprem.php"> Spremljeni podaci </a> </span>
  	</header><div style="width: 120px; float: center; margin-top: 0px; margin-left: 80px; position:absolute;"> <table> 
	<tr><td><div  class="stavke" id="s1">Obrazac</div></td></tr>
	<tr><td><div  class="stavke" id="s2">Tablica</div></td></tr>
	<tr><td><div  class="stavke" id="s3">Kod</div></td></tr> </table> </div><div class="prewrite" id="okv1" style="display: block;"><form method="POST" action="">

<b><p id="naz">Studenti2</p></b>

Ime: <input type="text" class="textbox" name="tb0"><br>Prezime: <input type="text" class="textbox" name="tb1"><br>Adresa: <input type="text" class="textbox" name="tb2"><br>Datum: <input type="date" class="textbox" name="date3"><br>Boja: <input type="color" class="textbox" name="clr4"><br><input type="submit" name="spremi" value="Unos" class="button"> </form></div><div class="prewrite" id="okv2">  <b>Prikaz podataka:</b> <br><br><table class='gridtable' align='center'>
					<?php $sql_q = 'select * from information_schema.columns where table_schema = "mojipodaci" and table_name = "obr_83" '; 
						$reee = mysql_query($sql_q);
						while ($reed = mysql_fetch_row($reee))
						{ echo '<th>'.$reed[3] .'</th>'; } ?><?php if(!($res=mysql_query('SELECT * FROM obr_83 '))) 
					{ echo'Nema sadrzaja!'; }
					else { while ($redak = mysql_fetch_row($res)) 
							{ echo '<tr>'; 
								for($ni = 0; $ni <6; $ni++ ) 
									{ echo '<td>'.$redak[$ni].'</td>'; } echo '</tr>'; }  } ?></table></div><div class="prewrite" id="okv3"><b>HTML kod obrasca:<b> <br><br> <textarea cols="50" rows="20">

<b><p id="naz">Studenti2</p></b>

Ime: <input type="text" class="textbox" name="tb0"><br>Prezime: <input type="text" class="textbox" name="tb1"><br>Adresa: <input type="text" class="textbox" name="tb2"><br>Datum: <input type="date" class="textbox" name="date3"><br>Boja: <input type="color" class="textbox" name="clr4"><br></textarea></div>
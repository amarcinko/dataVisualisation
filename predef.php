<head>

<meta charset="utf-8">

<title> Unos podataka! </title>		

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

  <div style="float: left; position:relative; width: 40%; margin-top: 20px;">

	<b style="color: rgba(24,149,215,1);">Naziv grafa: </b> <input type="text" class="name" id="nazivgrafa"><br>

<div style="width: 120px; float: left; ">
<table>
	<tr>
		<td><div  class="stavke" id="img1" onclick="ocisti()">Stupci</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img2" onclick="ocisti()">Linijski</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img3" onclick="ocisti()">PieChart</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img4" onclick="ocisti()">DonutChart</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img5" onclick="ocisti()">Usporedni linijski</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img6" onclick="ocisti()">Usporedni stupci</div></td>
	</tr>
</table>
</div>

<div>

			<div class="odd" id="div1" style="display: block;"> 

				<b> Stupčasti graf<br> <br> </b>
				X os: <input type="text" class="textbox" name="g1_x"> <br>
				Y os: <input type="text" class="textbox" name="g1_y"> <br>
				Broj stupaca: <input type="number" class="numbox" name="br_toc_1"> <br>
				<img src="/form/img/g1.png" height="200" width="250">
				<input class="button dodaj" type="button" onclick="addTocke()" name="add" value="Dodaj" />
 
			</div>

			<div class="odd" id="div2"> 
				<b> Linijski graf <br> <br> </b>
				X os: <input type="text" class="textbox" name="g2_x"> <br>
				Y os: <input type="text" class="textbox" name="g2_y"> <br>
				Broj točaka: <input type="number" class="numbox" name="br_toc_2"> <br>
				<img src="/form/img/g2.jpg" height="200" width="250">
				<input class="button dodaj" type="button" onclick="addTocke()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div3"> 
				<b> PieChart: <br> <br> </b>
			   <input type="hidden" class="textbox" name="g3_x"> <br>
				<input type="hidden" class="textbox" name="g3_y"> <br>
				Broj unosa: <input type="number" class="numbox" name="br_toc_3"> <br>
				<img src="/form/img/g3.png" height="250" width="250">
				<input class="button dodaj" type="button" onclick="addTocke()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div4"> 
				<b> DonutChart: <br> </b>
			   <input type="hidden" class="textbox" name="g4_x"> <br>
				Središnja labela: <input type="text" class="textbox" name="g4_y"> <br>
				Broj unosa: <input type="number" class="numbox" name="br_toc_4"> <br>
				<img src="/form/img/g4.png" height="250" width="250">
				<input class="button dodaj" type="button" onclick="addTocke()" name="add" value="Dodaj" />
			</div>

			<div class="odd" id="div5"> 
				<b> Usporedni linijski graf: <br> <br> </b>
				<img src="/form/img/g5.png" height="250" width="250"><br>
				X os: <input type="text" class="textbox" name="g5_x"> <br>
				<input type="hidden" class="textbox" name="g5_y"> <br>
				Y os linija 1: <input type='text' class='textbox' name='naz_lin_0'> <br>
				Y os linija 2: <input type='text' class='textbox' name='naz_lin_1'> <br>
				Y os linija 3: <input type='text' class='textbox' name='naz_lin_2'> <br>
				Y os linija 4: <input type='text' class='textbox' name='naz_lin_3'> <br>
				Y os linija 5: <input type='text' class='textbox' name='naz_lin_4'> <br>

				Broj tocaka: <input type="number" class="numbox" name="br_toc_5"> <br>

				<input class="button dodaj" type="button" onclick="addTocke()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div6"> 
				<b> Usporedni stupčasti graf <br> <br> </b>
				<img src="/form/img/g6.png" height="250" width="250"><br>
				X os: <input type="text" class="textbox" name="g6_x"> <br>
				<input type="hidden" class="textbox" name="g5_y"> <br>
				Y os linija 1: <input type='text' class='textbox' name='naz_stu_0'> <br>
				Y os linija 2: <input type='text' class='textbox' name='naz_stu_1'> <br>
				Y os linija 3: <input type='text' class='textbox' name='naz_stu_2'> <br>
				Y os linija 4: <input type='text' class='textbox' name='naz_stu_3'> <br>
				Y os linija 5: <input type='text' class='textbox' name='naz_stu_4'> <br>

				Broj tocaka: <input type="number" class="numbox" name="br_toc_6"> <br>

				<input class="button dodaj" type="button" onclick="addTocke()" name="add" value="Dodaj" />

			</div>


</div> <!-- odd-ovi -->

<br/>

</div>   

<div class="prew">

<p style="text-align: left; margin-left: 30px; color: rgba(24,149,215,1);"><b> Unos točaka: </b> </p>

<div id="id">

<p id="naz"></p>
</b>

</div>

</div> <!-- prew -->

<div style="float: right; margin-right: 50px;">
<input class="button" type="button" value="Očisti" onclick="ocisti()" />
<input class="button create" type="button" id="crtaj" value="Graf !" />
</div>


</body>
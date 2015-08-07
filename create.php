<head>

 <meta charset="utf-8">

 <title> Novi obrazac! </title>
		
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

	<b style="color: rgba(24,149,215,1);">Naziv obrasca: </b> <input type="text" class="name" id="nazivforme"><br>

<div style="width: 120px; float: left; ">
<table>
	<tr>
		<td><div  class="stavke" id="img1">TextBox</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img2">Radio gumbi</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img3">CheckBoxes</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img4">Datum</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img5">TextArea</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img6">Drop Down</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img7">Datum i vrijeme</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img8">Boja</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img9">E-mail</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img10">Broj</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img11">Tel.</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img12">Raspon</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img13">Vrijeme</div></td>
	</tr>
	<tr>
		<td><div  class="stavke" id="img14">URL</div></td>
	</tr>
</table>
</div>

<div>

			<div class="odd" id="div1" style="display: block;"> 
				<b> Dodavanje stavke: TextBox <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_tb"> <br>
				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div2"> 
				<b> Dodavanje stavke: Radio gumb <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_rb"> <br>
				Količina: <input type="number" name="koliko_rb" min="1" max="20"> <br> <br>
				<div id="kol_rb"></div>

				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div3"> 
				<b> Dodavanje stavke: CheckBox <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_cb" disabled="true"> <br>
				Količina: <input type="number" name="koliko_cb" min="1" max="20" disabled="true"> <br> <br>
				<div id="kol_cb"></div>
				

				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div4"> 
				<b> Dodavanje stavke: Datum <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_date"> <br>
				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div5"> 
				<b> Dodavanje stavke: TextArea <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_textarea"> <br>
				Veličina: <input type="number" name="vel_red"  min="1" max="20"> (broj redaka) <br>
				<input type="number" name="vel_stup"  min="1" max="20">  (broj stupaca) <br>

				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div6"> 
				<b> Dodavanje stavke: DropDown <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_dd"> <br>
				Broj stavki: <input type="number" name="koliko_dd"> <br> <br>
				<div id="kol_dd"></div>

				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div7"> 
				<b> Dodavanje stavke: Datum i vrijeme <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_datetime"> <br>
				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div8"> 
				<b> Dodavanje stavke: Boja <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_clr"> <br>

				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div9"> 
				<b> Dodavanje stavke: E-mail <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_email"> <br>

				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div10"> 
				<b> Dodavanje stavke: Broj <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_nmb"> <br>

				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div11"> 
				<b> Dodavanje stavke: Broj telefona <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_tel"> <br>

				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div12"> 
				<b> Dodavanje stavke: Raspon <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_range"> <br>
				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div13"> 
				<b> Dodavanje stavke: Vrijeme <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_time"> <br>
				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>

			<div class="odd" id="div14"> 
				<b> Dodavanje stavke: URL <br> <br> </b>
				Labela: <input type="text" class="textbox" name="label_url"> <br>
				<input class="button dodaj" type="button" onclick="addInput()" name="add" value="Dodaj" />

			</div>


</div> <!-- odd-ovi -->

<br/>

</div>   

<div class="prew">

<p style="text-align: left; margin-left: 30px; color: rgba(24,149,215,1);"><b> Pregled obrasca: </b> </p>

<div id="id">

<b><p id="naz"></p></b>

</div> <!--id-->
</div> <!-- prew -->

<div style="float: right; margin-right: 50px;">
<input class="button" type="button" value="Očisti" onclick="ocisti()" />
<input class="button create" type="button" id="napravi" value="Napravi !" />
</div>



</body>
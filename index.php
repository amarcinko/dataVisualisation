<head>

 <meta charset="utf-8">

 <title> Moji podaci! </title>

		
<link  rel="stylesheet" type="text/css" href="style.css"></script>	 

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"> </script>
<script src="http://d3js.org/d3.v3.min.js"></script>

<script src="http://d3js.org/topojson.v1.min.js"></script>
<script src="http://datamaps.github.io/scripts/datamaps.world.min.js"></script>

<script language="javascript" src="fcnt.js"></script>
<script src="d3_animacije.js"> </script>




</head>

<body style="">

<?php include 'header.php';  ?>

  <br>
  <br>

<div id="ind_wrapper">
	<span class="ind_item" id="addform">
	</span>
	<span class="ind_item" id="addgraf">
	</span>
	<span class="ind_item" id="geoviz">
	</span>
	<span class="ind_item" id="saved">
	</span>
</div>

<div id="ind_button_wrapper">
	<input class="button_big" type="button" id="ind_forma" value="Dodaj obrazac !"  onclick="window.location='create.php'" />
	<input class="button_big red" type="button" id="ind_graf" value="Dodaj graf !" onclick="window.location='predef.php'"/>
	<input class="button_big green" type="button" id="ind_geo" value="Geo podaci !" onclick="window.location='geoviz.php'"/>
	<input class="button_big blue" type="button" id="ind_sprem" value="Spremljeni podaci !" onclick="window.location='sprem.php'"/>
</div>


</body>
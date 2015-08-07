<head>

<title> Geo podaci! </title>

 <meta charset="utf-8">

		
<link  rel="stylesheet" type="text/css" href="style.css"></script>	 

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"> </script>
<script src="http://d3js.org/d3.v3.min.js"></script>

<script src="http://d3js.org/topojson.v1.min.js"></script>
<script src="http://d3js.org/d3.geo.projection.v0.min.js"></script>
<script src="http://d3js.org/d3.geo.tile.v0.min.js"></script>
<script src="js/d3.twine.js"></script>


<script language="javascript" src="fcnt.js"></script>

</head>

<body>
<div id="dvLoading"></div>
<?php include 'header.php';  ?>

  <br>
  <br>
 <div id="geo_d_m_wrapper">
	<div id="geo_menu">
		<table style="width: 270px; text-align: center;">
			<tr>
				<td> <div class="stavke" onclick="unos_podataka(drz)">Unos podataka </div> </td>
			</tr>
			
		</table>

		<script>

							$.getJSON( "js/data/admin0_50m.json", function( data ) {

						  var x=data.objects.admin0.geometries;
						  	
						  	for(i = 0; i<241; i++)
						  	{
						  		$('#svedrzave').append("<option id='"+x[i].properties.iso_a2+"' name='"+x[i].properties.iso_a3+"' value='"+x[i].properties.iso_a2+"'>"+x[i].properties.admin+"</option>")
						  	}

							});
				</script>
			
				<select id="svedrzave">
			</select>
			<table style="width: 270px; text-align: center;">
			<tr>
				<td></td>
				<td> <div id="zoomout" class="stavke"> Zoom out </div></td>
			</tr>
			
		</table>

	</div>

	<div id="geo_data">
	
		<div id="geo_data_naslov"> </div>
		<div id="geo_data_sadrzaj"> </div>

	</div>

</div>

<div id="geo_con"></div>


</div>

</body>

<script language="javascript" src="geo.js"></script>

<script type="text/javascript">
var moj_graf = document.registerElement('moj-graf');
function newPopup(url, br) {
				window.open(
					url,'popUpWindow'+br,'height=600,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
			}

function checkReady() {
    var rd = $("#geo_con").load();
    if (rd == null) {
        setTimeout("checkReady()", 100);
    } else {
        $('#dvLoading').fadeOut(500);
    }
}

checkReady();

</script>
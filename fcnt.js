
//deklaracija globalnih varijabli
var i = 0;
niz = new Array();
lab = new Array();
var brojelemenata = 0;

function addInput() 
{
	if (odab == "tb")
	{
		if($("input[name=label_tb]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "tb"+i;
                niz[i] = name;
	lab[i] = $("input[name=label_tb]").val();
	$("#id").append(  lab[i] + ": <input type='text' class='textbox' name= '" + name +"' /><br />");
	$("input[name=label_tb]").val("");
	 i++;

	}

	else if (odab == "rb")
	{
		if($("input[name=label_rb]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "rb"+i;
                niz[i] = name;
		if($("input[name=koliko_rb]").val() == "")
		{
			alert("Unesite kolicinu!");
			return;
		}

		lab[i] = $("input[name=label_rb]").val();
		$("#id").append(  lab[i] + ": <br>")
	for (brojac = 0; brojac < $("input[name=koliko_rb]").val(); brojac++)	
		{
			lbl = $("#lbl_rb"+brojac).val();
			$("#id").append(  lbl + " <input type='radio' name='" + name +"' value='" + lbl +"' />  <br>")
		}
		i++;
	}

	else if (odab == "dd")
	{
		if($("input[name=label_dd]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "dd"+i;
                niz[i] = name;
		if($("input[name=koliko_dd]").val() == "")
		{
			alert("Unesite kolicinu!");
			return;
		}

		lab[i] = $("input[name=label_dd]").val();
		$("#id").append(  lab[i] + ": <br> <select name='" + name +"'> </select>");
	for (brojac = 0; brojac < $("input[name=koliko_dd]").val(); brojac++)	
		{
			lbl = $("#lbl_dd"+brojac).val();
			$("[name="+name+"]").append("<option value='" + lbl +"'>"+ lbl +"</option>")
		}
		$("#id").append("<br>")
		i++;
	}


	else if (odab == "cb")
	{
		if($("input[name=label_cb]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		if($("input[name=koliko_cb]").val() == "")
		{
			alert("Unesite kolicinu!");
			return;
		}

	lab[i] = $("input[name=label_cb]").val();
	niz[i] = "cb" + i;;

	$("#id").append(  lab[i] + ": <br>")
	for (brojac = 0; brojac < $("input[name=koliko_cb]").val(); brojac++)	
		{
			name = "cb" + brojac;
			lbl = $("#lbl_cb"+brojac).val();
			$("#id").append(  lbl + " <input type='checkbox'  name='" + name +"' value='" + lbl +"'  />  <br>")
		}

		i++;
	}
	
	else if (odab == "date")
	{
	if($("input[name=label_date]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "date"+i;
            
	niz[i] = name;
	lab[i] = $("input[name=label_date]").val();
	$("#id").append(  lab[i] + ": <input type='date' class='textbox' name= '" + name +"' /><br />");
	$("input[name=label_date]").val("");
	 i++;
	}

	else if (odab == "textarea")
	{
	
		if($("input[name=label_textarea]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "textarea"+i;
	niz[i] = name;
	red = $("input[name=vel_red]").val();
	stup = $("input[name=vel_stup]").val();

	lab[i] = $("input[name=label_textarea]").val();
	$("#id").append(  lab[i] + ": <br> <textarea name= '" + name +"'  rows='" + red +"'  cols='" + stup +"' /><br />");
	$("input[name=label_textarea]").val("");
        
	 i++;
	}

	else if (odab == "datetime")
	{
	if($("input[name=label_datetime]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "datetime"+i;
        
	niz[i] = name;
	lab[i] = $("input[name=label_datetime]").val();
	$("#id").append(  lab[i] + ": <input type='datetime' class='textbox' name= '" + name +"' /><br />");
	$("input[name=label_datetime]").val("");
	 i++;
	}

	else if (odab == "clr")
	{
	if($("input[name=label_clr]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "clr"+i;
        
	niz[i] = name;
	lab[i] = $("input[name=label_clr]").val();
	$("#id").append(  lab[i] + ": <input type='color' class='textbox' name= '" + name +"' /><br />");
	$("input[name=label_clr]").val("");
	 i++;
	}


	else if (odab == "email")
	{
	if($("input[name=label_email]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "email"+i;
        niz[i] = name;
	lab[i] = $("input[name=label_email]").val();
	$("#id").append(  lab[i] + ": <input type='email' class='textbox' name= '" + name +"' /><br />");
	$("input[name=label_email]").val("");
	 i++;
	}

	else if (odab == "nmb") //mozda text pa parsirati
	{
	if($("input[name=label_nmb]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "nmb"+i;
        niz[i] = name;
	lab[i] = $("input[name=label_nmb]").val();
	$("#id").append(  lab[i] + ": <input type='number' class='textbox' name= '" + name +"' /><br />");
	$("input[name=label_nmb]").val("");
	 i++;
	}

	else if (odab == "tel")
	{
	if($("input[name=label_tel]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "tel"+i;
        niz[i] = name;
	lab[i] = $("input[name=label_tel]").val();
	$("#id").append(  lab[i] + ": <input type='tel' class='textbox' name= '" + name +"' /><br />");
	$("input[name=label_tel]").val("");
	 i++;
	}

	else if (odab == "range")
	{
	if($("input[name=label_range]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "range"+i;
        niz[i] = name;
	lab[i] = $("input[name=label_range]").val();

	$("#id").append(  lab[i] + ": <input type='range' min='1' max='100' name= '" + name +"' /> <br />");
	$("input[name=label_range]").val("");
	 i++;
	}

	else if (odab == "time")
	{
	if($("input[name=label_time]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "time"+i;
        niz[i] = name;
	lab[i] = $("input[name=label_time]").val();
	$("#id").append(  lab[i] + ": <input type='time' class='textbox' name= '" + name +"' /><br /> ");
	$("input[name=label_time]").val("");
	 i++;
	}

	else if (odab == "url")
	{
	if($("input[name=label_url]").val() == "")
		{
			alert("Unesite labelu!");
			return;
		}

		name = "url"+i;
        niz[i] = name;
	lab[i] = $("input[name=label_url]").val();
	$("#id").append(  lab[i] + ": <input type='url' class='textbox' name= '" + name +"' /><br /> ");
	$("input[name=label_url]").val("");
	 i++;
	}


} 

var odab = "tb";

$(document).ready(function(){

			 $("#ind_forma").fadeIn();
			 $("#ind_graf").fadeIn();
			 $("#ind_sprem").fadeIn();
			 $("#ind_geo").fadeIn();
			

		$( "#nazivforme" ).change(function() {
			 $("#naz").empty();
			  $("#naz").append( $( "#nazivforme" ).val() )
			});


		$("#img1").on('click', function() {
			 $("#div1").fadeIn();
			$("#div2").hide();
		   $("#div3").hide();
		   $("#div4").hide();
		   $("#div5").hide();
		   $("#div6").hide();
		   $("#div7").hide();
		   $("#div8").hide();
		   $("#div9").hide();
		   $("#div10").hide();
		   $("#div11").hide();
		   $("#div12").hide();
		   $("#div13").hide();
		   $("#div14").hide();
		   odab = "tb";

		});

		$("#img2").on('click', function() {
			 $("#div1").hide();
			$("#div2").fadeIn();
		   $("#div3").hide();
		   $("#div4").hide();
		   $("#div5").hide();
		   $("#div6").hide();
		   $("#div7").hide();
		   $("#div8").hide();
		   $("#div9").hide();
		   $("#div10").hide();
		   $("#div11").hide();
		   $("#div12").hide();
		   $("#div13").hide();
		   $("#div14").hide();
		   odab = "rb";

		});$("#img3").on('click', function() {
			 $("#div1").hide();
			$("#div2").hide();
		   $("#div3").fadeIn();
		   $("#div4").hide();
		   $("#div5").hide();
		   $("#div6").hide();
		   $("#div7").hide();
		   $("#div8").hide();
		   $("#div9").hide();
		   $("#div10").hide();
		   $("#div11").hide();
		   $("#div12").hide();
		   $("#div13").hide();
		   $("#div14").hide();
		   odab = "cb";

		});$("#img4").on('click', function() {
			 $("#div1").hide();
			$("#div2").hide();
		   $("#div3").hide();
		   $("#div4").fadeIn();
		   $("#div5").hide();
		   $("#div6").hide();
		   $("#div7").hide();
		   $("#div8").hide();
		   $("#div9").hide();
		   $("#div10").hide();
		   $("#div11").hide();
		   $("#div12").hide();
		   $("#div13").hide();
		   $("#div14").hide();
		   odab = "date";

		});$("#img5").on('click', function() {
			 $("#div1").hide();
			$("#div2").hide();
		   $("#div3").hide();
		   $("#div4").hide();
		   $("#div5").fadeIn();
		   $("#div6").hide();
		   $("#div7").hide();
		   $("#div8").hide();
		   $("#div9").hide();
		   $("#div10").hide();
		   $("#div11").hide();
		   $("#div12").hide();
		   $("#div13").hide();
		   $("#div14").hide();
		   odab = "textarea";

		});$("#img6").on('click', function() {
			 $("#div1").hide();
			$("#div2").hide();
		   $("#div3").hide();
		   $("#div4").hide();
		   $("#div5").hide();
		   $("#div6").fadeIn();
		   $("#div7").hide();
		   $("#div8").hide();
		   $("#div9").hide();
		   $("#div10").hide();
		   $("#div11").hide();
		   $("#div12").hide();
		   $("#div13").hide();
		   $("#div14").hide();
		   odab = "dd";

		});$("#img7").on('click', function() {
			 $("#div1").hide();
			$("#div2").hide();
		   $("#div3").hide();
		   $("#div4").hide();
		   $("#div5").hide();
		   $("#div6").hide();
		   $("#div7").fadeIn();
		   $("#div8").hide();
		   $("#div9").hide();
		   $("#div10").hide();
		   $("#div11").hide();
		   $("#div12").hide();
		   $("#div13").hide();
		   $("#div14").hide();
		   odab = "datetime";

		});$("#img8").on('click', function() {
			 $("#div1").hide();
			$("#div2").hide();
		   $("#div3").hide();
		   $("#div4").hide();
		   $("#div5").hide();
		   $("#div6").hide();
		   $("#div7").hide();
		   $("#div8").fadeIn();
		   $("#div9").hide();
		   $("#div10").hide();
		   $("#div11").hide();
		   $("#div12").hide();
		   $("#div13").hide();
		   $("#div14").hide();
		   odab = "clr";

		});$("#img9").on('click', function() {
			 $("#div1").hide();
			$("#div2").hide();
		   $("#div3").hide();
		   $("#div4").hide();
		   $("#div5").hide();
		   $("#div6").hide();
		   $("#div7").hide();
		   $("#div8").hide();
		   $("#div9").fadeIn();
		   $("#div10").hide();
		   $("#div11").hide();
		   $("#div12").hide();
		   $("#div13").hide();
		   $("#div14").hide();
		   odab = "email";

		});$("#img10").on('click', function() {
			 $("#div1").hide();
			$("#div2").hide();
		   $("#div3").hide();
		   $("#div4").hide();
		   $("#div5").hide();
		   $("#div6").hide();
		   $("#div7").hide();
		   $("#div8").hide();
		   $("#div9").hide();
		   $("#div10").fadeIn();
		   $("#div11").hide();
		   $("#div12").hide();
		   $("#div13").hide();
		   $("#div14").hide();
		   odab = "nmb";

		});$("#img11").on('click', function() {
			 $("#div1").hide();
			$("#div2").hide();
		   $("#div3").hide();
		   $("#div4").hide();
		   $("#div5").hide();
		   $("#div6").hide();
		   $("#div7").hide();
		   $("#div8").hide();
		   $("#div9").hide();
		   $("#div10").hide();
		   $("#div11").fadeIn();
		   $("#div12").hide();
		   $("#div13").hide();
		   $("#div14").hide();
		   odab = "tel";

		});$("#img12").on('click', function() {
			 $("#div1").hide();
			$("#div2").hide();
		   $("#div3").hide();
		   $("#div4").hide();
		   $("#div5").hide();
		   $("#div6").hide();
		   $("#div7").hide();
		   $("#div8").hide();
		   $("#div9").hide();
		   $("#div10").hide();
		   $("#div11").hide();
		   $("#div12").fadeIn();
		   $("#div13").hide();
		   $("#div14").hide();
		   odab = "range";

		});$("#img13").on('click', function() {
			 $("#div1").hide();
			$("#div2").hide();
		   $("#div3").hide();
		   $("#div4").hide();
		   $("#div5").hide();
		   $("#div6").hide();
		   $("#div7").hide();
		   $("#div8").hide();
		   $("#div9").hide();
		   $("#div10").hide();
		   $("#div11").hide();
		   $("#div12").hide();
		   $("#div13").fadeIn();
		   $("#div14").hide();
		   odab = "time";

		});$("#img14").on('click', function() {
			 $("#div1").hide();
			$("#div2").hide();
		   $("#div3").hide();
		   $("#div4").hide();
		   $("#div5").hide();
		   $("#div6").hide();
		   $("#div7").hide();
		   $("#div8").hide();
		   $("#div9").hide();
		   $("#div10").hide();
		   $("#div11").hide();
		   $("#div12").hide();
		   $("#div13").hide();
		   $("#div14").fadeIn();
		   odab = "url";

		});


		$('input[name=koliko_rb]').on('input', function() {
			$('#kol_rb').empty();
			for(x=0;x<$('input[name=koliko_rb]').val();x++)
			{
				$('#kol_rb').append("Labela " + (x+1) + "<input type='text' class='textbox' id='lbl_rb"+ x +"' /><br /> ")
			}
		});

		$('input[name=koliko_dd]').on('input', function() {
			$('#kol_dd').empty();
			for(x=0;x<$('input[name=koliko_dd]').val();x++)
			{
				$('#kol_dd').append("Stavka " + (x+1) + "<input type='text' class='textbox' id='lbl_dd"+ x +"' /><br /> ")
			}
		});

		$('input[name=koliko_cb]').on('input', function() {
			$('#kol_cb').empty();
			for(x=0;x<$('input[name=koliko_cb]').val();x++)
			{
				$('#kol_cb').append("Labela " + (x+1) + "<input type='text' class='textbox'  id='lbl_cb"+ x +"' /><br /> ")
			}
		});	


		$("#napravi").on('click',function(){

							 var dat = "fls/" + $('#nazivforme').val() + ".php";
                                                         var naz = $('#nazivforme').val();
							 var htmlData = $('#id').html();

							 if( dat == 'fls/.php' ||  niz[0]== '')
							{
								alert("Unesite potrebne podatke!");
								return;
							}
							$("#napravi").val("Radim!");
									$.post('write.php', {'html': htmlData, 'dat' : dat, 'naz' : naz, 'labele': lab, 'stavke' : niz },
                                  function(response){
                                  	var nzz = dat.split(' ').join('_');
									  alert(response);
                             		console.log(niz);
									 window.location.replace(nzz);
									});

							});		
//predef--------------------------------------------------------------
		
		$( "#nazivgrafa" ).change(function() {
				 $("#naz").empty();
			  $("#naz").append( $( "#nazivgrafa" ).val() )
			});

		

		$("#crtaj").on('click',function(){
							
							
							datax = new Array();
							datay = new Array();
							y_labele = new Array();

							if (odab == 'tb') {grf = 1};
									if (odab == 'rb') {grf = 2};
									if (odab == 'cb') {grf = 3};
									if (odab == 'date') {grf = 4};
									if (odab == 'textarea') {grf = 5};
									if (odab == 'dd') {grf = 6};

							 var x_lab = $('input[name=g'+grf+'_x]').val();
							  var y_lab = $('input[name=g'+grf+'_y]').val();
							 
							 var naziv = $('#nazivgrafa').val();
							 var prov = $('input[name=tocx0]').val();
							
							if( naziv == '' || prov == '')
							{
								alert("Unesite potrebne podatke!");
								return;
							}

							$("#crtaj").val("Radim!")

							if(grf == 5 || grf == 6)
							{
								if(grf == 5)
								{
									for(var x = 0; x < 5; x++)
									{ 
										y_labele[x] = $('input[name="naz_lin_'+x+'"]').val();
									}
								}
								if(grf == 6)
								{
									for(var x = 0; x < 5; x++)
									{ 
										y_labele[x] = $('input[name="naz_stu_'+x+'"]').val();
									}
								}

								console.log("labs:"+y_labele);

								kreni = 0;
								for(var lin = 0; lin < 5; lin++)
									{
										for(var k = kreni; k < 5*brojelemenata; k++)
									 	{  datax[k] = $('input[name=tocx'+  k  +']').val(); 
									 		 datay[k] =$('input[name=tocy'+ k +']').val(); 
									 		 console.log("brojelemenata:"+ brojelemenata +"x: " + datax[k] + " y:"+ datay[k] );

											}
											
											kreni = k;
											console.log("kreni"+kreni)
										}

										$.post('grafovi/graf'+ grf +'_db.php', {'naziv': naziv, 'x_lab' : x_lab, 'y_labele' : y_labele, 'datax' : datax, 'datay' : datay },
											 function(response){
											   var nzz = naziv.split(' ').join('_');
											   alert(response);
											   window.location.replace("grafovi/graf"+grf+".php?tab=" + nzz);
											 });
											
							}

							else {

									 for(var k = 0; k < brojelemenata; k++)
									 	{  datax[k] = $('input[name=tocx'+  k  +']').val(); 
									 		 datay[k] =$('input[name=tocy'+ k +']').val(); 
									 		 console.log("brojelemenata:"+ brojelemenata +"x: " + datax[k] + " y:"+ datay[k] );
											}

											 $.post('grafovi/graf'+ grf +'_db.php', {'naziv': naziv, 'x_lab' : x_lab, 'y_lab' : y_lab, 'datax' : datax, 'datay' : datay },
											 function(response){
											 var nzz = naziv.split(' ').join('_');
											   alert(response);
											   window.location.replace("grafovi/graf"+grf+".php?tab=" + nzz);
											 });
									}

					});	
	
	


	$("#s1").on('click', function() {
			 $("#okv1").fadeIn();
			$("#okv2").hide();
		   $("#okv3").hide();
		});

	$("#s2").on('click', function() {
			 $("#okv1").hide();
			$("#okv2").fadeIn();
		   $("#okv3").hide();
		});

	$("#s3").on('click', function() {
			 $("#okv1").hide();
			$("#okv2").hide();
		   $("#okv3").fadeIn();
		});

	}); /*kraj doc ready */



function addTocke() 
{
	console.log(odab)

	if (odab == 'tb') {grf = 1};
	if (odab == 'rb') {grf = 2};
	if (odab == 'cb') {grf = 3};
	if (odab == 'date') {grf = 4};
	if (odab == 'textarea') {grf = 5};
	if (odab == 'dd') {grf = 6};
	if (odab == 'email') {grf = 7};

	

	brojac_od = brojelemenata
	brojelemenata = Number($("input[name=br_toc_" + grf + "]").val()) + brojelemenata

	console.log($("input[name=br_toc_" + grf + "]").val())

	if (odab == "tb")
	{	
		
		for (brojac = brojac_od; brojac < brojelemenata; brojac++)	
		{
			namex = "tocx"+brojac;
			namey = "tocy"+brojac;
			$("#id").append(  "<b>Stupac " + (brojac+1) +":&nbsp;&nbsp;&nbsp;&nbsp; </b> labela: <input type='text' name='" + namex +"' size='5' /> ")
			$("#id").append(  "vrijednost: <input type='text' name='" + namey +"' size='5' />  <br>")
		}
	i++

	}

	else if (odab == "rb")
	{

		for (brojac = brojac_od; brojac < brojelemenata; brojac++)	
		{
			namex = "tocx"+brojac;
			namey = "tocy"+brojac;
			$("#id").append(  "x os: <input type='text' name='" + namex +"' size='5' /> ")
			$("#id").append(  "y os: <input type='text' name='" + namey +"' size='5' />  <br>")
		}
	i++
	}

	else if (odab == "cb")
	{
		for (brojac = brojac_od; brojac < brojelemenata; brojac++)	
		{
			namex = "tocx"+brojac;
			namey = "tocy"+brojac;
			$("#id").append(  "Ime labele: <input type='text' name='" + namex +"' size='5' /> ")
			$("#id").append(  "Vrijednost: <input type='text' name='" + namey +"' size='5' />  <br>")
		}
	i++
	}
	
	else if (odab == "date")
	{
	for (brojac = brojac_od; brojac < brojelemenata; brojac++)	
		{
			namex = "tocx"+brojac;
			namey = "tocy"+brojac;
			$("#id").append(  "Ime labele: <input type='text' name='" + namex +"' size='5' /> ")
			$("#id").append(  "Vrijednost: <input type='text' name='" + namey +"' size='5' />  <br>")
		}
	i++
	}

	else if (odab == "textarea")
	{
		nbr = 0;

	for (brojac = 0; brojac < 5; brojac++)	
		{
			
			$("#id").append("<b>"+$("input[name=naz_lin_"+brojac+"]").val()+"</b> <br> <br>")

			console.log(brojelemenata);

			for (brojac_e = 0; brojac_e < brojelemenata; brojac_e++)	
				{
					namex = "tocx"+nbr;
					namey = "tocy"+nbr;
					$("#id").append(  "x os: <input type='text' name='" + namex +"' size='5' /> ")
					$("#id").append(  "y os: <input type='text' name='" + namey +"' size='5' />  <br>")
					nbr++
				}
				$("#id").append("<hr>")	
		}

		
	i++
	}


	else if (odab == "dd")
	{
		nbr = 0;

	for (brojac = 0; brojac < 5; brojac++)	
		{
			
			$("#id").append("<b>"+$("input[name=naz_stu_"+brojac+"]").val()+"</b> <br> <br>")

			console.log(brojelemenata);

			for (brojac_e = 0; brojac_e < brojelemenata; brojac_e++)	
				{
					namex = "tocx"+nbr;
					namey = "tocy"+nbr;
					$("#id").append(  "x os: <input type='text' name='" + namex +"' size='5' /> ")
					$("#id").append(  "y os: <input type='text' name='" + namey +"' size='5' />  <br>")
					nbr++
				}
				$("#id").append("<hr>")	
		}

		
	i++
	}
}

console.log("tu");


function ocisti ()
{

	$('#id').empty();
	niz = [];
	lab = [];
	brojelemenata = 0;
	i = 0;

}





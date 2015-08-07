<?php 

if(!isset($_POST['naziv']))
{
	die("Nije naziv postavljen!");
}

mysql_connect("localhost", "root", "") or die(mysql_error());
mysql_select_db("mojipodaci") or die(mysql_error());

$naz = str_replace(' ', '_', $_POST['naziv']);

if(!mysql_query("INSERT INTO meta (naziv, tip, puni_naziv) VALUES ('$naz', 'graf6','$_POST[naziv]')"))
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

if(!mysql_query("UPDATE meta SET tab='graf6_".$resl[0]."' WHERE id='".$resl[0]."' "))
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

 if(!mysql_query("CREATE TABLE ".$resl_2[0]." (id INT NOT NULL AUTO_INCREMENT,PRIMARY KEY(id), xos VARCHAR(20),yos VARCHAR(20))"))
{
echo mysql_error();
}

$kreni = 0;
$do = (count($_POST['datax'])/5 );
$pomak = $do;

for ($ibr=0; $ibr < 5; $ibr++) { 
				$label = $_POST['y_labele'][$ibr];
				$xevi = $_POST['x_lab'].$ibr;
				if ($xevi == "")
							{$xevi = "xos";}
				if(!mysql_query( "INSERT INTO ".$resl_2[0]."(xos, yos) VALUES ('$xevi', '$label')" ) )
				{
			echo mysql_error();
				}

					for ($k=$kreni; $k<$do; $k++)
					 {
							 	$podx = $_POST['datax'][$k];
							 	if ($podx == "")
							 		{$podx = 0;}
							 	$pody = $_POST['datay'][$k];
							 	if ($pody == "")
							 		{$pody = 0;}
							if( !mysql_query("INSERT INTO ".$resl_2[0]." (xos, yos) VALUES ('$podx', '$pody')" ) )
								{ echo mysql_error(); }
					 }
	
 $kreni = $k;
$do += $pomak;
}
echo "Podaci uneseni!"

?>
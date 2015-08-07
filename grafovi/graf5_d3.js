$(document).ready(function(){


console.log(podaci_x)
console.log(podaci_y)

 data_1x = new Array();
 data_2x = new Array();
 data_3x = [];
 data_4x = [];
 data_5x = [];


 data_1y = new Array();
 data_2y = new Array();
 data_3y = [];
 data_4y = [];
 data_5y = [];

var br_do = podaci_x.length/5;
	
	for (d_br = 0; d_br <  1*br_do; d_br++)
	{
		data_1x[d_br] = podaci_x[d_br];
		data_1y[d_br] = podaci_y[d_br];
	}

	for (d_br = br_do; d_br <  2*br_do; d_br++)
	{
		data_2x[d_br-br_do] = podaci_x[d_br];
		data_2y[d_br-br_do] = podaci_y[d_br];
	}
	for (d_br = 2*br_do; d_br <  3*br_do; d_br++)
	{
		data_3x[d_br-2*br_do] = podaci_x[d_br];
		data_3y[d_br-2*br_do] = podaci_y[d_br];
	}

	for (d_br = 3*br_do; d_br <  4*br_do; d_br++)
	{
		data_4x[d_br-3*br_do] = podaci_x[d_br];
		data_4y[d_br-3*br_do] = podaci_y[d_br];
	}

	for (d_br = 4*br_do; d_br <  5*br_do; d_br++)
	{
		data_5x[d_br-4*br_do] = podaci_x[d_br];
		data_5y[d_br-4*br_do] = podaci_y[d_br];
	}


var x_1 = data_1x[0]
var y_1 = data_1y[0]
var x_2 = data_2x[0]
var y_2 = data_2y[0]
var x_3 = data_3x[0]
var y_3 = data_3y[0]
var x_4 = data_4x[0]
var y_4 = data_4y[0]
var x_5 = data_5x[0]
var y_5 = data_5y[0]


var obj = {};
brc = 0;
if (data_1y[0] != "") {obj[y_1] = x_1; brc++}
if (data_2y[0] != "") {obj[y_2] = x_2; brc++}
if (data_3y[0] != "") {obj[y_3] = x_3; brc++}
if (data_4y[0] != "") {obj[y_4] = x_4; brc++}
if (data_5y[0] != "") {obj[y_5] = x_5; brc++}


if (brc == 1) {stupci = [data_1x, data_1y]}
if (brc == 2) {stupci = [data_1x, data_1y, data_2x, data_2y]}
if (brc == 3) {stupci = [data_1x, data_1y, data_2x, data_2y, data_3x, data_3y]}
if (brc == 4) {stupci = [data_1x, data_1y, data_2x, data_2y, data_3x, data_3y, data_4x, data_4y]}
if (brc == 5) {stupci = [data_1x, data_1y, data_2x, data_2y, data_3x, data_3y, data_4x, data_4y, data_5x, data_5y]}
		


var chart = c3.generate({
	bindto: '#graf',
    data: {
        xs:  obj,
        columns: stupci,
        
    }
});


});


$(document).ready(function(){

var data = [];
	
	for (d_br = 1; d_br <  podaci_x.length; d_br++)
	{
	
		data[d_br-1] = [podaci_x[d_br], podaci_y[d_br]];
	}
	
console.log(data)
	
	var chart = c3.generate({
	    bindto: '#graf',
    data: {
        // iris data from R
		
        columns:   data
		
		,
		
		
        type : 'pie',
    },
    pie: {
        onclick: function (d, i) { console.log(d, i); },
        onmouseover: function (d, i) { console.log(d, i); },
        onmouseout: function (d, i) { console.log(d, i); }
    },
	
});
});
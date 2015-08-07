$(document).ready(function(){
		
	//Standardno definiranje podataka - primjer ulov ribe po godinama
	//Dvodimenzionalno polje u kojem svaki element ima dva atributa

	var data_x = [];
	
	for (d_br = 1; d_br <  podaci_x.length; d_br++)
	{
		data_x.push(podaci_x[d_br]);
	}
	
	var chart = c3.generate({
		bindto: '#graf',
    data: {
        columns: [podaci_y],
        type: 'bar',
        color: function (color, d) {
            // d will be 'id' when called for legends
            return d.id && d.id === podaci_y[0] ? 'rgb(252,125,125)' : color;
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: data_x,
            label: {
          text: podaci_x[0],
          position: 'outer-middle'
        }
        },

           y: {
        label: {
          text: podaci_y[0],
          position: 'outer-middle'
        }
      },
    }
});

});

$(document).ready(function(){
console.log(podaci_x)
console.log(podaci_y)
		
	var chart = c3.generate({
    bindto: '#graf',
    data: {
    	x: podaci_x[0],
        columns: [
            podaci_x ,
            podaci_y ,
      ],
      
    },
    axis: {
      y: {
        label: {
          text: podaci_y[0],
          position: 'outer-middle'
        }
      },
      x: {
        label: {
          text: podaci_x[0],
          position: 'outer-middle'
        }
      },
    }
});


});

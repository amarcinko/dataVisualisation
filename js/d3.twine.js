

// Decalre namespace.

var drz = "";
var zmd=0;

function prikaz_podataka(drzava, drz)
{

	$('#geo_data_naslov').html(drzava);

		$.post('api.php', {'drz': drz,},
         		function(data) {
                    $('#geo_data_sadrzaj').html("<p>"+data+"</p>");
                    dodaj_pop();
                }

				);
function dodaj_pop()
		{
			for(br = 1; br < 50; br++)
			{
			var naz = $("#"+br).html();
			if (naz_dugi = naz.replace(/_/g, ' ') ) {var br_pu = br} 
			var broj = $("#"+br).attr("name");
			var novo = "<a href=\"JavaScript:newPopup('http://projekti.loc/form/grafovi/graf"+broj+"_popup.php?tab="+naz+"',"+br_pu+");\">"+naz_dugi+"</a>"
			$("#"+br).html(novo);
			}
		}
}

	

function unos_podataka(drz)
{
	if (drz != "") { window.location = "geoviz_unos.php?drz="+drz; }
	else { alert("Odaberite drzavu"); }
}

d3.twine = {};

d3.twine.map = function (id){
	var //dispatch = d3.dispatch("loading","ready"),
		svg,g,
		width = 1000,
		height = window.innerHeight,
		duration = 3000,
		projection = d3.geo.mercator(),
		path = d3.geo.path(),
		scale = 150,
		center = [0,0],
		region = "world",
		regionSelected = false,
		tooltip = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0),
		tooltipOn = false,
		clickableOn = false,
		layers = {"admin":"js/data/admin0_50m.json", "gradovi": "js/data/major-cities.json"},
		layerLoaded = false;

		// Bind svg to DOM using d3 selection.
		exports(d3.select(id));

	function exports(selection){
		//create SVG element, if it does not exist.
		if(!svg){
			svg = selection.append("svg");
			//Set base svg attributes
			svg.attr("xmlns", "http://www.w3.org/2000/svg")
				//xlink tag for image href
				.attr("xlink", "http://www.w3.org/1999/xlink")
				//SVG border
				.style("border", "1px solid #DEDEDE");

			// Include a group for map control
			g = svg.append("g");
		}

		// Update width/height with transition.
		svg.transition().duration(duration).attr({width: width, height: height});
		// uUpdate viewbox & transform.
		svg.attr("viewBox", "0 0 "+width+" "+height+"");
		svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		// Set the projection up using our scale, center, and size parameters.
		projection = d3.geo.mercator()
			.scale(scale)
			.center(center)
			.translate([width/2, height/2]);

		// Set the path up using our projection definied above.
		path = d3.geo.path()
			.projection(projection);
	};



	exports.width = function(_) {
		if (!arguments.length) return width;
		width = _;
		return exports;
	};

	exports.height = function(_) {
		if (!arguments.length) return height;
		height = _;
		return exports;
	};

	exports.duration = function(_) {
		if (!arguments.length) return duration;
		duration = _;
		return exports;
	};	

	exports.projection = function(_) {
		if (!arguments.length) return projection;
		switch(_){
			// Todo - implement smooth path transform
			case "albers":
				projection = d3.geo.albers();
				break;
			case "albersUsa":
				projection = d3.geo.albersUsa();
				break;
			case "azimuthalEqualArea":
				projection = d3.geo.azimuthalEqualArea();
				break;	
			case "orthographic":
				projection = d3.geo.orthographic();
				break;
			default:
				projection = d3.geo.mercator();
		}
		return exports;
	};	

	exports.scale = function(_) {
		if (!arguments.length) return scale;
		scale = _;
		return exports;
	};

	exports.center = function(_) {
		if (!arguments.length) return center;
		center = _;
		return exports;
	};

	exports.region = function(_) {
		if (!arguments.length) return region;
		region = _;
		switch(_){
			case "world":
				scale = 250;
				center = [0,0];
				break;
			case "africa":
				scale = 500;
				center = [25,0];
				break;
			case "americas":
				scale = 500;
				center = [-65,-20];
				break;				
			case "asia":
				scale = 390;
				center = [100,40];
				break;
			case "europe":
				scale = 500;
				center = [15,50];
				break;
			case "north america":
				scale = 400;
				center = [-90,45];
				break;				
			case "oceana":
				scale = 390;
				center = [100,40];
				break;
			default:
				// Zoom to ISO once data is loaded.
				if(layerLoaded) {
					exports.zoom(svg.selectAll('#admin-'+region));
				}
		}

		return exports;
	};

	exports.zoom = function(_selection) {
		// Remove selected CSS.
		svg.select(".selected").classed("selected",false);

		// If no country selected
		if (regionSelected != region){
			regionSelected = region;
			// Update class to selected
			_selection.classed("selected",true);

			// Get bounds and update translate/scale for selected country
			var b = path.bounds(_selection.property("__data__"));
			var s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
			var t = -(b[1][0] + b[0][0]) / 2 + "," + -(b[1][1] + b[0][1]) / 2;
			
			// Transform for zoom
			g.transition().duration(duration).attr("transform",
			"translate(" + projection.translate() + ")"
				+ "scale(" + s + ")"
				+ "translate(" + t + ")");			
			
		}else{
			drz = "";
			regionSelected = false;
			// Transform for zoom back to current scale/translation
		    var x = width / 2;
		    var y = height / 2;
		    var k = 1;
			g.transition().duration(duration).attr("transform", 
					"translate(" + width / 2 + "," + height / 2 + ")"
					+ "scale(" + k + ")"
					+ "translate(" + -x + "," + -y + ")");
		}
	};	

	exports.tooltipOn = function(_) {
		if (!arguments.length) return tooltipOn;
		tooltipOn = _;
		return exports;
	};

	exports.clickableOn = function(_) {
		if (!arguments.length) return clickableOn;
		clickableOn = _;
		return exports;
	};	

	// Create a method to load the geojson file, and execute a custom callback on response.
	exports.addLayer = function(_layer) {
		// Load json file using d3.json.
		d3.json(layers[_layer], function (_err, _result) {

			// Todo - udpate to [d3.dispatch](https://github.com/mbostock/d3/wiki/Internals#wiki-d3_dispatch)
			dataLoaded = 1;
			// Execute the callback, assign the data to the context.
			exports.drawLayer(_layer,_result);
			// Call region to zoom map on load.
			exports.region(region);
		});
		return exports;
	};

	// AddLayer callback
	exports.drawLayer = function(_layer,_data) {
		// Add admin layer with individual id and path
		g.selectAll("#"+_layer)
			.data(topojson.feature(_data, _data.objects.admin0).features)
		  .enter().append("path")
		  	// Assign id
			.attr("id", function(d) { return _layer+"-"+d.properties.iso_a2; })
		    // Assign class
		    .attr("class", function(d) { return _layer; })			
			.attr("d", path)
	        .on("mouseover", function(d) {
	        	// Tooltip active
	        	if(tooltipOn){
	        		// Set active country & apply css
	        		var active = g.selectAll("#admin-"+d.properties.iso_a2).classed("active",true);
	        		// Update div opacity and text
		            tooltip.transition()
		                .duration(200)      
		                .text(d.properties.admin)
		                .style("opacity", 1);
	            }
	        })
	        .on("mousemove", function() {
	        	// Update position
	        	if(tooltip){
					tooltip.style("left", (d3.event.pageX+5) + "px")     
						.style("top", (d3.event.pageY-42) + "px");  
				}
	        })
	        .on("mouseout", function() {
	        	// Tooltip fade out, remove css
        		g.selectAll(".active").classed("active",false);

        		// Set opacity to 0
	            tooltip.transition()        
	                .duration(500)      
	                .style("opacity", 0);
	        })
	        .on('click', function(d){
	        	console.log(zmd)
	        	if(zmd == 1)
	        	{
		        	$("#svedrzave").fadeIn();
		        	$("#zoomout").hide();
		        	$('#geo_data_naslov').html("");
    				$('#geo_data_sadrzaj').html("");
		        	exports.zoom(svg.selectAll('#admin-'+region));
		        	zmd = 0;
	        	}
	        	else
	        	{
	        	// Call the d3.twine zoom function
		        	if(clickableOn){
		        		$("#svedrzave").hide();
		        		$("#zoomout").fadeIn();
		        		exports.zoom(svg.selectAll('#admin-'+d.properties.iso_a2));
		        		prikaz_podataka(d.properties.admin, d.properties.iso_a3);
		        		drz = d.properties.iso_a3;
		        		zmd = 1;
		        	}
	        	}
	        	
	        
	        });
	};

	// Add Twine indicator
	exports.addIndicator = function(_namespace,_ind,_locid,_tLevel,_gLevel,_sDate,_eDate) {

		return exports;
	};	

	exports.update = function() {
		// Call self to update
		exports();
	};
	
	$(document).ready(function() {
	$("#zoomout").hide();

	$('#geo_data_naslov').html("");
    $('#geo_data_sadrzaj').html("");

	$("#svedrzave").on('change', function() {
	$("#zoomout").hide();
	$('#geo_data_naslov').html("");
    $('#geo_data_sadrzaj').html("");
	$("#svedrzave").fadeIn();
	if(clickableOn)
	{
	$("#zoomout").fadeIn();
	$("#svedrzave").hide();

	a = $("#svedrzave").val();
	b = $("#"+a).attr('name');
	c = $("#"+a).html();

			 prikaz_podataka(c, b);
			 drz = b;
			 exports.zoom(svg.selectAll('#admin-' + $("#svedrzave").val() ));
			 zmd = 1;
	 }
	 
	});

	$("#zoomout").on('click', function() {
		$("#zoomout").hide();
		$('#geo_data_naslov').html("");
   		 $('#geo_data_sadrzaj').html("");
		$("#svedrzave").fadeIn();
		exports.zoom(svg.selectAll('#admin-'+region));
		drz = "";
		zmd = 0;
	 	clickableOn = true;
	});

	});

	return exports;

};


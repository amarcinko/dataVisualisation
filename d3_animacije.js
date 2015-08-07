
$(document).ready(function(){

width = 310;
height = 250;

var svg = d3.select("#addform").append("svg")
    .attr("width", width)
    .attr("height", height);

  svg.append("rect")
    .attr("x", 5)
    .attr("y", 20)
    .attr("rx",5)
    .attr("width",280)
    .attr("height",20)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("width",280*1.1)
                        .attr("height",20*1.2)
                        .duration(200);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("width",280)
                        .attr("height",20)
                        .duration(200);
      })
    .attr("style","fill:black;stroke:rgba(24,149,215,1);stroke-width:2;opacity:0.5");
  svg.append("rect")
    .attr("x", 5)
    .attr("y", 50)
    .attr("rx",5)
    .attr("ry",5)
    .attr("width",280)
    .attr("height",20)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("width",280*1.1)
                        .attr("height",20*1.2)
                        .duration(200);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("width",280)
                        .attr("height",20)
                        .duration(200);
      })
    .attr("style","fill:black;stroke:rgba(24,149,215,1);stroke-width:2;opacity:0.5");
  svg.append("rect")
    .attr("x", 5)
    .attr("y", 80)
    .attr("rx",5)
    .attr("ry",5)
    .attr("width",250)
    .attr("height",20)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("width",250*1.1)
                        .attr("height",20*1.2)
                        .duration(200);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("width",250)
                        .attr("height",20)
                        .duration(200);
      })
    .attr("style","fill:black;stroke:rgba(24,149,215,1);stroke-width:2;opacity:0.5");
  svg.append("rect")
    .attr("x", 5)
    .attr("y", 110)
    .attr("rx",5)
    .attr("ry",5)
    .attr("width",250)
    .attr("height",20)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("width",250*1.1)
                        .attr("height",20*1.2)
                        .duration(200);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("width",250)
                        .attr("height",20)
                        .duration(200);
      })
    .attr("style","fill:black;stroke:rgba(24,149,215,1);stroke-width:2;opacity:0.5");
  svg.append("circle")
    .attr("cx", 275)
    .attr("cy", 90)
    .attr("r",10)
    .attr("fill","black")
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("r",10*1.2)
                        .duration(200);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("r",10)
                        .duration(200);
      })
    .attr("style","opacity:0.5; stroke:rgba(24,149,215,1); stroke-width:2;");
  svg.append("circle")
    .attr("cx", 275)
    .attr("cy", 120)
    .attr("r",10)
    .attr("fill","black")
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("r",10*1.2)
                        .duration(200);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("r",10)
                        .duration(200);
      })
    .attr("style","opacity:0.5; stroke:rgba(24,149,215,1); stroke-width:2;");
  svg.append("rect")
    .attr("x", 5)
    .attr("y", 140)
    .attr("rx",5)
    .attr("ry",5)
    .attr("width",60)
    .attr("height",20)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("width",60*1.1)
                        .attr("height",20*1.2)
                        .duration(200);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("width",60)
                        .attr("height",20)
                        .duration(200);
      })
    .attr("style","fill:black;stroke:rgba(24,149,215,1);stroke-width:2;opacity:0.5");
  svg.append("rect")
    .attr("x", 95)
    .attr("y", 140)
    .attr("rx",5)
    .attr("ry",5)
    .attr("width",190)
    .attr("height",20)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("width",190*1.1)
                        .attr("height",20*1.2)
                        .duration(200);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("width",190)
                        .attr("height",20)
                        .duration(200);
      })
    .attr("style","fill:black;stroke:rgba(24,149,215,1);stroke-width:2;opacity:0.5");
  svg.append("rect")
    .attr("x", 155)
    .attr("y", 180)
    .attr("rx",5)
    .attr("ry",5)
    .attr("width",60)
    .attr("height",20)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("width",60*1.1)
                        .attr("height",20*1.2)
                        .duration(200);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("width",60)
                        .attr("height",20)
                        .duration(200);
      })
    .attr("style","fill:grey;stroke:rgba(24,149,215,1);stroke-width:2;opacity:0.5");
  svg.append("rect")
    .attr("x", 225)
    .attr("y", 180)
    .attr("rx",5)
    .attr("ry",5)
    .attr("width",60)
    .attr("height",20)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("width",60*1.1)
                        .attr("height",20*1.2)
                        .duration(200);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("width",60)
                        .attr("height",20)
                        .duration(200);
      })
    .attr("style","fill:grey;stroke:rgba(24,149,215,1);stroke-width:2;opacity:0.5");

//grafovi

var svg2 = d3.select("#addgraf").append("svg")
    .attr("width", width)
    .attr("height", height);


     svg2.append("rect")
    .attr("x", 40)
    .attr("y", 20)
    .attr("rx",2)
    .attr("ry",2)
    .attr("width",20)
    .attr("height",230)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("height",150)
                        .ease("elastic")
                        .attr("style","fill:grey; opacity:0.5")
                        .duration(300);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("height",230)
                        .ease("elastic")
                        .attr("style","fill:red; opacity:0.5")
                        .duration(300);
      })
    .attr("style","fill:red; opacity:0.5");

svg2.append("rect")
    .attr("x", 70)
    .attr("y", 20)
    .attr("rx",2)
    .attr("ry",2)
    .attr("height",200)
    .attr("width",20)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("height",140)
                        .ease("elastic")
                        .attr("style","fill:grey; opacity:0.5")
                        .duration(300);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("height",200)
                        .attr("style","fill:red; opacity:0.5")
                        .duration(300);
      })
    .attr("style","fill:red; opacity:0.5");

    svg2.append("rect")
    .attr("x", 100)
    .attr("y", 20)
    .attr("rx",2)
    .attr("ry",2)
    .attr("width",20)
    .attr("height",150)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("height",200)
                        .ease("elastic")
                        .attr("style","fill:grey; opacity:0.5")
                        .duration(300);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("height",150)
                        .attr("style","fill:red; opacity:0.5")
                        .duration(300);
      })
    .attr("style","fill:red; opacity:0.5");

    svg2.append("rect")
    .attr("x", 130)
    .attr("y", 20)
    .attr("rx",2)
    .attr("ry",2)
    .attr("width",20)
    .attr("height",200)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("height",230)
                        .ease("elastic")
                        .attr("style","fill:grey; opacity:0.5")
                        .duration(300);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("height",200)
                        .attr("style","fill:red; opacity:0.5")
                        .duration(300);
      })
    .attr("style","fill:red; opacity:0.5");

    svg2.append("rect")
    .attr("x", 160)
    .attr("y", 20)
    .attr("rx",2)
    .attr("ry",2)
    .attr("width",20)
    .attr("height",150)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("height",100)
                        .ease("elastic")
                        .attr("style","fill:grey; opacity:0.5")
                        .duration(300);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("height",150)
                        .attr("style","fill:red; opacity:0.5")
                        .duration(300);
      })
    .attr("style","fill:red; opacity:0.5");

    svg2.append("rect")
    .attr("x", 190)
    .attr("y", 20)
    .attr("rx",2)
    .attr("ry",2)
    .attr("width",20)
    .attr("height",100)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("height",230)
                        .ease("elastic")
                        .attr("style","fill:grey; opacity:0.5")
                        .duration(300);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("height",100)
                        .attr("style","fill:red; opacity:0.5")
                        .duration(300);
      })
    .attr("style","fill:red; opacity:0.5");

    svg2.append("rect")
    .attr("x", 220)
    .attr("y", 20)
    .attr("rx",2)
    .attr("ry",2)
    .attr("width",20)
    .attr("height",180)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("height",230)
                        .ease("elastic")
                        .attr("style","fill:grey; opacity:0.5")
                        .duration(300);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("height",180)
                        .attr("style","fill:red; opacity:0.5")
                        .duration(300);
      })
    .attr("style","fill:red; opacity:0.5");

    svg2.append("rect")
    .attr("x", 250)
    .attr("y", 20)
    .attr("rx",2)
    .attr("ry",2)
    .attr("width",20)
    .attr("height",150)
    .on("mouseover", function(d){
        d3.select(this).transition()
                        .attr("height",200)
                        .ease("elastic")
                        .attr("style","fill:grey; opacity:0.5")
                        .duration(300);
      })
   .on("mouseout", function(d){
        d3.select(this).transition()
                        .attr("height",150)
                        .attr("style","fill:red; opacity:0.5")
                        .duration(300);
      })
    .attr("style","fill:red; opacity:0.5");

//spremnjene stvari

var svg3 = d3.select("#saved").append("svg")
    .attr("width", width)
    .attr("height", height);

var fill = d3.scale.category10();

var nodes = d3.range(60).map(function(i) {
  return {index: i};
});

var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .on("tick", tick)
    .start();

var node = svg3.selectAll(".node")
    .data(nodes)
  .enter().append("circle")
    .attr("class", "node")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", 8)
    .style("fill", function(d, i) { return fill(i & 0); })
    .style("stroke", function(d, i) { return d3.rgb(fill(i)).darker(2); })
    .call(force.drag)
    .on("mousedown", function() { d3.event.stopPropagation(); });

d3.select("#saved")
    .on("mouseover", mouseover);

function tick(e) {

  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

function mouseover() {
  nodes.forEach(function(x, i) {
    x.x += (Math.random() - .5) * 100;
    x.y += (Math.random() - .5) * 100;
  });

  force.resume();
}

//geooooooooooo


 var projection = d3.geo.orthographic()
    .scale(120)
    .translate([width / 2, height / 2])
    .clipAngle(90)
    .precision(.1);

var svg4 = d3.select("#geoviz").append("svg")
    .attr("width", width)
    .attr("height", height);


var path = d3.geo.path()
    .projection(projection);

var graticule = d3.geo.graticule();

svg4.append("defs").append("path")
    .datum({type: "Sphere"})
    .attr("id", "sphere")
    .attr("d", path);

svg4.append("use")
    .attr("class", "stroke")
    .attr("xlink:href", "#sphere");

svg4.append("use")
    .attr("class", "fill")
    .attr("xlink:href", "#sphere");

svg4.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);


d3.json("img/world-50m.json", function(error, world) {
  svg4.insert("path", ".graticule")
      .datum(topojson.feature(world, world.objects.land))
      .attr("class", "land")
      .attr("d", path);


  svg4.insert("path", ".graticule")
      .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
      .attr("class", "boundary")
      .attr("d", path);


            });

d3.select('#geoviz').on('mouseover', misna);
d3.select('#geoviz').on('mouseout', misvan);

function  misna ()
{   svg4
    .transition()
        .style("opacity",0.5)
        .duration(100);
}

function  misvan ()
{   svg4
    .transition()
        .style("opacity",1)
        .duration(100);
}


d3.select(self.frameElement).style("height", height + "px");

//svee
svg.style("opacity", 1e-6)
  .transition()
    .duration(1000)
    .style("opacity", 1);

svg2.style("opacity", 1e-6)
  .transition()
    .duration(1000)
    .style("opacity", 1);

svg3.style("opacity", 1e-6)
  .transition()
    .duration(1000)
    .style("opacity", 1);

svg4.style("opacity", 1e-6)
  .transition()
    .duration(1000)
    .style("opacity", 1);

});

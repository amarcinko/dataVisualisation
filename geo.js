jQuery(document).ready(function() {

      // Initialise d3js reusable map with options.
      var myMap = d3.twine.map("#geo_con")
        .tooltipOn(true)
        .clickableOn(true)
        .height(580);

      // Add base layer
      myMap.addLayer("admin");

      // Update the SVG and enjoy!
      myMap.update();

    });

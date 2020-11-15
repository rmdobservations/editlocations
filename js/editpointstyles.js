var selectStyleFunction = function(feature, resolution) {
	//let label=feature.get("id");
	let label= feature.getId()
//	console.log("Feature ids: ",label)
	if ( label !== undefined ) {
	// set indices to start from 1 instead of zero, consistent with cycle
	let slideIndex= 1+ parseInt(label);
	label = slideIndex.toString();
	var textStyle = {
		text: new ol.style.Text({
				text: label,
				fill: new ol.style.Fill({
					color: '#ff0000'
					// RGBA(171, 205, 239, 1) = lt blue
				}),
				stroke: new ol.style.Stroke({
					color: 'rgba(171, 205, 239, .5)',
					width: 2
				})
			})
		}	;
		var textStyleBack = {
				image: new ol.style.Circle({
					fill: new ol.style.Fill({
						color: '#abcdef'
					}),
				stroke: new ol.style.Stroke({
					width: 1,
					color: '#00ff00'
					}				),
				radius: 15
				}),
		}
		// returning two styles causes an overlap.
	var style = [new ol.style.Style(textStyle),new ol.style.Style(textStyleBack)];
	return style;
} else {
// do nothing
}
	};
  
			
		
var textStyleFunction = function(feature, resolution) {
	
//	var label=feature.get("id");
	let label= feature.getId()
//	console.log("Feature ids: ",label)
	if ( label !== undefined ) {
		//console.log("is this numeric? ",typeof label);
		//console.log("is this numeric? ", label);
	// set indices to start from 1 instead of zero, consistent with cycle
	let slideIndex= 1+ parseInt(label);
	label = slideIndex.toString();
	var textStyle = {
		text: new ol.style.Text({
				text: label,
		/*		fill: new ol.style.Fill({
					color: '#123456'
				}),*/
			/*	stroke: new ol.style.Stroke({
					color: '#123456',
					width: 2
				})*/
			})
		}	;
		// (18, 52, 86, 1) = 123456 dark blue
		var textStyleBack = {
				image: new ol.style.Circle({
					fill: new ol.style.Fill({
						color: 'rgba(18,52,85,0.3)'

					}),
				/*stroke: new ol.style.Stroke({
					width: 1,
					color: '#00ff00'
					}				),*/
				radius: 15
				}),
		}
		// returning two styles causes an overlap.
	var style = [new ol.style.Style(textStyle),new ol.style.Style(textStyleBack)];
	return style;
	} else {
// do nothing
}
};

	
	
/* for plotting points from new file */	
var pointStyleFunction = function(feature, resolution) {
		var circleimage = new ol.style.Circle({
radius:5,
fill:  new ol.style.Fill({color: "#00ff00"}),
stroke:  new ol.style.Stroke({color: '#006600', width: 2})
});

var pointStrokeStyle = new ol.style.Style({
image: circleimage
});
var style = [pointStrokeStyle];
return style;
}
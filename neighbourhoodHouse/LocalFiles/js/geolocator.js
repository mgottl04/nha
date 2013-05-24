function initialize(array) {
	var latlng = new google.maps.LatLng(49.261335,-123.113995);
	var mapOptions = {
			zoom: 8,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	  map.setZoom(13);

		var i=0;
		while (array[i])
		{
			markLocationForBusiness(array[i]);
			i++;
		}
	
    	

}


function markLocationForBusiness(business){

	var geocoder = new google.maps.Geocoder();
    
	geocoder.geocode( { 'address': business.address}, function(results, status) {
	      if (status == google.maps.GeocoderStatus.OK) {
	    	  map.setCenter(results[0].geometry.location);
	    	  map.setZoom(13);
	          var marker = new google.maps.Marker({
	              map: map,
	              position: results[0].geometry.location,
	              title:business.name          //<-------TO DO: This part is to insert business.title
	          });

	          google.maps.event.addListener(marker, 'click', function() {
	        	  if(infowindow ){

	        		  infowindow.close();
	        	  }
	        		if ( business.phone != null) {
	        			var contentString = '<h2 id="firstHeading" class="firstHeading">Businese</h2>' + 
	        							'<p>Name: ' + business.name + '</p>' +
	        							'<p>Address: ' + business.address + '</p>' +
	        							'<p>Description: ' + business.description + '</p>' +
	        							'<p>Phone: ' + business.phone + '</p>' +
	        							'<p>Hours: ' + business.hours + '</p>' +
	        							'<p>ContactName: ' + business.contactName + '</p>' +
	        							'<p>Email: ' + business.email + '</p>' +
	        							'<p>Category: ';
	        			var i = 0;
	        			for (;i<2;i++){
	        				contentString += business.categories[i] + ", ";
	        			}
	        			contentString += business.categories[i] + '</p>';

	        		} else {
	        			var contentString = '<h2 id="firstHeading" class="firstHeading">Event</h2>' + 
	        							'<p>Name: ' + business.name + '</p>' +
	        							'<p>Address: ' + business.address + '</p>' +
	        							'<p>Description: ' + business.date + '</p>' +
	        							'<p>Phone: ' + business.contact + '</p>' +
	        							'<p>Hours: ' + business.description + '</p>' +
	        							'<p>Category: ';
	        			var i = 0;
	        			for (;i<2;i++){
	        				contentString += business.categories[i] + ", ";
	        			}
	        			contentString += business.categories[i] + '</p>';
	        			
	        		}
		          infowindow.setContent(contentString);
	        	  infowindow.open(map, marker);
	        	});

	      } else {
	        alert("Geocode was not successful for the following reason: " + status);
	      }
	    });


}

function getContentString(businese){
	var contentString = null;
	alert(businese.id);
	if (businese!=null){

		
	}
	return contentString;
	
}

google.maps.event.addDomListener(window, 'load', initialize);
var infowindow = new google.maps.InfoWindow({
});;

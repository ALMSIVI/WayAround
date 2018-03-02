var map = L.map('map');

L.tileLayer.provider('Stamen.Terrain').addTo(map);

function getLatLngFromPlace(route) {
	$.post("/api/" + route.start + "/" + route.dest,  function(data) {
		L.Routing.control({
		waypoints: [
   				L.latLng(data.start.lat, data.start.lon),
    			L.latLng(data.dest.lat, data.dest.lon)
			],
			routeWhileDragging: true
		}).addTo(map);
	})
}



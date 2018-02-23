var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

getLatLngFromPlace({start : localStorage['start'], dest : localStorage['dest']});

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


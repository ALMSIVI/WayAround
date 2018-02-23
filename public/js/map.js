var map = L.map('map').fitWorld();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic3ViaGFua2FycGFuZGEiLCJhIjoiY2pkejlxdWN5NWJxbTM0cWhpM2RleHNjeSJ9.1jzJ0tYbeuoA5JaiV2U3xA'
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


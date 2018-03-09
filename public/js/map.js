var map = L.map('map');

L.tileLayer.provider('Stamen.Terrain').addTo(map);

function getLatLngFromPlace(route) {
	$.post("/api/" + route.start + "/" + route.dest,  function(data) {
		$.getJSON("./json/params.json", function(params) {
			$.get("/api/detours", params, function(detours) {
				let waypts = [
		   				L.latLng(data.start.lat, data.start.lon),
		    			L.latLng(data.dest.lat, data.dest.lon)
					];

				const temp = waypts;

				for (let i = 0; i < detours.detours.length; i++) {
					waypts.push(L.latLng(detours.detours[i].lat, detours.detours[i].lon));
				}

				L.Routing.control({
					waypoints: temp,
					routeWhileDragging: true
				}).addTo(map);
			});
		});
	})
}



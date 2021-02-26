function initMap() {
	// add your code here
	L.mapquest.key = "jiddoGt5BfvKv5EsGo0KP3YLglgypZ2r"
	var map = L.mapquest.map('map' , {
		center: [32.882 , -117.234], 
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});
	L.marker([32.882 , -117.234]).addTo(map);
}

document.getElementbyId ("demo"). inner HTML= "Hello Javascript";
document.getElementbyId ("demo"). style.fontSize. = "35px"; 
document.getElementbyId ("demo"). style.display. = "none";
<script> 
document
</script>
const makeNoise = function() {console.log("Pling!");};
makeNoise();// → Pling!
const power = function(base, exponent) {
	let result = 1;for (let count = 0; count < exponent; count++) {result *= base;}return result;
};
console.log(power(2, 10));// → 1024

function chicken() 
{return egg();
function egg() {
return chicken();}
console.log(chicken(
) + " came first.");// → ??

var map1 = new google.maps.Map(document.getElementById("googleMap1"), mapOptions1);
var map2 = new google.maps.Map(document.getElementById("googleMap2"), mapOptions2);
var map3 = new google.maps.Map(document.getElementById("googleMap3"), mapOptions3);
var map4 = new google.maps.Map(document.getElementById("googleMap4"), mapOptions4);
var marker = new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE
});

marker.setMap(map)
// Zoom to 9 when clicking on marker
google.maps.event.addListener(marker,'click',function() {
  map.setZoom(9);
  map.setCenter(marker.getPosition());
}); , 
var infowindow = new google.maps.InfoWindow({
  content:"Hello World!"
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
}); 
var mapOptions {
  panControl: true,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  overviewMapControl: true,
  rotateControl: true
} 
zoomControl: true,
zoomControlOptions: {
    style: google.maps.ZoomControlStyle.SMALL
}
var mapOptions = {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:7,
  mapTypeId: google.maps.MapTypeId.HYBRID
}; 
$(document).ready(function () {
	var banners = document.getElementsByClassName('banner');

    banners[0].style.display = 'block';
	banners[1].style.display = 'none';
	banners[2].style.display = 'none';
	var current = 1;
    var bannersLength = banners.length;

	setInterval(function () { 
        console.log(current);
        for (var i = 0; i < bannersLength; i++) {
            banners[i].style.display = 'none';
        }

		banners[current].style.display = 'block';
        if (current === bannersLength - 1) {
            current = 0;
        } else {
            current++;
        }
	}, 3000);
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.53168648811509, lng: -73.73110620139269 },
    zoom: 8,
  });
}

window.initMap = initMap;

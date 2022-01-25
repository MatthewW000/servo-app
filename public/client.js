// Initialize and add the map

// import { MarkerClusterer } from "@googlemaps/markerclusterer";

let map;

function initMap() {


    map = new google.maps.Map(document.getElementById("map"), {
         zoom: 4,
         center: { lat: -25.363, lng: 131.044 }
     });
    createMarkers()
 
 }

function createMarkers() {
    axios.get('/api/stations/all').then(res => {
        res.data.forEach(station => {
            new google.maps.Marker({
                position: {lat: station.latitude, lng: station.longitude},
                map: map,
                title: station.owner
              });
                
            }
        
    
        )}
    )}





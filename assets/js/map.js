// Initialize and add the map
function initMap() {

    // The location of Dublin

    var myLocation = {
        lat: 53.351517,
        lng: -6.262252
    };

    // The map, centered at Dublin

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: myLocation
    });

    // The marker, positioned at Tramore
    var marker = new google.maps.Marker({
        position: myLocation,
        map: map
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var locations = [{
            lat: 53.349804,
            lng: -6.260310
        },

        {
            lat: 53.341923,
            lng: -6.262339
        }

    ];

    // Add some markers to the map.
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
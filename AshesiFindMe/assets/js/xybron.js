var app = new Vue({
    el: '#xFriends',
    data: {
        friends: [
            { name: 'Ron' },
            { name: 'Snow' },
            { name: 'Xuys' },
            { name: 'Vim' },
            { name: 'Gyx' },
            { name: 'Bed' }
        ]
    }
});



function initMap() {
    var uluru = { lat: 5.6281881, lng: -0.1426026 };
    var map = new google.maps.Map(document.getElementById('mapWrapper'), {
        zoom: 17,
        center: uluru,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map'
            ]
        }
    });

    //Creating the marker on the map.
    var marker = new google.maps.Marker({
        position: uluru,
        icon: 'assets/images/marker.png',
        animation: google.maps.Animation.DROP,
        map: map
    });

    //Event listener ==for when the button is clicked
    marker.addListener('click', showUser);

    //Custom style of map
    var styledMapType = new google.maps.StyledMapType(
        [{
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#f2f2f2"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    );

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}


function showUser() {
    alert('Hello');
}
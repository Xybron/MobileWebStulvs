//Global variables
var map;
var foundMeNotification = $('#foundMeContainer');
var friendsBtn = $('#friendsBtn');
var overlayWrapper = $('#overlayWrapper');
var findMeBtn = $('#xFabBtn');
var shadowBtn = $("#xFabBtn[data-shadow='yes']")
var splashScreen = $('#loader');


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


$(document).ready(() => {

    setTimeout(() => {
        splashScreen.addClass('fadeOutLeftBig');
    }, 1500);

});



function initMap() {
    var defaultCoordinates = { lat: 5.6281881, lng: -0.1426026 };
    map = new google.maps.Map(document.getElementById('mapWrapper'), {
        zoom: 17,
        center: defaultCoordinates,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map'
            ]
        }
    });



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


//This function fires up the navigator which then places the pin on the user's current position
function findMe() {

    navigator.geolocation.getCurrentPosition(onSuccess, onError);





}

// onSuccess Geolocation
//
function onSuccess(position) {


    this.foundMePopUp(position);
    this.foundMeorNot();





}

// onError Callback receives a PositionError object
//
function onError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    this.foundMeorNot();

}

function foundMePopUp(position) {
    var pH = $('.profileHolder');
    var lD = $('.locationDeets');

    pH.removeClass('bounceOutUp');
    lD.removeClass('bounceOutDown');

    var coordinates = { lat: position.coords.latitude, lng: position.coords.longitude };

    map.setCenter(coordinates);

    foundMeNotification.css('display', 'block');



    /*pH.addClass('bounceInDown');
    lD.addClass('bounceOutDown');*/

    setTimeout((position) => {
        pH.removeClass('bounceInDown');
        lD.removeClass('bounceInUp');

        pH.addClass('bounceOutUp');
        lD.addClass('bounceOutDown');

        //Creating the marker on the map.
        var marker = new google.maps.Marker({
            position: coordinates,
            icon: 'assets/images/marker.png',
            animation: google.maps.Animation.DROP,
            map: map
        });

    }, 3500);
}

function viewFriends() {
    var friendsPane = $('#xFriends');


    if (friendsPane.hasClass('showFriends')) {
        friendsPane.removeClass('showFriends');
        friendsPane.addClass('hideFriends');


    } else if (friendsPane.hasClass('hideFriends')) {
        friendsPane.removeClass('hideFriends');
        friendsPane.addClass('showFriends');
    } else {

        friendsPane.addClass('showFriends');

    }
}


function foundMeorNot() {
    var shadow = $("#xFabBtn[data-shadow='yes']");
    shadow.css('visibility', 'hidden');
    shadow.css('opacity', '0');
    findMeBtn.removeClass('zoomOut');
    findMeBtn.addClass('zoomIn');
    setTimeout(() => {
        shadow.addClass('zoomOut');
    }, 500);
}


friendsBtn.click(() => {
    this.viewFriends();
});

findMeBtn.click(() => {
    var shadow = $("#xFabBtn[data-shadow='yes']");
    shadow.css('visibility', 'visible');
    shadow.css('opacity', '1');
    findMeBtn.addClass('zoomOut');
    setTimeout(() => {
        shadow.addClass('zoomIn');
    }, 500);


});

shadowBtn.click(() => {
    this.foundMeorNot();
});

/*overlayWrapper.click(() => {
    var friendsPane = $('#xFriends');

    friendsPane.removeClass('slideInDown');
    friendsPane.addClass('slideOutUp')

});*/
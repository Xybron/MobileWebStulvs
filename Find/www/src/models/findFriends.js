/**
 * @author Ronald Nettey
 * Date created : 20/10/2017
 * Last update : 20/10/2017
 * 
 * Description : This model contains
 */

//Importing into the html page
/*var importedFirebaseScript = document.createElement('script');
importedFirebaseScript.src = 'https://www.gstatic.com/firebasejs/4.6.0/firebase.js';
document.body.appendChild(importedFirebaseScript);*/




var findDatabaseRef;



// Initialize Firebase
var config = {
    apiKey: "AIzaSyDp9p4SnCJwTceH0LAZlnUbgfqEFdDFrGw",
    authDomain: "mobilewebstulvs.firebaseapp.com",
    databaseURL: "https://mobilewebstulvs.firebaseio.com",
    projectId: "mobilewebstulvs",
    storageBucket: "mobilewebstulvs.appspot.com",
    messagingSenderId: "477818114501"
};
firebase.initializeApp(config);

//Database ref
findDatabaseRef = firebase.database().ref();



function checkFriendSearch() {
    var status = findDatabaseRef.child('findApp');

    status.on('value', function(snapshot) {

        if (snapshot.val().isSearching) {
            console.log('Ronald Wants your location');
        } else {
            console.log('Ronald is not looking for anybody');
        }

    });

}

function lookForFriends() {
    var status = findDatabaseRef.child('findApp');
    status.update({ isSearching: true })
}

function stopLooking() {
    var status = findDatabaseRef.child('findApp');
    status.update({ isSearching: false })
}


function acceptLocationRequest() {
    var status = findDatabaseRef.child('findApp');
    status.update({ accepted: true });

    status.on('value', function(snapshot) {

        if (snapshot.val().accepted) {
            sendLocation();
        } else {
            console.log('User denied your request');
        }

    });
}


function denyLocationRequest() {
    var status = findDatabaseRef.child('findApp');
    status.update({ accepted: false })
}


function sendLocation() {
    var latitude = 0.19;
    var longitude = 0.32;
    var coordinates = { lat: latitude, lng: longitude };
    var status = findDatabaseRef.child('findApp/friend');
    status.update({ location: coordinates });
}


function checkIfRequestIsAccepted() {
    var statusi = findDatabaseRef.child('findApp');

    statusi.on('value', function(snapshot) {

        if (snapshot.val().accepted) {
            this.slideInTopToggleNormal('friendSearch');
            console.log(snapshot.val().friend.location);
        } else {
            setTimeout(() => {
                this.slideInTopToggleNormal('friendSearch');
            }, 10000);
        }

    });
}

function slideInTopToggleNormal(elem) {

    var e = `#${elem}`
    var pane = $(e);


    if (pane.hasClass('showFriends')) {
        pane.removeClass('showFriends');
        pane.addClass('hideFriends');
        stopLooking();


    } else if (pane.hasClass('hideFriends')) {
        pane.removeClass('hideFriends');
        pane.addClass('showFriends');

    } else {

        pane.addClass('showFriends');


    }
}

function setDefault() {
    var latitude = 0;
    var longitude = 0;
    var coordinates = { lat: latitude, lng: longitude };
    var status = findDatabaseRef.child('findApp');
    status.update({ isSearching: false, accepted: false });
    findDatabaseRef.child('findApp/friend').update({ location: coordinates });

}
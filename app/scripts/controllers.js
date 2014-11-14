'use strict';
angular.module('RASeed.controllers', [])

    .controller('ListCtrl', function ($scope, Spots) {

        $scope.spots = Spots.all();
    })

    .controller('MapCtrl', function ($scope, Spots, geolocation) {
        $scope.spots = Spots.all();
        $scope.markerIcon = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png';

        geolocation.getLocation().then(function(data){

            var myLat = data.coords.latitude;
            var myLong = data.coords.longitude;

            $scope.spots = Spots.all();
            $scope.map =  {
                center: { latitude: myLat, longitude: myLong },
                zoom: 13,
                mapTypeControl: false,
                streetViewControl: false,
                navigationControl: true,
                scrollwheel: false,
                navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            $scope.options = {'title': 'toto'};

        });

    })

    .controller('ArCtrl', function ($scope, Spots) {
        $scope.spots = Spots.all();
    })


    .controller('DebugCtrl', function ($scope, Spots, geolocation) {
        $scope.spots = Spots.all();

        geolocation.getLocation().then(function(data){
            $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
        });

    });

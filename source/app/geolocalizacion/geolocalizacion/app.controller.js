(function(){
  'use strict';

  angular.module('app.geolocalizacion.controller', [
  ]).controller('geolocalizacionCtrl', geolocalizacionCtrl);


  geolocalizacionCtrl.$inject = ['$scope', '$timeout', 'uiGmapLogger', '$http','uiGmapGoogleMapApi', '$stateParams','$mdToast', 'Usuarios', '$location'];
  function geolocalizacionCtrl($scope, $timeout, $log, $http, GoogleMapApi, $stateParams, $mdToast, Usuarios, $location){
    var vm = this;
    console.log('user');
    console.log($stateParams.idUsuario);
    vm.usuario = Usuarios.get({idUsuario: $stateParams.idUsuario });
    console.log(vm.usuario);
    $log.doLog = true;
    var places={};
    var newMarkers={};

    $scope.lat= 40.74349;
    $scope.lng= -73.990822;


    $scope.toggleMap = function () {
      $scope.searchbox.options.visible = !$scope.searchbox.options.visible
    }

    GoogleMapApi.then(function(maps) {
      maps.visualRefresh = true;
      $scope.defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(40.82148, -73.66450),
        new google.maps.LatLng(40.66541, -74.31715));


      $scope.map.bounds = {
        northeast: {
          latitude:$scope.defaultBounds.getNorthEast().lat(),
          longitude:$scope.defaultBounds.getNorthEast().lng()
        },
        southwest: {
          latitude:$scope.defaultBounds.getSouthWest().lat(),
          longitude:-$scope.defaultBounds.getSouthWest().lng()

        }
      }
      $scope.searchbox.options.bounds = new google.maps.LatLngBounds($scope.defaultBounds.getNorthEast(), $scope.defaultBounds.getSouthWest());
    });

    angular.extend($scope, {
      window: {
        show: false,
        options: {
          pixelOffset: { width: 0, height: -40 }
        },
        templateurl:'window.tpl.html',
        templateparameter: {},
        closeClick: function () {
          $scope.window.show = false;
        }
      },
      map: {
        control: {},
        center: {
          latitude: 3.5567217,
          longitude: -76.28885220000001
        },
        zoom: 12,
        dragging: false,
        bounds: {},
        markers: [],
        idkey: 'place_id',
        events: {
          idle: function (map) {

          },
          dragend: function(map) {
            //update the search box bounds after dragging the map
            var bounds = map.getBounds();
            var ne = bounds.getNorthEast();
            var sw = bounds.getSouthWest();
            $scope.searchbox.options.bounds = new google.maps.LatLngBounds(sw, ne);
            //$scope.searchbox.options.visible = true;
          }
        }
      },
      searchbox: {
        template: 'searchbox.tpl.html',
        //position:'top-right',
        position:'top-left',
        options: {
          bounds: {},
          visible: true
        },
        //parentdiv:'searchBoxParent',
        events: {
          places_changed: function (searchBox) {

            places = searchBox.getPlaces()
            console.log(places);
            $scope.lat=places[0].geometry.location.lat();

            $scope.map.center.latitude=places[0].geometry.location.lat();
            $scope.map.center.longitude=places[0].geometry.location.lng();
            $scope.map.zoom=18;
            console.log($scope.map.center);




            if (places.length == 0) {
              return;
            }
            // For each place, get the icon, place name, and location.
            newMarkers = [];
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0, place; place = places[i]; i++) {
              // Create a marker for each place.
              var marker = {
                idKey:i,
                place_id: place.place_id,
                name: place.name,
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng(),
                templateurl:'window.tpl.html',
                templateparameter: place,
                events: {
                  click: function (marker) {
                    $scope.window.coords = {
                      latitude: marker.model.latitude,
                      longitude: marker.model.longitude
                    }
                    $scope.window.templateparameter = marker.model.templateparameter;
                    $scope.window.show = true;

                  }
                }
              };
              newMarkers.push(marker);
              bounds.extend(place.geometry.location);
            }

            $scope.map.bounds = {
              northeast: {
                latitude: bounds.getNorthEast().lat(),
                longitude: bounds.getNorthEast().lng()
              },
              southwest: {
                latitude: bounds.getSouthWest().lat(),
                longitude: bounds.getSouthWest().lng()
              }
            }

            $scope.map.markers = newMarkers;
          }
        }
      }
    });


    vm.update = function() {
        vm.usuario.latitud=$scope.map.center.latitude;
        vm.usuario.longitud=$scope.map.center.longitude;
        console.log(vm.usuario);
        Usuarios.update(vm.usuario, function() {
            $location.path('/bienvenido');
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Se ha  actualizado el usuario...')
                    .position('bottom right'));
        });
    }
  }

})();

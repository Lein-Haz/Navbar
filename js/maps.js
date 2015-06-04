/**
 * Created by Nickkaczmarek on 6/2/15.
 */
    console.log("intitializing");
    var map;
    function initialize() {
        alert("initialize");
        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(-34.397, 150.644)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    }

    google.maps.event.addDomListener($("#map-canvas"), 'load', initialize);

        //var bounds = new google.maps.LatLngBounds();
        //
        ////pioneer locations
        //var locations = [
        //    ['Pioneer St. Louis', 38.605229, -90.202384],
        //    ['Pioneer Kansas City', 39.080605, -94.598081],
        //    ['Pioneer Decatur', 39.857488, -88.926749]
        //
        //];


        var mapOptions={
            center: new google.maps.LatLng(39.653657, -91.734908),
            zoom:7,
            mapTypeId:google.maps.MapTypeId.ROADMAP,
            zoomControl:true,
            zoomControlOptions: {
                style:google.maps.ZoomControlStyle.DEFAULT
            }
        };




        //markers

    //    var infowindow = new google.maps.InfoWindow();
    //
    //    var marker, i;
    //
    //    for (i = 0; i < locations.length; i++) {
    //        marker = new google.maps.Marker({
    //            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    //            map: this.map,
    //            icon: 'images/marker.png'
    //        });
    //
    //        bounds.extend(marker.position);
    //
    //        google.maps.event.addListener(marker, 'click', (function (marker, i) {
    //            return function () {
    //                infowindow.setContent(locations[i][0]);
    //                infowindow.open(map, marker);
    //            }
    //        })(marker, i));
    //
    //        google.maps.event.addListener(marker,'click',function() {
    //            map.setZoom(12);
    //            map.setCenter(this.getPosition());
    //        });
    //
    //        //google.maps.event.addListener(map,'center_changed',function() {
    //        //    map.setZoom(9);
    //        //    window.setTimeout(function() {
    //        //        map.panTo(this.getPosition());
    //        //    },3000);
    //        //});
    //    }
    //
    //    map.fitBounds(bounds);
    //
    //    var listener = google.maps.event.addListener(map, "idle", function () {
    //        map.setZoom(8);
    //        google.maps.event.removeListener(listener);
    //    });
    //
    //google.maps.event.addDomListener(window, 'load', initialize);


    alert("Farts");




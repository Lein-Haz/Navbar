/**
 * Created by Nickkaczmarek on 6/2/15.
 */



        //var bounds = new google.maps.LatLngBounds();
        //
        ////pioneer locations
        //var locations = [
        //    ['Pioneer St. Louis', 38.605229, -90.202384],
        //    ['Pioneer Kansas City', 39.080605, -94.598081],
        //    ['Pioneer Decatur', 39.857488, -88.926749]
        //
        //];

function initialize() {
    var map;
    console.log("intitializing");
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(39.653657, -91.734908),
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        zoomControl:true,
        zoomControlOptions: {
            style:google.maps.ZoomControlStyle.DEFAULT
        }
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
}
/*var mapOptions={
    center: new google.maps.LatLng(39.653657, -91.734908),
    zoom:7,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    zoomControl:true,
    zoomControlOptions: {
        style:google.maps.ZoomControlStyle.DEFAULT
    }
};*/







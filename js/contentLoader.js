/**
 * Created by Nickkaczmarek on 6/2/15.
 */
$(document).ready(function(){

    $("#content").load("home.html");

    $("#home").click(function() {
        $("#content").load("home.html");
    });
    $("#services").click(function() {
        $("#content").load("services.html");
    });
    $("#products").click(function() {
        $("#content").load("products.html");
    });
    $("#partners").click(function() {
        $("#content").load("partners.html");
    });
    $("#about").click(function() {
        $("#content").load("about.html");
    });
    $("#locations").click(function() {
        $("#content").load("maps.html");

        loadScript();

        /*otherLoad();
        google.maps.event.addDomListener(this, 'load', initialize());*/
    });
    function loadScript() {
        var script;
        var len = $('script[src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&callback=initialize"]').length;
        if(len < 1)
        {
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&callback=initialize';
            document.body.appendChild(script);
        } else{
            //cause api hate
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&callback=initialize';
            document.body.appendChild(script);

            //initialize();//nope

            //google.maps.event.addDomListener($('#map-canvas'), "load", this.initialize());//nope
        }
    }
});










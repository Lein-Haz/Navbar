/**
 * Created by Nickkaczmarek on 6/2/15.
 */
$(document).ready(function(){

    $("#content").load("home.html")


    $("#home").click(function() {
        $("#content").load("home.html")
    });
    $("#services").click(function() {
        $("#content").load("services.html")
    });
    $("#products").click(function() {
        $("#content").load("products.html")
    });
    $("#partners").click(function() {
        $("#content").load("partners.html")
    });
    $("#about").click(function() {
        $("#content").load("about.html")
    });
    $("#locations").click(function() {
        $("#content").load("maps.html")
    });
});










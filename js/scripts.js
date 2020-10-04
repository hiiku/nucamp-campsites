
// Carousel js.

$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        }   else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

// Login modal js.

$(document).ready(function(){
    $("#loginButton").click(function(){
        $("#loginModal").modal();
    });
});

// Reserve modal js.

$(document).ready(function(){
    $("#reserveButton").click(function(){
        $("#reserveModal").modal();
    });
});


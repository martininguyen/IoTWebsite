/*function displayChart(type) {
    var e = document.getElementById(type);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}*/


$("#lineButton").click(function () {
    $(".chartcontainer").hide().removeClass("animated zoomIn");
    $("#line").show().addClass("animated zoomIn");
});
$("#biButton").click(function () {
    $(".chartcontainer").hide().removeClass("animated zoomIn");
    $("#bi").show().addClass("animated zoomIn");
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $("#fil").addClass("show animated fadeInLeft");

        $("#fiu").addClass("show animated fadeInUp");

        $("#fir").addClass("show animated fadeInRight");

        $("#fid").addClass("show animated fadeInDown");

        $("#fiu2").addClass(" show animated fadeInUp");
    }
});


    var handle = $( "#custom-handle" );
    $("#slider").slider({
        min: 60,
        max: 85,
        create: function() {
            handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.text( ui.value );
        }
    });

    $( "#slider-range" ).slider({
        range: true,
        min: 65,
        max: 85,
        values: [ 68, 75],
        slide: function( event, ui ) {
            $( "#range" ).val( ui.values[ 0 ] + "F" + " - " + ui.values[ 1 ] + "F" );
        }
    });
    $( "#range" ).val($( "#slider-range" ).slider( "values", 0 ) + $( "#slider-range" ).slider( "values", 1 ) );

   

function sms() {
    var value = $("#slider").slider("value");
    $("#sendsmsHot").click(function () {
        $.ajax({
            url: "/Home/SendTextToHot",
            type: "POST",
            data: { temp: value },
            success: function () {
                $("i").removeClass();
                $("body").css("color", "#CE2029");
                $(".navbar-inverse").css("background-color", " #9C2A00");
                $(".navbar-inverse").css("border-color", " #9C2A00");
                $("img").hide();
                $(".navbar-brand").hide();
                $("i").addClass("fa fa-free-code-camp fa-7x animated pulse");
            },
            error: function () {
            }
        });
    });

    $("#sendsmsCold").click(function () {
        $.ajax({
            url: "/Home/SendTextToCold",
            type: "POST",
            data: { temp: value },
            success: function () {
                $("i").removeClass();
                $("body").css("color", "#A5F2F3")
                $(".navbar-inverse").css("background-color", " #FFFFFF");
                $(".navbar-inverse").css("border-color", " #FFFFFF");
                $("img").hide();
                $(".navbar-brand").hide();
                $("i").addClass("fa fa-snowflake-o fa-7x animated pulse");
            },
            error: function () {
            }
        });
    });
}

/*
function readEventHubData() {
    
    $.getJSON("/Home/PullCurrentTemp", function (data) {
        $.each(data, function (key, val) {
            $("#currtemp").attr()
        })
    })
        
} */

function consumeGetLatest() {
    $.getJSON("/Home/getLatest", function (data) {
        $.each(data, function (i, data){
            $("#tempF").append(data + "F");
        })
    })
}


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

/*
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
*/

var rangeLow;
var rangeHigh;
$("#slider-range").slider({
    range: true,
    min: 65,
    max: 95,
    values: [68, 75],
    slide: function (event, ui) {
        $("#range").val(ui.values[0] + "°F" + " - " + ui.values[1] + "°F");
    }
});

function changeTempRange() {
    var rangeLow = $("#slider-range").slider("values", 0);
    var rangeHigh = $("#slider-range").slider("values", 1);
    $("#configRange").click(function () {
        $.ajax({
            url: "/Home/updateTempRange",
            type: "POST",
            data: { tempHigh: rangeHigh, tempLow: rangeLow },
            success: function(){
                alert(rangeLow + "," + rangeHigh)
            }
        })
    })
}



$(".dial").knob({
    'min': 60,
    'max': 95
});

function sms() {
    var value = $(".dial").val();

    $("#sendsms").click(function () {
        $.ajax({
            url: "/Home/SendText",
            type: "POST",
            data: { temp: value },
            success: function () {
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
    $.get("/Home/getLatest", function (data) {
        $("#SwamisCurr").html('');
        $("#SwamisCurr").append(data + "°F");

    })

    var timeoutID = setTimeout('consumeGetLatest()', 6000);
}


var carousel = $(".carousel"),
    currdeg = 0,
    xcurr = 0,
    click = 2;

$(".right").on("click", { d: "r" }, rotate);
$(".left").on("click", { d: "l" }, rotate);

function rotate(e) {
    if (e.data.d == "r") {
        if (click < 3) {
            currdeg = currdeg - 120;
            xcurr = xcurr - 700;
            click++;
        }
    }
    if (e.data.d == "l") {
        if (click > 1) {
            currdeg = currdeg + 120;
            xcurr = xcurr + 700;
            click--;
        }

    }
    carousel.css({
        "-webkit-transform": "rotateY(" + currdeg + "deg) translateX(" + xcurr + "px)",
        "-moz-transform": "rotateY(" + currdeg + "deg) translateX(" + xcurr + "px)",
        "-o-transform": "rotateY(" + currdeg + "deg) translateX(" + xcurr + "px)",
        "transform": "rotateY(" + currdeg + "deg) translateX(" + xcurr + "px)"
    });
}


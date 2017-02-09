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
    $( "#slider" ).slider({
        create: function() {
            handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.text( ui.value );
        }
    });
   

function sms() {
    var value = $("#slider").slider("value");
    $("#sendsmsHot").click(function () {
        $.ajax({
            url: "/Home/SendTextToHot",
            type: "POST",
            data: { temp: value },
            success: function () {
                $(".navbar-inverse").css("background-color", " #CE2029");
                $(".navbar-inverse").css("border-color", " #CE2029");
                $("img").hide();
                $(".navbar-brand").hide();
                $("i").removeClass();
                $("i").addClass("fa fa-free-code-camp fa-7x animated pulse");
                $("#fid").removeClass("fa-7x");
                $("#fid").addClass("fa-10x");
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
                $(".navbar-inverse").css("background-color", " #A5F2F3");
                $(".navbar-inverse").css("border-color", " #A5F2F3");
                $("img").hide();
                $(".navbar-brand").hide();
                $("i").removeClass();
                $("i").addClass("fa fa-snowflake-o fa-7x animated pulse");
                $("#fid").removeClass("fa-7x");
                $("#fid").addClass("fa-10x");
            },
            error: function () {
            }
        });
    });
}


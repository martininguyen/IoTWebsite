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


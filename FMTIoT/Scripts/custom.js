/*function displayChart(type) {
    var e = document.getElementById(type);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}*/


$("#lineButton").click(function () {
    $(".chartcontainer").hide("slow");
    $("#line").show("fast");
});
$("#biButton").click(function () {
    $(".chartcontainer").hide("slow");
    $("#bi").show("fast");
});


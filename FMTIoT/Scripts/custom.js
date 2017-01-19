function displayLine() {
    
    var charts = document.getElementsByClassName("chartcontainer"); 
    for(i = 0; i < charts.length; i++){
        charts[i].style.visibility = "hidden";
    }
    var size = document.getElementsByClassName("size");
    for (i = 0; i < charts.length; i++) {
        charts[i].style.width = "0";
        charts[i].style.height = "0";
    }
    document.getElementById("line").style.visibility = "visible";
    document.getElementById("line_chart").style.width = "960";
    document.getElementById("line_chart").style.height = "500";
}

function displayBi() {
    var charts = document.getElementsByClassName("chartcontainer");
    for(i = 0; i < charts.length; i++){
        charts[i].style.visibility = "hidden";
    }
    var size = document.getElementsByClassName("size");
    for (i = 0; i < charts.length; i++) {
        charts[i].style.width = "0";
        charts[i].style.height = "0";
    }
    document.getElementById("bi").style.visibility = "visible";
    document.getElementById("bivariate").style.width = "960";
    document.getElementById("bivariate").style.height = "500";
}
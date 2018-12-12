$(document).ready(function() {
    $( "#content" ).load( "html/start.html" );

    $("#homeB").click(function () {
        $("#currentsht").html("Home");
        $("#content").load("html/start.html");

    });

    $("#addCarB").click(function () {
        $("#content").load("html/addCar.html");
        $("#currentsht").html("AddCar");
    });

    $("#CarsB").click(function () {
        $("#content").empty();
        $("#currentsht").html("Cars");
        listCars();
    });


    $("#addManB").click(function () {
        $("#content").load("html/addMan.html");
        $("#currentsht").html("AddManufacturer");
    });

    $("#ManB").click(function () {
        $("#content").empty();
        $("#currentsht").html("Manufacturer");
        listMan();
    });


});

function listMan(){
    var cont = $("#content");
    $.getJSON("manufacturers", function(data){
        var table = $('<table id="Writeouts"></table>');
        table.append("<tr><th>Name</th><th>Country</th><th>Founded</th></tr>");

        $.each(data, function (key, value){
            var row = $('<tr></tr>');
            var name = $('<td onclick="Cookie(' + "'" + value.name + "'" +')">' + value.name + '</td>');
            var country = $('<td>' + value.country + '</td>');
            var founded = $('<td>' + value.founded + '</td>');

            row.append(name, country, founded);
            table.append(row);
        });

        cont.append(table);
    })
}
function listCars(){
    var cont = $("#content");

    $.getJSON("cars", function(data){
        var table = $('<table id="Writeouts"></table>');
        table.append("<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Available</th><th>Year</th><th>Horsepower</th></tr>");

        $.each(data, function (key, value){
            var row = $('<tr></tr>');
            var name = $('<td>' + value.name + '</td>');
            var consumption = $('<td>' + value.consumption + '</td>');
            var color = $('<td>' + value.color + '</td>');
            var manufacturer = $('<td>' + value.manufacturer + '</td>');
            var available = $('<td>' + value.available + '</td>');
            var year = $('<td>' + value.year + '</td>');
            var horsepower = $('<td>' + value.horsepower + '</td>');

            row.append(name, consumption, color, manufacturer, available, year, horsepower);
            table.append(row);
        });

        cont.append(table);
    })

}
function Cookie(manufacturer){
    document.cookie="name= " + manufacturer;
    var cont = $("#content");
    $(cont).empty();
    $.getJSON("manufacturer", function(data){
        var table = $('<table id="Writeouts"></table>');
        table.append("<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Available</th><th>Year</th><th>Horsepower</th></tr>");


        $.each(data, function (key, value){
            var row = $('<tr></tr>');
            var name = $('<td>' + value.name + '</td>');
            var consumption = $('<td>' + value.consumption + '</td>');
            var color = $('<td>' + value.color + '</td>');
            var manufacturer = $('<td>' + value.manufacturer + '</td>');
            var available = $('<td>' + value.available + '</td>');
            var year = $('<td>' + value.year + '</td>');
            var horsepower = $('<td>' + value.horsepower + '</td>');

            row.append(name, consumption, color, manufacturer,
                available, year, horsepower);
            table.append(row);

        });

        cont.append(table);
        $("#currentsht").html(document.cookie);

    })
}
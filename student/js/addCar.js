$.get("/manufacturerNames", function (names) { names.forEach(function (name) {
    $("#needMAN").append('<option value=" ' +  name + ' "> ' + name + '</option>');
});
});

$("#form1").submit(function (event) {
    event.preventDefault();
    $.ajax({
        url: 'addCar',
        type: 'POST',
        data: $("#form1").serialize(),
        success: function() {
            alert("Car added to list.");
            $("#content").empty();
            $("#currentsht").html("Cars");
            listCars();
            },
        error: function() {
            alert("Existing car, what u doin mate?!");
        }
    })
});


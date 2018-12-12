$(form).submit(function (event) {
    event.preventDefault();
    $.ajax({
        url: 'addManufacturers',
        type: 'POST',
        data: $(form).serialize(),
        success: function() {
            alert("Manufacturer added to list.");
        },
        error: function() {
            alert("Existing manufacturer, you rekt.");
        }
    })
});
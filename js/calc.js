$(document).ready(function () {

    let conversionFactor1 = 1;
    let unit1 = "";

    $('#ar1').on('change paste keyup', function (e) {
        if($("#ar1").val().length == 0) {
            $('#lng1, #covw1, #covl1').prop('disabled', false);
            $('#wi1').prop('disabled', false);
            $('#lng1').css('background', '#4cae4c');
            $('#wi1').css('background', '#4cae4c');
        } else {
            $('#lng1, #covw1, #covl1').prop('disabled', true);
            $('#wi1').prop('disabled', true);
            $('#lng1').css('background', 'white');
            $('#wi1').css('background', 'white');
        }
    });
    $('#ar1').on('change keyup', function() {
        if($('#cfa1').val() === "") {
            $('#vfta1').text($(this).val());
        } else {

        }
    });
    $('#lng1, #wi1').on('change paste keyup', function (e) {
        if($("#wi1, lng1").val().length == 0) {
            $('#ar1, #cova1').prop('disabled', false);
            $('#ar1').css('background', "#4cae4c");
        } else {
            $('#ar1, #cova1').prop('disabled', true);
            $('#ar1').css('background', "white");
        }
    });
    $('#cova1').change(function () {
        var name = $('#cova1').find(":selected").text();
        if (name === "Acre(s)") {
            conversionFactor1 = 43560;
        } else if (name === "Hectare(s)") {
            conversionFactor1 = 107639;
        } else if (name === "Square Feet") {
            conversionFactor1 = 1;
        } else if (name === "Square Kilometer(s)") {
            conversionFactor1 = 10763911;
        } else if (name === "Square Meter(s)") {
            conversionFactor1 = 10.76;
        } else if (name === "Square Miles") {
            conversionFactor1 = 27878400;
        } else if (name === "Square Yard(s)") {
            conversionFactor1 = 9;
        }
        $('#cfa1').val(conversionFactor1);
        $('#vfta1').val(conversionFactor1 * $('#ar1').val());
        $('#cfa1').text(conversionFactor1);
        $('#vfta1').text(conversionFactor1 * $('#ar1').val());
    });
    $('#covl1').change(function () {
        var name = $('#covl1').find(":selected").text();
        if (name === "foot (feet)") {
            conversionFactor1 = 1;
        } else if (name === "mile(s)") {
            conversionFactor1 = 5280;
        } else if (name === "kilometer(s)") {
            conversionFactor1 = 3281;
        } else if (name === "meter(s)") {
            conversionFactor1 = 3.28;
        } else if (name === "yard(s)") {
            conversionFactor1 = 3;
        }
        $('#cfl1').text(conversionFactor1);
        $('#vftl1').text(conversionFactor1 * $('#lng1').val());
    });
    $('#covw1').change(function () {
        var name = $('#covw1').find(":selected").text();
        if (name === "foot (feet)") {
            conversionFactor1 = 1;
        } else if (name === "mile(s)") {
            conversionFactor1 = 5280;
        } else if (name === "kilometer(s)") {
            conversionFactor1 = 3281;
        } else if (name === "meter(s)") {
            conversionFactor1 = 3.28;
        } else if (name === "yard(s)") {
            conversionFactor1 = 3;
        }
        $('#cfw1').text(conversionFactor1);
        $('#vftw1').text(conversionFactor1 * $('#wi1').val());
    });
});

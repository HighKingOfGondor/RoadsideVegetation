$(document).ready(function () {

    $("#second-calc-slide").hide();
    $("#third-calc-slide").hide();


    $(function() {
        $('#info-popover').popover({html:true})
            .on('shown.bs.popover', function () {
                $('#information-popovercontent').bootstrapTable();
            });
    });

    $('html').on('click', function(e) {
        if (typeof $(e.target).data('original-title') == 'undefined' && !$(e.target).parents().is('.popover.in')) {
            $('[data-original-title]').popover('hide');
        }
    });

    $('#area-calculator').on('hide.bs.modal', function () {
        $("#first-calc-slide").show();
        $("#second-calc-slide").hide();
        $("#third-calc-slide").hide();
    })


    $("#lw").on("click", function () {
        $("#first-calc-slide").hide();
        $("#second-calc-slide").show();
        $("#third-calc-slide").hide();
    });
    $("#ar").on("click", function () {
        $("#first-calc-slide").hide();
        $("#second-calc-slide").hide();
        $("#third-calc-slide").show();
    });

    $('.dropdown-toggle').dropdown()

});


function setMeasurement() {
}

function LW() {
    var fields = new Array();
    for (var i = 1; i <= 5; i++) {
        var length = parseFloat($("#length-value" + i).val());
        var width = parseFloat($("#width-value" + i).val());
        var multiplier = parseFloat($("#mult-value" + i).val());
        var measurement = $('input[name=LWmeasurementRadios' + i + ']:checked').val();
        var slope = $('input[name=slopeRadio' + i + ']:checked').val();
        var obj = {
            length: length,
            width: width,
            multiplier: multiplier,
            measurement: measurement,
            slope: slope
        }
        fields.push(obj);
    }
    for (var i = 0; i < fields.length; i++) {
        console.log(fields[i]);
    }

    var mowedArea = $("#mowed-area-seed");
    var nonMowedArea= $("#non-mowed-area-seed");
    var coreMixTotal = $("#how-large-is-area-core-mix");

    var m = 0;
    var n = 0;
    for (var i = 0; i < fields.length; i++) {
        var total = 0;
        if (fields[i].measurement === "option1") {
            total = convertToAcres(fields[i].length * fields[i].width, "sfeet");
        } else if (fields[i].measurement === "option2") {
            total = convertToAcres(fields[i].length * fields[i].width, "smiles");
        } else if (fields[i].measurement === "option3") {
            total = convertToAcres(fields[i].length * fields[i].width, "skilo");
        } else if (fields[i].measurement === "option4") {
            total = convertToAcres(fields[i].length * fields[i].width, "smeters");
        } else if (fields[i].measurement === "option5") {
            total = convertToAcres(fields[i].length * fields[i].width, "syards");
        }

        total *= fields[i].multiplier;
        console.log(total);
        if (fields[i].slope == "yes") {
            n += total;
        } else {
            m += total;
        }

    }
    mowedArea.val(m);
    nonMowedArea.val(n);
    coreMixTotal.val(n + m);

}

function A() {
    var fields = new Array();
    for (var i = 1; i <= 5; i++) {
        var area = parseFloat($("#area-value" + i).val());
        var multiplier = parseFloat($("#mult-value" + i + "a").val());
        var measurement = $('input[name=AmeasurementRadios' + i + ']:checked').val();
        var slope = $('input[name=slopeRadioA' + i + ']:checked').val();
        var obj = {
            area: area,
            multiplier: multiplier,
            measurement: measurement,
            slope: slope
        }
        fields.push(obj);
    }
    for (var i = 0; i < fields.length; i++) {
        console.log(fields[i]);
    }

    var mowedArea = $("#mowed-area-seed");
    var nonMowedArea= $("#non-mowed-area-seed");
    var coreMixTotal = $("#how-large-is-area-core-mix");

    var m = 0;
    var n = 0;
    for (var i = 0; i < fields.length; i++) {
        var total = 0;
        if (fields[i].measurement === "option1") {
            total = convertToAcres(fields[i].area, "sfeet");
        } else if (fields[i].measurement === "option2") {
            total = fields[i].area;
        } else if (fields[i].measurement === "option3") {
            total = convertToAcres(fields[i].area, "hect");
        } else if (fields[i].measurement === "option4") {
            total = convertToAcres(fields[i].area, "skilo");
        } else if (fields[i].measurement === "option5") {
            total = convertToAcres(fields[i].area, "syards");
        } else if (fields[i].measurement === "option6") {
            total = convertToAcres(fields[i].area, "smeters");
        } else if (fields[i].measurement === "option7") {
            total = convertToAcres(fields[i].area, "smiles");
        }

        total *= fields[i].multiplier;
        console.log(total);
        if (fields[i].slope == "yes") {
            n += total;
        } else {
            m += total;
        }

    }
    mowedArea.val(m);
    nonMowedArea.val(n);
    coreMixTotal.val(n + m);

}

function convertToAcres(num, convert) {

    var converted = 0;
    if (convert === "sfeet") {
        converted = 0.000022957 * num;
    } else if (convert === "smiles") {
        converted = 640 * num;
    } else if (convert === "skilo") {
        converted = 247.11 * num;
    } else if (convert === "smeters") {
        converted = 0.000247105 * num;
    } else if (convert === "syards") {
        converted = 0.00020661 * num;
    } else if (convert === "hect") {
        converted = 2.47105 * num;
    }
    return converted;
}

function fillForm(divID) {

}

function calculateTable() {

}


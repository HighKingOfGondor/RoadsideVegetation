var inc = 2;

$(document).ready(function () {
    $(function() {
        $('#info-popover').popover({html:true})
            .on('shown.bs.popover', function () {
                $('#information-popovercontent').bootstrapTable();
            });
    });

    $('#download-pdf').on("click", function () {

        $("#slide-one-content").show();
        $("#slide-two-content").show();
        $("#slide-three-content").show();

        let doc = new jsPDF('l', 'pt', 'a4');

        var elements = ["slide-one-content", "slide-two-content", "slide-three-content"];
        var i = 0;
        var recursiveAddHtml = function () {
            if (i < elements.length) {
                doc.addHTML(document.getElementById(elements[i]), 5, 5, function () {
                    console.log("here");
                    i++;
                    doc.addPage();
                    recursiveAddHtml();
                });
            } else {
                doc.save("test");
            }
        };

        recursiveAddHtml();

        $("#slide-one-content").hide();
        $("#slide-two-content").hide();
        $("#slide-three-content").hide();

    });


    $("#how-many-core-seed-mixes").on("change", function () {
        var val = $("#how-many-core-seed-mixes").val();
        console.log(val);
    });

});


function cloneTable () {
    if (inc <= 5) {
        var div = document.getElementById("chart");
        var table = document.getElementById("core-mix-clone");
        var clone = table.cloneNode(true);
        clone.id = "core-mix-clone" + inc;
        div.appendChild(clone);

        document.getElementById("core-mix-clone" + inc).caption.innerHTML = "Core Mix #" + inc;

        inc+=1;
    }
}

function fillForm () {
    var user = sessionStorage.getItem("calculator_user");
    if (user) {
        user = JSON.parse(user);
        console.log(user);
        $('#total-area').val(user.areaTotals.totalArea.AC.toFixed(2));
        $('#mowed-area').val(user.areaTotals.totalMowArea.AC.toFixed(2));
        $('#non-mowed-area').val(user.areaTotals.totalNonMowArea.AC.toFixed(2));

    }
}



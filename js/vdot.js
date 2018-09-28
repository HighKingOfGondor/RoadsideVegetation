var inc = 2;

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

function saveAsPDF () {
    let doc = new jsPDF();
    doc.addHTML(document.body, function () {
        doc.save('test.pdf');
    });
}

$(document).ready(function () {
    $('#save-as-pdf').click(function () {
        console.log("here");
        let doc = new jsPDF('p','pt','a4');
        doc.addHTML($('#chart').css('background', 'white'), function () {
            doc.save('test.pdf');
        });
    });
});


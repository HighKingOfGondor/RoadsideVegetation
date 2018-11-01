$(document).ready(function () {
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

});



// ********* NOT USED IN REDESIGN **********************
// function fillForm () {
//     var user = sessionStorage.getItem("calculator_user");
//     if (user) {
//         user = JSON.parse(user);
//         console.log(user);
//         $('#total-area').val(user.areaTotals.totalArea.AC.toFixed(2));
//         $('#mowed-area').val(user.areaTotals.totalMowArea.AC.toFixed(2));
//         $('#non-mowed-area').val(user.areaTotals.totalNonMowArea.AC.toFixed(2));
//
//     }
// }



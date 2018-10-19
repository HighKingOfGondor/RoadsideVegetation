$(document).ready(function () {

   let page = 1;
   let pageCount = 4

   let coreMixDivs = ["slide-three-content"];


   $("#slide-two-content").hide();
   $("#" + coreMixDivs[0]).hide();
   $("#final-slide").hide();

   $("#prev-slide").on("click", function () {
       if (page > 1) {

           page -= 1;

           switch (page) {
               case 1: {
                   $("#slide-one-content").show(500);
                   $("#slide-two-content").hide();
                   for (var i = 0; i < coreMixDivs.length; i++) {
                       $("#" + coreMixDivs[i]).hide();
                   }
                   $("#final-slide").hide(); break;
               } case 2: {
                   $("#slide-two-content").show(500);

                   $("#slide-one-content").hide();
                   for (var i = 0; i < coreMixDivs.length; i++) {
                       $("#" + coreMixDivs[i]).hide();
                   }
                   $("#final-slide").hide(); break;
               } case 3: {
                   for (var i = 0; i < coreMixDivs.length; i++) {
                       $("#" + coreMixDivs[i]).hide();
                   }

                   $("#" + coreMixDivs[0]).show(500);

                   $("#slide-one-content").hide();
                   $("#slide-two-content").hide();
                   $("#final-slide").hide(); break;
               } case 4: {
                   for (var i = 0; i < coreMixDivs.length; i++) {
                       $("#" + coreMixDivs[i]).hide();
                   }

                   if (page === pageCount) {
                       $("#final-slide").show(500);
                   } else {
                       $("#" + coreMixDivs[1]).show(500);
                   }

                   $("#slide-one-content").hide();
                   $("#slide-two-content").hide(); break;
               } case 5: {
                   for (var i = 0; i < coreMixDivs.length; i++) {
                       $("#" + coreMixDivs[i]).hide();
                   }

                   if (page === pageCount) {
                       $("#final-slide").show(500);
                   } else {
                       $("#" + coreMixDivs[1]).show(500);
                   }

                   $("#slide-one-content").hide();
                   $("#slide-two-content").hide(); break;
               } case 6: {
                   for (var i = 0; i < coreMixDivs.length; i++) {
                       $("#" + coreMixDivs[i]).hide();
                   }

                   if (page === pageCount) {
                       $("#final-slide").show(500);
                   } else {
                       $("#" + coreMixDivs[2]).show(500);
                   }

                   $("#slide-one-content").hide();
                   $("#slide-two-content").hide(); break;
               } case 7: {
                   for (var i = 0; i < coreMixDivs.length; i++) {
                       $("#" + coreMixDivs[i]).hide();
                   }

                   if (page === pageCount) {
                       $("#final-slide").show(500);
                   } else {
                       $("#" + coreMixDivs[3]).show(500);
                   }

                   $("#slide-one-content").hide();
                   $("#slide-two-content").hide(); break;
               } case 8: {
                   for (var i = 0; i < coreMixDivs.length; i++) {
                       $("#" + coreMixDivs[i]).hide();
                   }

                   if (page === pageCount) {
                       $("#final-slide").show(500);
                   } else {
                       $("#" + coreMixDivs[4]).show(500);
                   }

                   $("#slide-one-content").hide();
                   $("#slide-two-content").hide(); break;
               }
           }
       }
   });

    $("#next-slide").on("click", function () {
        if (page < pageCount) {

            page += 1;

            switch (page) {
                case 1: {
                    $("#slide-one-content").show(500);
                    $("#slide-two-content").hide();
                    for (var i = 0; i < coreMixDivs.length; i++) {
                        $("#" + coreMixDivs[i]).hide();
                    }
                    $("#final-slide").hide(); break;
                } case 2: {
                $("#slide-two-content").show(500);

                $("#slide-one-content").hide();
                for (var i = 0; i < coreMixDivs.length; i++) {
                    $("#" + coreMixDivs[i]).hide();
                }
                $("#final-slide").hide(); break;
            } case 3: {
                for (var i = 0; i < coreMixDivs.length; i++) {
                    $("#" + coreMixDivs[i]).hide();
                }

                $("#" + coreMixDivs[0]).show(500);

                $("#slide-one-content").hide();
                $("#slide-two-content").hide();
                $("#final-slide").hide(); break;
            } case 4: {
                for (var i = 0; i < coreMixDivs.length; i++) {
                    $("#" + coreMixDivs[i]).hide();
                }

                if (page === pageCount) {
                    $("#final-slide").show(500);
                } else {
                    $("#" + coreMixDivs[1]).show(500);
                }

                $("#slide-one-content").hide();
                $("#slide-two-content").hide(); break;
            } case 5: {
                for (var i = 0; i < coreMixDivs.length; i++) {
                    $("#" + coreMixDivs[i]).hide();
                }

                if (page === pageCount) {
                    $("#final-slide").show(500);
                } else {
                    $("#" + coreMixDivs[1]).show(500);
                }

                $("#slide-one-content").hide();
                $("#slide-two-content").hide(); break;
            } case 6: {
                for (var i = 0; i < coreMixDivs.length; i++) {
                    $("#" + coreMixDivs[i]).hide();
                }

                if (page === pageCount) {
                    $("#final-slide").show(500);
                } else {
                    $("#" + coreMixDivs[2]).show(500);
                }

                $("#slide-one-content").hide();
                $("#slide-two-content").hide(); break;
            } case 7: {
                for (var i = 0; i < coreMixDivs.length; i++) {
                    $("#" + coreMixDivs[i]).hide();
                }

                if (page === pageCount) {
                    $("#final-slide").show(500);
                } else {
                    $("#" + coreMixDivs[3]).show(500);
                }

                $("#slide-one-content").hide();
                $("#slide-two-content").hide(); break;
            } case 8: {
                for (var i = 0; i < coreMixDivs.length; i++) {
                    $("#" + coreMixDivs[i]).hide();
                }

                if (page === pageCount) {
                    $("#final-slide").show(500);
                } else {
                    $("#" + coreMixDivs[4]).show(500);
                }

                $("#slide-one-content").hide();
                $("#slide-two-content").hide(); break;
            }
            }
        }
    });

    $("#how-many-core-seed-mixes").on("change", function () {
        var val = $("#how-many-core-seed-mixes").val();
        cloneDiv();
    });

    var cloneDiv = function () {
        var totalMixes = $("#how-many-core-seed-mixes").val();
        if (totalMixes > 5) {
            totalMixes = 5;
            $("#how-many-core-seed-mixes").val(5);
            $("#how-many-core-seed-mixes").text(5);
        }
        if (totalMixes > coreMixDivs.length) {
            for (var i = coreMixDivs.length; i < totalMixes; i++) {
                $('#slide-three-content').clone().attr('id', "clone" + coreMixDivs.length).insertAfter("#slide-three-content");
                $("clone" + coreMixDivs.length).show();
                coreMixDivs.push("clone" + coreMixDivs.length);
                pageCount++;
            }
        } else if (coreMixDivs.length > totalMixes) {
            for (var i = coreMixDivs.length; i > totalMixes; i--) {
                var remove = coreMixDivs.pop();
                $('#' + remove).remove();
            }
        }

    }
});


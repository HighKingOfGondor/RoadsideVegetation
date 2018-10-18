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



});

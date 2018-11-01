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
                       $("#final-slide").hide();
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
                       $("#final-slide").hide();
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
                       $("#final-slide").hide();
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
                       $("#final-slide").hide();
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
                       $("#final-slide").hide();
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
                    $("#final-slide").hide();
                    $("#" + coreMixDivs[1] + " h4:first").text("Core Mix 2");
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
                    $("#" + coreMixDivs[2]).show(500);
                    $("#final-slide").hide();
                    $("#" + coreMixDivs[2] + " h4:first").text("Core Mix 3");
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
                    $("#" + coreMixDivs[3]).show(500);
                    $("#final-slide").hide();
                    $("#" + coreMixDivs[3] + " h4:first").text("Core Mix 4");
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
                    $("#" + coreMixDivs[4]).show(500);
                    $("#final-slide").hide();
                    $("#" + coreMixDivs[4] + " h4:first").text("Core Mix 5");
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
                    $("#" + coreMixDivs[5]).show(500);
                    $("#final-slide").hide();
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
                var elem = "clone" + coreMixDivs.length;
                $('#slide-three-content').clone().attr('id', elem).insertAfter("#slide-three-content");
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

    $('#download-pdf').on("click", function () {

        $("body").addClass("loading");

        var totalMixes = $("#how-many-core-seed-mixes").val();
        if (totalMixes > 5) {
            totalMixes = 5;
            $("#how-many-core-seed-mixes").val(5);
            $("#how-many-core-seed-mixes").text(5);
        }

        $("#slide-one-content").show();
        $("#slide-two-content").show();
        $("#slide-three-content").show();

        var pdf = new jsPDF('l', 'pt', 'letter');

        html2canvas($("#slide-one-content")[0], {
            allowTaint: true,
            onrendered: function(canvas) {
                var ctx = canvas.getContext('2d');
                var imgData = canvas.toDataURL("image/png", 1.0);
                var width = 810;
                var height = 580;
                pdf.addImage(imgData, 'PNG', 20, 20, (width - 40), (height));
            }
        });
        html2canvas($("#slide-two-content")[0], {
            allowTaint: true,
            onrendered: function(canvas) {
                var ctx = canvas.getContext('2d');
                var imgData = canvas.toDataURL("image/png", 1.0);
                var width = 810;
                var height = 580;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 20, 20, (width - 40), (height));
            }
        });
        html2canvas($("#slide-three-content")[0], {
            allowTaint: true,
            onrendered: function(canvas) {
                var ctx = canvas.getContext('2d');
                var imgData = canvas.toDataURL("image/png", 1.0);
                var width = 810;
                var height = 580;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 20, 20, (width - 40), (height));
            }
        });
        if (coreMixDivs.length > 1) {
            for (var i = 1; i < coreMixDivs.length; i++) {
                $("#" + coreMixDivs[i]).show();
                html2canvas($("#"+coreMixDivs[i])[0], {
                    allowTaint: true,
                    onrendered: function(canvas) {
                        var ctx = canvas.getContext('2d');
                        var imgData = canvas.toDataURL("image/png", 1.0);
                        var width = 810;
                        var height = 580;
                        pdf.addPage();
                        pdf.addImage(imgData, 'PNG', 20, 20, (width - 40), (height));
                    }
                });
            }
        }
        setTimeout(function() {

            //jsPDF code to save file

            $("#slide-one-content").hide();
            $("#slide-two-content").hide();
            for (var i = 0; i < coreMixDivs.length; i++) {
                $("#" + coreMixDivs[i]).hide();
            }

            pdf.save('sample.pdf');

            $("body").removeClass("loading");
        }, 0);

    });

});


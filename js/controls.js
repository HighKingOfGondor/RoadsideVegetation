$(document).ready(function () {

   let page = 1;

   $("#slide-two-content").hide();
   $("#slide-three-content").hide();
   $("#final-slide").hide();

   $("#slide-1").on("click", function () {
       $("#slide-one-content").show(500);
       $("#slide-two-content").hide();
       $("#slide-three-content").hide();
       $("#final-slide").hide();
   });
   $("#slide-2").on("click", function () {
       $("#slide-two-content").show(500);

       $("#slide-one-content").hide();
       $("#slide-three-content").hide();
       $("#final-slide").hide();
   });

   $("#slide-3").on("click", function () {
       $("#slide-three-content").show(500);

       $("#slide-one-content").hide();
       $("#slide-two-content").hide();
       $("#final-slide").hide();
   });
   $("#slide-4").on("click", function () {
       $("#final-slide").show(500);

       $("#slide-one-content").hide();
       $("#slide-two-content").hide();
       $("#slide-three-content").hide();
   });

   $("#prev-slide").on("click", function () {
       if (page > 1) {

           page -= 1;

           switch (page) {
               case 1: {
                   $("#slide-one-content").show(500);
                   $("#slide-two-content").hide();
                   $("#slide-three-content").hide();
                   $("#final-slide").hide(); break;
               } case 2: {
                   $("#slide-two-content").show(500);

                   $("#slide-one-content").hide();
                   $("#slide-three-content").hide();
                   $("#final-slide").hide(); break;
               } case 3: {
                   $("#slide-three-content").show(500);

                   $("#slide-one-content").hide();
                   $("#slide-two-content").hide();
                   $("#final-slide").hide(); break;
               } case 4: {
                   $("#final-slide").show(500);

                   $("#slide-one-content").hide();
                   $("#slide-two-content").hide();
                   $("#slide-three-content").hide(); break;
               }
           }
       }
   });

    $("#next-slide").on("click", function () {
        if (page < 4) {

            page += 1;

            switch (page) {
                case 1: {
                    $("#slide-one-content").show(500);
                    $("#slide-two-content").hide();
                    $("#slide-three-content").hide();
                    $("#final-slide").hide(); break;
                } case 2: {
                    $("#slide-two-content").show(500);

                    $("#slide-one-content").hide();
                    $("#slide-three-content").hide();
                    $("#final-slide").hide(); break;
                } case 3: {
                    $("#slide-three-content").show(500);

                    $("#slide-one-content").hide();
                    $("#slide-two-content").hide();
                    $("#final-slide").hide(); break;
                } case 4: {
                    $("#final-slide").show(500);

                    $("#slide-one-content").hide();
                    $("#slide-two-content").hide();
                    $("#slide-three-content").hide(); break;
                }
            }
        }
    });

});

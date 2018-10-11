$(document).ready(function () {
   $("#slide-two-content").hide();
   $("#slide-three-content").hide();
   $("#final-slide").hide();

   $("#slide-1").on("click", function () {
       $("#slide-one-content").show(1100);
       $("#slide-two-content").hide();
       $("#slide-three-content").hide();
       $("#final-slide").hide();
   });
   $("#slide-2").on("click", function () {
       $("#slide-two-content").show(1100);

       $("#slide-one-content").hide();
       $("#slide-three-content").hide();
       $("#final-slide").hide();
   });

   $("#slide-3").on("click", function () {
       $("#slide-three-content").show(1100);

       $("#slide-one-content").hide();
       $("#slide-two-content").hide();
       $("#final-slide").hide();
   });
   $("#slide-4").on("click", function () {
       $("#final-slide").show(1100);

       $("#slide-one-content").hide();
       $("#slide-two-content").hide();
       $("#slide-three-content").hide();
   });
});

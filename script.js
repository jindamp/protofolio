 $(".button-collapse").sideNav();
 $(document).ready(function () {
     $('.collapsible').collapsible();
     
     
     var $window = $(window);
     // Function to handle changes to style classes based on window width
     function checkWidth() {
         if ($window.width() < 650) {
             $('#exp-text').addClass('center');
             $('#exp-text-2').addClass('center');
             $('#exp-text-3').addClass('center');
         };
         if ($window.width() > 650) {
             $('#exp-text').addClass('left');
             $('#exp-text-2').addClass('left');
             $('#exp-text-3').addClass('left');
         };
         if ($window.width() >= 980) {
             $('#exp-text').addClass('left');
             $('#exp-text-2').addClass('left');
             $('#exp-text-3').addClass('left');
         }
     }
     // Execute on load
     checkWidth();
     // Bind event listener
     $(window).resize(checkWidth);
 });
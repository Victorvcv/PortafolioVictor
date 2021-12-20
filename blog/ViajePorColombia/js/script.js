"use strict";
/************* Ajax Mailchimp ****************/

$('#mc-form').ajaxChimp({
   url: 'http://doelit.us10.list-manage.com/subscribe/post?u=b02e4f21e264536eff4820875&amp;id=4d57faf2cb'
      /* Replace Your AjaxChimp Subscription Link */
});



/*************************************************

    NO NEED TO CHANGE ANYTHING BELOW THIS LINE 
    
**************************************************/
/*************** waypoint jQuery *****************/

$(function() {
   function onScrollInit(items, trigger) {
      items.each(function() {
         var Element = $(this),
            AnimationDelay = Element.attr('data-animation-delay'),
            AnimationDuration = Element.attr('data-animation-duration');

         var Trigger = (trigger) ? trigger : Element;

         Trigger.waypoint(function(direction) {
            Element.css({
               '-webkit-animation-delay': AnimationDelay,
               '-moz-animation-delay': AnimationDelay,
               'animation-delay': AnimationDelay,
               '-webkit-animation-duration': AnimationDuration,
               '-moz-animation-duration': AnimationDuration,
               'animation-duration': AnimationDuration
            });
            Element.addClass('animated');
         }, {
            triggerOnce: true,
            offset: '90%'
         });
      });
   }
   onScrollInit($('.animation'));

   


   /************* custom class add in modal jQuery ****************/

   $(document)
      .on('hidden.bs.modal', '.modal', function() {
         $(document.body).removeClass('modal-scrollbar');
      })
      .on('show.bs.modal', '.modal', function() {
         // Bootstrap's .modal-open class hides any scrollbar on the body,
         // so if there IS a scrollbar on the body at modal open time, then
         // add a right margin to take its place.
         if ($(window).height() < $(document).height()) {
            $(document.body).addClass('modal-scrollbar');
         }
      });

});





/************* Feature iphone ****************/
// bootstrap scroll spy
$('body').scrollspy({
   target: '.sidebar'
});

/************* Sidebar menu ****************/
$("#menu-toggle").on("click", function(e) {
   e.preventDefault();
   $("#sidebar-wrapper").toggleClass("active");
   e.stopPropagation();
});

$("#menu-close").on("click", function(e) {
   e.preventDefault();
   $("#sidebar-wrapper").removeClass("active");
   e.stopPropagation();
});
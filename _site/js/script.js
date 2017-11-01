/*HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
HH				Overlay
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH*/
(function() {
	var 
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		}
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

})();


$(document).ready(function() {
    $("#client-speech").owlCarousel({
        autoPlay: 3000,
        navigation : false, // Show next and prev buttons
        slideSpeed : 700,
        paginationSpeed : 1000,
        singleItem:true
    });
});




 $('#screenshots > a').nivoLightbox({effect: 'fadeScale'});

  var owl = $("#screenshots");
 
  owl.owlCarousel({
    autoPlay: false,
    pagination: false,
    stopOnHover: true,
    items: 5,
  });



  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
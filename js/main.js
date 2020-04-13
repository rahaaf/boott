 
 $ (function () {
	// body...
	'use strict'; 
	//Adjust slider height

	var winH     = $(window).height(),

	    upperH   = $('.upper-bar').innerHeight(),

	    navH     = $('.navbar').innerHeight();


		$('.slider, .carousel-item').height(winH - ( upperH + navH ));


	//featured work shuffle
	$('.featured-work ul li').on('click',function() {

		$(this).addClass('active').siblings().removeClass('active');
		if($(this).data('class') === 'All') {
			$('.shuffle-images .col-sm').css('opacity',1);
		} else {
			$('.shuffle-images .col-sm').css('opacity','.8');
			$($(this).data('class')).parent().css('opacity',1);
		}
	});

		
});
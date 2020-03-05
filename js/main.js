window.addEventListener('DOMContentLoaded', () => {
  'use strict';

	/*choise slider*/
	$('#choiseSlider').slick({
		slidesToShow: 3,
		centerMode: true,
		infinity: true,
		draggable: false,
		swipe: false,
		prevArrow: '<button type="button" class="slick-prev"><span><img src="images/choise-arrow.png" alt="arrow" /></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span><img src="images/choise-arrow.png" alt="arrow" /></span></button>',
		centerPadding: '250px',
		speed: 500,
		responsive: [
			{
		      breakpoint: 991,
		      settings: {
		        centerPadding: '200px',
		        draggable: false
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        centerPadding: '150px',
		        draggable: false
		      }
		    },

		    {
		      breakpoint: 577,
		      settings: {
		        centerPadding: '70px',
		        draggable: false
		      }
		    },
		]
	});
});

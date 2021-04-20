    $(document).ready(function(){
      $('.popup-btn').on('click', function(event) {
        event.preventDefault();
            $('.popup').fadeIn();
              });
      $('.popup-close').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeOut();
      });
  $('.features-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button class="prev"></button>',
        nextArrow: '<button class="next"></button>',
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        prevArrow: '<button class="prev"></button>',
        slidesToScroll: 1,
        nextArrow: '<button class="next"></button>',
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"></button>',
        nextArrow: '<button class="next"></button>',
      }
    }
  ]
});
	
});
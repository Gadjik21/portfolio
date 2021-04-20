let popUp = document.querySelector('.popup'),
      popUpBtn = document.querySelectorAll('.popup-button'),
      close = document.querySelector('.popup-close');

      function openModal() {
          popUp.classList.add('show');
          popUp.classList.remove('hide');
          // Либо вариант с toggle - но тогда назначить класс в верстке
          // document.body.style.overflow = 'hidden';
        };

        popUpBtn.forEach(btn => {
            btn.addEventListener('click', openModal)
        });

        function closeModal() {
            popUp.classList.add('hide');
            popUp.classList.remove('show');
            // Либо вариант с toggle - но тогда назначить класс в верстке
            document.body.style.overflow = '';
        }
        close.addEventListener('click', closeModal);

        popUp.addEventListener('click', (event) => {
            if (event.target === popUp) {
                closeModal();
            }
        });

     // function showModalByScroll() {
     //  if (window.pageYOffset + document.documentElement.clientHeight >= 
     //        document.documentElement.scrollHeight) {
     //          openModal();
     //          window.removeEventListener('scroll', showModalByScroll);
     //          }
     //    }
     //    window.addEventListener('scroll', showModalByScroll);
      


  $(document).ready(function(){
  $('.features-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev"></button>',
        slidesToScroll: 2,
        nextArrow: '<button class="next"></button>',
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"></button>',
        nextArrow: '<button class="next"></button>',
      }
    }
  ]
});
  $('.feadback-block').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="feadback-prev"></button>',
      nextArrow: '<button class="feadback-next"></button>',
  })
});
  let popUp = document.querySelector('.popup'),
  popUpBtn = document.querySelectorAll('.popup-button'),
  close = document.querySelector('.popup-close');

function openModal() {
  popUp.classList.add('show');
  popUp.classList.remove('hide');
}

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

$(document).ready(function () {
  $("#phone-1").mask("+7 (999) 999 99-99");
  $("#phone-2").mask("+7 (999) 999 99-99");
  $("#phone-3").mask("+7 (999) 999 99-99");
  $("#phone-4").mask("+7 (999) 999 99-99");
  $("#phone-5").mask("+7 (999) 999 99-99");
  $('.features-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
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
  });
  // Показывать карту только тогда когда докрутили
  var map = $('.map');
  var mapTop = map.offset().top;
  $(window).bind('scroll', function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > mapTop) {
      $('.map').html(
        '<script src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A98f2ee2be5476d383c6dd19b9184b8428563ebb84de9431b5bedc8dae59c7c9c&amp;width=100%25&amp;height=250&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind('scroll');
    }
  });
  $('form').submit(function(event) {
			event.preventDefault();
			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				alert("Сообщение успешно отправлено");
				$("form").trigger("reset");
			});
			return false;
		});
});
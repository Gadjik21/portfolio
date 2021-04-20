(function () {
      var toggle = document.querySelector('.dropdown__toggle');
      toggle.addEventListener('click', function (event) {
        event.preventDefault();
        var dropdown = event.target.parentNode;
        dropdown.classList.toggle('is-open');
      });
    }());
    $(document).ready(function() {
    $('.open-modal').on('click', function() {
        $('.modal').fadeIn();
    });
    $('.modal-close').on('click', function() {
        $('.modal').fadeOut();
    });
    
    $('.popup-open').on('click', function() {
        $('.popup').fadeIn();
    });
    $('.popup-close').on('click', function() {
        $('.popup').fadeOut();
    });
});
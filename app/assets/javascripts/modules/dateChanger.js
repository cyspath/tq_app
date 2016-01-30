$(document).ready(function() {

  $(window).on("scroll", function() {
    $('.events-index__container-inner').each(function(idx, val) {

      if ($('#date-changer__container').offset().top < 75) {
        $('#date-changer__container').hide()
      }

      if (this.getBoundingClientRect().top <= 5) {
        var dateChanger = document.getElementById('date-changer')
        dateChanger.innerHTML = this.id

        if ($('#date-changer__container').offset().top >= 67) {
          $('#date-changer__container').show()
        }

      }
    })
  })
})

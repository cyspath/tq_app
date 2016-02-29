$(document).ready(function() {

  $(window).on("scroll", function() {
    $('.events-index__container-inner').each(function(idx, val) {

      if ($('#date-changer__container').offset().top < (200 + 80)) {
        $('#date-changer__container').hide()
      }

      if (this.getBoundingClientRect().top <= 5) {
        var dateChanger = document.getElementById('date-changer')
        dateChanger.innerHTML = this.id

        if ($('#date-changer__container').offset().top >= 70) {
          $('#date-changer__container').show()
        }

      }
    })
  })
})

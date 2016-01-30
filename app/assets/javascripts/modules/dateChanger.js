$(document).ready(function() {
  $(window).on("scroll", function() {
    $('.events-index__container-inner').each(function(idx, val) {
      if (this.getBoundingClientRect().top <= 40) {
        document.getElementById('date-changer').innerHTML = this.id
      }
    })
  })
})


$('.bi-list').ready(function () {
  $('#slide').hide();
  $('.bi-list').on('click', function () {
    $('#slide').slideToggle();
    $('.bi-list').toggleClass('bi bi-microsoft')

  });


})
$(document).ready(function() {
  $('.accordion-list').each(function(index) {
    $(this)
      .find('li').first()
      .find('a').addClass('active')
      .next().addClass('show').show()
  });

  $('.accordion-list').on('click', '.tab-anchor', function(event) {
    event.preventDefault();
    let tabMenu = $(this).closest('.accordion-list'); 

    if(!$(this).hasClass('active')) {
      tabMenu
        .find('.show')
        .removeClass('show')
        .hide()

      $(this)
        .next()
        .toggleClass('show')
        .toggle();

      tabMenu
        .find('.active')
        .removeClass('active');

      $(this).addClass('active');
    }
  });
});


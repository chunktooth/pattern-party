let activeTab = 1;

 if($('.tab-list:last-child').hasClass('active'))
    activeTab=1;
  else
    activeTab++;
 
$('.tab-list:last-child('+activeTab+') > a').trigger('click');

$('.tab-content').hide();

$('.tab-list:first')
  .addClass('active')
  .show();

$('.tab-content:first')
  .show();

$('.tab-list').on('click', function() {
  $('.tab-list').removeClass('active');
  $(this).toggleClass('active');
  $('.tab-content').hide();
});

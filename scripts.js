// $('.tab-content').hide();
// $('.tab-content:first').show();

// $('.tab-list').on('click', function() {
//   $('.tab-list').removeClass('active');
//   $(this).addClass('active');

//   let tabId = $(this).find('a').attr('href');
  
//   console.log(tabId)

//   $('.tab-list').each(function(i, tabList) {
//     if(tabList)
//   });

// });


$('.menu-header').on('click', function() {
  $('.nav-menu, .search-bar')
  .toggleClass('hidden-menu');
});
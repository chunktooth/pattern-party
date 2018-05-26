$('.tab-list-pc').on('click', toggleTabs);
$('.tab-content').hide();
$('.tab-content:first').show();
$('.tab-list-mobile').on('click', expandTabs);
$('.menu-header').on('click', toggleMenu);


function toggleTabs() {
  let tabList = $('.tab-list-pc');
  let tabId = $(this).attr('id');

  tabList.each(function(i, li) {
    if($(li).attr('id') === tabId) {
      tabList.removeClass('active');
      $(this).addClass('active');
      displayContent(tabId);
    }
  });
};

function displayContent(tabId) {
  let tabContent = $('.tab-content');

  tabContent.each(function(i, article) {
    if($(article).attr('id') === tabId) {
      $(article).show();
    } else {
      $(article).hide()
    }
  });
}

function expandTabs() { 
  let tabList = $('.tab-list-mobile');
  
  $(this).toggleClass('active');
  console.log($(this))

  tabList.each(function(i, li) {  
    if($(li).hasClass('active')) {
      $(this).find('.expand').text('-');
    } else {
      $(li).removeClass('active');
      $(this).find('.expand').text('+');
    }
  });
};
  
function toggleMenu() {
  $('.nav-menu, .search-bar')
  .toggleClass('hidden-menu');
};
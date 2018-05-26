$('.tab-list').on('click', toggleTabs);
$('.menu-header').on('click', toggleNav);
$('.tab-content').hide();
$('.tab-content:first').show();

function toggleTabs() {
  let tabList = $('.tab-list');
  let tabId = $(this).attr('id');

  tabList.each(function(i, li) {
    if($(li).attr('id') === tabId) {
      tabList.removeClass('active');
      $(this).addClass('active');
      displayContent(tabId);
    }
  });
}

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

function expandMenu(tabList) {
  tabList.each(function(i, li) {
    if($(li).hasClass('active')) {
      $(this).find('.expand').text('-');
    } else {
      $(this).find('.expand').text('+');
    }
  });
};
  
function toggleNav() {
  $('.nav-menu, .search-bar')
  .toggleClass('hidden-menu');
};
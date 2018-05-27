$(document).ready(function() {
  setDefault();
  $(window).resize(function() {
    location.reload();
  });
});

$('.tab-list-pc').on('click', toggleTabs);
$('.tab-list-mobile').on('click', expandTabs);
$('.menu-header').on('click', toggleMenu);


function setDefault() {
  if($(window).width() <= 555) {
    $('.tab-list-mobile:first').addClass('active');
    $('.expand:first').text('-');
  } else {
    $('.tab-content').hide();
    $('.tab-content:first').show();
  }
}

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
      $(article).hide();
    }
  });
}

function expandTabs() { 
  let tabList = $('.tab-list-mobile');
  let tabId = $(this).attr('id');
  let tabContent = $('.tab-content');

  $(this).toggleClass('active');

  tabList.each(function(i, li) {  
    if($(li).hasClass('active')) {
      $(this).find('.expand').text('-');
    } else {
      $(li).removeClass('active');
      $(this).find('.expand').text('+');
    }
  });
  expandContent(tabContent, tabId);
};

function expandContent(tabContent, tabId) {
  tabContent.each(function(i, article) {
    if($(article).attr('id') === tabId) {
      $(article).toggleClass('hidden');   
    }
  });
};

function toggleMenu() {
  $('.nav-menu, .search-bar')
  .toggleClass('hidden-menu');
};
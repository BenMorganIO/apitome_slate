//= require ./lib/_energize
//= require ./app/_tocify
//= require ./app/_toc
//= require ./app/_lang

$(function() {
  $("#toc").tocify();
  loadToc($("#toc"), ".toc-link", ".toc-list-h2", 10);
  setupLanguages($("body").data("languages"));
  $(".content").imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};

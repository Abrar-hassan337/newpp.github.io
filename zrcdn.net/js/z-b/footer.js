$(document).ready(function() {

  if ($(window).width() < 770) {

    $('#footer-1-click').on('click',function(){
      $("#footer-1-content").slideToggle("slow", function() {
      });
      $('#footer-1-arrow').toggleClass('footer-rotate');
    });
    $('#footer-2-click').on('click',function(){
      $("#footer-2-content").slideToggle("slow", function() {
      });
      $('#footer-2-arrow').toggleClass('footer-rotate');
    });
    $('#footer-3-click').on('click',function(){
      $("#footer-3-content").slideToggle("slow", function() {
      });
      $('#footer-3-arrow').toggleClass('footer-rotate');
    });
    $('#footer-4-click').on('click',function(){
      $("#footer-4-content").slideToggle("slow", function() {
      });
      $('#footer-4-arrow').toggleClass('footer-rotate');
    });

  } else {

    $('#footer-1-content').show();
    $('#footer-2-content').show();
    $('#footer-3-content').show();
    $('#footer-4-content').show();

  }

});

function langSelect(selectobj) {
  var current_url = window.location.href;
  if (current_url.includes('?') === true && current_url.includes('?lang=') === true) {
    window.location.href = '?lang=' + selectobj;
  } else if (current_url.includes('?') === true && current_url.includes('&lang=') === true) {
    var url = new URL(current_url);
    var old_lang = url.searchParams.get('lang');
    current_url = current_url.replace(old_lang, selectobj);
    window.location.href = current_url;
  } else if (current_url.includes('?') === true) {
    window.location.href = current_url + '&lang=' + selectobj;
  } else {
    window.location.href = '?lang=' + selectobj;
  }
}

$(document).ready(function(){
  var cur_url = window.location.href;
  cur_url = cur_url.replace('#!/', '');
  cur_url = cur_url.replace('#!', '');
  window.history.pushState("", "", cur_url);
});

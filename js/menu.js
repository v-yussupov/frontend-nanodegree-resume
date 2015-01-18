/*
	JQuery-based fixed menu
*/

//list of anchors from menuList object's refIDs into string
var menuStr = "";
for (var x in menuList.menu){ menuStr += "#" + menuList.menu[x].refID + ",";}
menuStr = menuStr.substr(0, menuStr.length-1);


var sections = $(menuStr), 
	nav = $('#menu'), 
	nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos < bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
	if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      nav.find('a').removeClass('active');
      sections.removeClass('active'); 
      
	  $(":last").addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
	
  });
});
nav.find('a').on('click', function () {
  var id = $(this).attr('href');
 
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height + 1}, 500);
 
  return false;
});
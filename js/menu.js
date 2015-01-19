/*
	JQuery-based fixed menu
*/

//list of anchors from menuList object's refIDs into string
var menuStr = "";
for (var x in menuList.menu){ menuStr += "#" + menuList.menu[x].refID + ",";}
menuStr = menuStr.substr(0, menuStr.length-1);

//defining the list of selectors for menu
var sections = $(menuStr), 
	nav = $('#menu'), 
	nav_height = nav.outerHeight(); //height of fixed menu calculation
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    //top boundary of section -1px, in order to avoid intersections
	var top = $(this).offset().top - nav_height - 1,
    //bottom boundary of section
	bottom = top + $(this).outerHeight();
	//if within section - manipulate with active class of <a>
    if (cur_pos > top && cur_pos < bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
	//if the page is almost finished then switch to the last section
	if ($(window).scrollTop() + $(window).height() + 5 >= $(document).height()) {
      nav.find('a').removeClass('active');
      sections.removeClass('active'); 
      
	  $(":last").addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
	
  });
});
//animation on click
nav.find('a').on('click', function () {
  var id = $(this).attr('href');
 
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height}, 500);
 
  return false;
});
$(document).ready(function(){
    menu_mobile();
    menu_color_change();
});

function menu_mobile() {
	var pull = $('#pull');
		menu = $('.navbar__ul');
		menuHeight = menu.height();

	$(pull).on('click', function(e) {
    	e.preventDefault();
    	menu.slideToggle();
    });

    $(window).resize(function(){
    	var w = $(window).width();
    	if(w > 320 && menu.is(':hidden')) {
        	menu.removeAttr('style');
    	}
	});
}

function menu_color_change() {
    $('.navbar__link').hover(function(){
        $('.navbar__li').css('background-color','#EA0200');
        $('.navbar__menu_name').css('color','white');
        $('.glyph').css('color','white');
    } , function(){
        $('.navbar__li').css('background-color','white');
        $('.navbar__menu_name').css('color','#737373');
        $('.glyph').css('color','#EA0200');
    });
}
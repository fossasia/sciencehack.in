$(document).ready(function(){

	var stickyNavTop = $('#sticky-navbar').offset().top;
	 
	var stickyNavBar = function(){
	var scrollTop = $(window).scrollTop();
	      
	if (scrollTop > stickyNavTop) { 
	    $('#sticky-navbar').addClass('sticky');
	} else {
	    $('#sticky-navbar').removeClass('sticky'); 
	}

	if (scrollTop > 830) { 
	    $('#sticky-navbar').addClass('sticked');
	    $('#sticky-navbar').removeClass('not-sticked');
	    $('a.navbar-brand img').removeClass('white-image');
	} else {
	    $('#sticky-navbar').removeClass('sticked'); 
	    $('#sticky-navbar').addClass('not-sticked');
	    $('a.navbar-brand img').addClass('white-image');
	}
	};
	stickyNavBar();
	 
	$(window).scroll(function() {
	  stickyNavBar();
	});
});

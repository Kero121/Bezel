$(window).scroll(function() {
	let wscroll = $(window).scrollTop();
	if (wscroll>100) {
		$('#main-nav').css('background-color', '#2c3e50')
		$('#main-nav').css('padding', '10px 40px')
	
	}
	else{
		$('#main-nav').css('padding', '10px 0px')
		$('#main-nav').css('background-color', 'transparent')
		
	}
})

$('nav a').click( function (e) {
	let linkHref= $(e.target).attr('href')
	let sectionOffset = $(linkHref).offset().top
	$('html,body').animate({scrollTop:sectionOffset} , 2000)
	
})
$('#navbtn').click(function(){
		$('#mySidenav').addClass('over_mob');
		$('.over_click').addClass('on');
		$('body').addClass('scroll_mob');
	});

	$('.closebtn').click(function(){
		$('#mySidenav').removeClass('over_mob');
		$('.over_click').removeClass('on');
		$('body').removeClass('scroll_mob');
	});
    
    $('.over_click').click(function(){
		$('.closebtn').trigger('click');
	});
	
	$('.sidenav .direct').on('click', function() {
		$(this).parent().toggleClass('open').children('.mob_menu').collapse('toggle');
		$(this).parent().siblings().removeClass('open').children('.mob_menu.in').collapse('hide');
	});

$(".pro_drop").hover(function(){
		$(this).parent().find(".pro_menu").slideToggle();
	});

$(".sub_cat:first-of-type .mob_item").click(function(){
		$(".sub_cat:last-of-type .mob_item").css('display','block');
	});


$('.pro_slider').owlCarousel({
		items:3,
		autoplay:true,
		rtl:true,
		loop: true,
		nav:true,
        margin:30,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:2
			},
			991:{
				items:3
			},
			1199:{
				items:3
			}
		}
	}); 

 $('.brd_slider').owlCarousel({
		items:6,
		autoplay:true,
		rtl:true,
		loop: true,
		nav:true,
        margin:15,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:4
			},
			991:{
				items:4
			},
			1199:{
				items:6
			}
		}
	});

$(window).on('load',function(){
    
    // loading#######################################
    $('.load_overlay .wavy-loader').fadeOut(2000,
    function()
    {    
        $('.load_overlay').fadeOut(1000,function(){ 
            $(this).remove();
        });

    });

});



$(function () {


    "use strict";
    
    	// preloader
    
    
	$(window).on('load', function () {
		$('.loder').delay(1500).fadeOut(1000);

	});
    
 

    //animation scroll js

    var html_body = $('html, body');
    $('.navbar a , .down a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 3000);
                return false;
            }
        }

    });

    // another nav

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();
        if (scrolling > 300) {
            $(".navbar").addClass("another-bg");
        } else {

            $(".navbar").removeClass("another-bg");
        }
    });

 //testmonial slider js

    $('.testmonial-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testmonial-write-slider'
    });
    $('.testmonial-write-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        asNavFor: '.testmonial-img-slider',
        dots: true,
 autoplay:true,
    speed: 2500,
    });





$('.screenshot-slider').slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 1,    
    button:false,
    autoplay:true,
    speed: 2500,
    arrows:false,
    autoplaySpeed:1000,
});
    
        //counter js

    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate({
                countNum: countTo
            },

            {

                duration: 50000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    // alert('finished');
                }

            });


    });


    //back to top

    var back2top = $(".back-to-top");
    var html_body = $('html, body');
    back2top.click(function () {
        html_body.animate({
            scrollTop: 0
        }, 3000);
    });


    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            back2top.fadeIn(500);
        } else {
            back2top.fadeOut(500);
        }
    });
    
    
    //wow js

    new WOW().init();


    
    //venobox

    $('.venobox').venobox();

    

});

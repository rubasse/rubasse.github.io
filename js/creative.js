function resizeMediumVideo() {
    var height = $('.video-left').height();
    var width = $('.video-container').width();
    var videos = $('.right-video');
    $('.video-inner-container').css('width', width*2);
    videos.css('height', height);
    videos.css('width', width);

    $('.video-left').on('click', 'a', function(){
        $(".video-inner-container").css("transform","translateX("+$(this).index() * -width+"px)");
        $(".video-left a").removeClass("selected");
        $(this).addClass("selected");
    });
}

function resizeSmallVideo() {
    var portWidth = $('#portfolio').width();
    $('.small-video').width(portWidth);
    $('.small-video').height(Math.round(portWidth*720/1280));
}

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons1', {
        duration: 1000,
        scale: 0.3,
        distance: '0px'
    }, 500);
    sr.reveal('.sr-icons2', {
        duration: 1000,
        scale: 0.3,
        distance: '0px'
    }, 500);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    resizeMediumVideo();
    resizeSmallVideo();

    $( window ).resize(function() {
        if ($(window).width() <= 767){
            resizeSmallVideo();
        }
        else {
            resizeMediumVideo();
        }
    });

    $('header').lazy({
        effect: 'fadeIn',
        afterLoad: function(element) {
            element.addClass('header-bg-loaded');
        }
    });
    $('.lazy-load').lazy({
        effect: 'fadeIn',
        afterLoad: function(element) {
            element.addClass('lazy-loaded');
            element.removeClass('lazy-load');
        }
    });
    $('#play-v1').on('click', function(ev) {
        document.getElementById('v2').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        document.getElementById('v1').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
    $('#play-v2').on('click', function(ev) {
        document.getElementById('v1').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        document.getElementById('v2').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });

})(jQuery); // End of use strict


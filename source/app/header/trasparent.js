$(document).on('ready',function(){



$(window).scroll(function() {
    if ($('.MainMenu-scroll').offset().top > 70) {
        $('.MainMenu-scroll').addClass('MainMenu-scrolled');
    } else {
        $('.MainMenu-scroll').removeClass('MainMenu-scrolled');
    }   
});




});
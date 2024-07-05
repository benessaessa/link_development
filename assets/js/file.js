$(function() {
    
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 20) {
            $(".customHeader").addClass("activeHeader");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".customHeader").removeClass("activeHeader");
        }
    });
});
AOS.init();
new WOW().init();
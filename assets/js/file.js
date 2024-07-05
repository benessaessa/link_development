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
document.addEventListener('DOMContentLoaded', function() {
    var shareButtons = document.querySelectorAll('.share-btn');

    shareButtons.forEach(function(shareButton) {
        shareButton.addEventListener('click', function() {
            var socialIcons = shareButton.closest('.card-footer').querySelector('.social-icons');

            // Hide any other open social icons
            document.querySelectorAll('.social-icons.show').forEach(function(openIcons) {
                if (openIcons !== socialIcons) {
                    openIcons.classList.remove('show');
                }
            });

            // Toggle the clicked one
            socialIcons.classList.toggle('show');
        });
    });
});

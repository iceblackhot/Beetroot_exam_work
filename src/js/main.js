$(document).ready(() => {
    $('.js-nav-opener').on('click', function () {
        if($('.heading__block').hasClass('active')) {
            $('.heading__block').removeClass('active');
        } else {
            $('.heading__block').addClass('active');
        }
    })
});
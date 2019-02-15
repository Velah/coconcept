$(function() {
    $(".carousel").slick();
});

$('.portfolioImg').on('click', function() {
    $(".carousel").slick('setPosition');
});
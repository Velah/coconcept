$('.navbar-brand a').on("click", function() {
    $('.hidden-section').hide();
    $('.main-section').show();
    $('nav').show();
    $('.navbar-menu').show();
});

$('#openContactButton').on("click", function () {
    $('#contactSection').show();
    $('nav').hide();
    $('.main-section').hide();
});

$('#closeContactButton').on("click", function () {
    $('#contactSection').hide();
    $('nav').show();
    $('#landingSection').show();
    $('#workflowSection').show();
    $('#portfolioSection').show();
});

$('#knowMeButton').on("click", function() {
    $('#dialogSection').show();
    $('.navbar-menu').hide();
    $('#contactSection').hide();
    $('#landingSection').hide();
    $('#workflowSection').hide();
    $('#portfolioSection').hide();
});

$('.portfolioImg').on("click", function() {
    $($(this).attr("targetSection")).show();
    $('.navbar-menu').hide();
    $('#contactSection').hide();
    $('#landingSection').hide();
    $('#workflowSection').hide();
    $('#portfolioSection').hide();
});
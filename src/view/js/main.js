$('body').on("click", "#openContactButton", function () {
    $('#workflowSection').addClass("is-hidden");
    $('#portfolioSection').addClass("is-hidden");
    $('#contactSection').removeClass("is-hidden");
    $('nav').addClass("is-hidden");
});

$('body').on("click", "#closeContactButton", function () {
    $('#workflowSection').removeClass("is-hidden");
    $('#portfolioSection').removeClass("is-hidden");
    $('#contactSection').addClass("is-hidden");
    $('nav').removeClass("is-hidden");
});
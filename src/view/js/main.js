$("#openContactButton").on("click", function () {
    $('#workflowSection').addClass("is-hidden");
    $('#portfolioSection').addClass("is-hidden");
    $('#contactSection').removeClass("is-hidden");
    $('nav').addClass("is-hidden");
});

$("#closeContactButton").on("click", function () {
    $('#workflowSection').removeClass("is-hidden");
    $('#portfolioSection').removeClass("is-hidden");
    $('#contactSection').addClass("is-hidden");
    $('nav').removeClass("is-hidden");
});
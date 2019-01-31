$('.navbar-brand a').on("click", function() {
    $('nav.navbar:not(has-shadow)').addClass("has-shadow");
    $('.hidden-section').hide();
    $('.main-section').show();
    $('nav').show();
    $('.navbar-menu').show();
});

$('#openContactButton').on("click", function () {
    $('nav.navbar:not(has-shadow)').addClass("has-shadow");
    $('#contactSection').show();
    $('nav').hide();
    $('.main-section').hide();
});

$('#closeContactButton').on("click", function () {
    $('nav.navbar:not(has-shadow)').addClass("has-shadow");
    $('#contactSection').hide();
    $('nav').show();
    $('#landingSection').show();
    $('#workflowSection').show();
    $('#portfolioSection').show();
});

$('#knowMeButton').on("click", function() {
    $('nav.navbar:not(has-shadow)').addClass("has-shadow");
    $('#dialogSection').show();
    $('.navbar-menu').hide();
    $('#contactSection').hide();
    $('#landingSection').hide();
    $('#workflowSection').hide();
    $('#portfolioSection').hide();
});

$('.portfolioImg').on("click", function() {
    $('nav.navbar:not(has-shadow)').addClass("has-shadow");
    $($(this).attr("targetSection")).show();
    $('.navbar-menu').hide();
    $('#contactSection').hide();
    $('#landingSection').hide();
    $('#workflowSection').hide();
    $('#portfolioSection').hide();
});

$("[href='#workflowSection']").click(function() {
    $('nav.navbar:not(has-shadow)').addClass("has-shadow");
    $('html, body').animate({
        scrollTop: $("#landingSection")[0].scrollHeight - 20
    }, 2000, 'easeOutQuart');
});

$("[href='#portfolioSection']").click(function() {
    $('nav.navbar:not(has-shadow)').addClass("has-shadow");
    $('html, body').animate({
        scrollTop: $("#portfolioSection").offset().top
    }, 2000, 'easeOutQuart');
});

$("[href='#landingSection']").click(function() {
    $('nav.navbar.has-shadow').removeClass("has-shadow");
    $('html, body').animate({
        scrollTop: 0
    }, 2000, 'easeOutQuart');
});



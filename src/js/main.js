const ANIMATION_DURATION = 1500

$('#openContactButton').on("click", function () {
    hideMainSections();
    $('#contactSection').show();
    $('nav').hide();
});

$('#closeContactButton').on("click", function () {
    $('#contactSection').hide();
    showMainSections();
    decorateNavbar();
    $('nav').show();
});

$('#knowMeButton').on("click", function() {
    decorateNavbar();
    $('nav.navbar.is-transparent').removeClass("is-transparent");
    hideMainSections();
    $('#dialogSection').show();
    resetDialogs();
});

$('.portfolioImg').on("click", function() {
    hideMainSections();
    $($(this).attr("targetSection")).show();
    $('nav.navbar').addClass("portfolio-navbar");
    $('html, body').animate({
        scrollTop: 0
    }, ANIMATION_DURATION, 'easeOutQuart');
});

// $("[href='x']") selects all elements with attribute href="x"
$("[href='#workflowSection']").click(function() {
    $('html, body').animate({
        scrollTop: $("#landingSection")[0].scrollHeight - 20
    }, ANIMATION_DURATION, 'easeOutQuart');
});

$("[href='#portfolioSection']").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolioSection").position().top
    }, ANIMATION_DURATION, 'easeOutQuart');
});

$("[href='#landingSection']").click(function() {
    hideHiddenSections();
    showMainSections();
    $('nav.navbar.portfolio-navbar').removeClass("portfolio-navbar");

    $('html, body').animate({
        scrollTop: 0
    }, ANIMATION_DURATION, 'easeOutQuart');
});

$(window).on('scroll', function() {
    decorateNavbar();
});

$('.portfolioImg .image').hover(function() {
    $(this).addClass('hovered');
}, function() {
    $(this).removeClass('hovered');
});

$('#thoughtsOnDesign').on('click', function() {
    hideHiddenSections();
    showMainSections();
    $("[href='#workflowSection']").click();
});

$('#thingsIveWorkedOn').on('click', function() {
    hideHiddenSections();
    showMainSections();
    $("[href='#portfolioSection']").click();
});

$('#contactHere').on('click', function() {
    hideHiddenSections();
    showMainSections();
    $('#openContactButton').click();
});


function decorateNavbar() {
    if ($(window).scrollTop() == 0) {
        $('nav.navbar.has-shadow').removeClass("has-shadow");
        $('nav.navbar:not(is-transparent)').addClass("is-transparent");
    } else {
        $('nav.navbar:not(has-shadow)').addClass("has-shadow");
        $('nav.navbar.is-transparent').removeClass("is-transparent");
    }
}

function hideMainSections() {
    $('.navbar-menu').hide();
    $('.main-section').hide();
}

function showMainSections() {
    $('.navbar-menu').show();
    $('.main-section').show();
}

function hideHiddenSections() {
    $('.hidden-section').hide();
}

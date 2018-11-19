$(document).ready(function () {
    $('#main__slider').slick({
        draggable: true,
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        speed: 900,
        infinite: true
    });
    AOS.init({
        duration: 500
    });
    $('#pop').on("click", function () {
        $('.pop').css('display', 'flex')
    });
    $("#close").on("click", function () {
        $('.pop').css('display', 'none');
    })
});
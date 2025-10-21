const swiper = new Swiper('.swiper', {
    // Optional parameters

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$(document).ready(function () {
$('.linq').click(function (e) {
    e.preventDefault();

    window.location.href = "/index.html";
});
});
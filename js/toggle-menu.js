window.addEventListener('load', function () {
    var $button = this.document.querySelector('.toggle-menu-button');
    var $menu = this.document.querySelector('.header-site-menu');
    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });
});

$(function () {
    $(window).scroll (function () {
        $("nav.floating").stop().animate(
            {"top": $(window).scrollTop() + 100},
        500);
    });
});

window.addEventListener("load", function () {

    const logo = document.querySelector(".footer-logo");

    const observer = new IntersectionObserver(function(entries){

        if(entries[0].isIntersecting){
            logo.classList.add("show");
        }

    }, {
        threshold: 0.3
    });

    observer.observe(logo);

});

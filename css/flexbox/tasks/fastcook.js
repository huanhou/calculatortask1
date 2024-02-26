document.addEventListener("DOMContentLoaded", function () {
    // Use Anime.js for animations
    anime({
        targets: '.feature',
        translateY: 0,
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 1500,
        delay: anime.stagger(200),
    });
});
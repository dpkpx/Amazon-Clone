const navbar = document.querySelector(".nav");
const navbar2 = document.querySelector(".nav2");

new IntersectionObserver((entry) => {

    if (!entry[0].isIntersecting) {

        if (window.visualViewport.width >= 1024 || window.screen.availWidth - window.visualViewport.width < 50) {
           
            entry[0].target.style = "position:fixed;top:0;"

        }
    }

}).observe(navbar);


const settings = {
    root: null,
    rootMargin: '-39px',
    threshold: 0
}

new IntersectionObserver((entry) => {

    if (entry[0].isIntersecting) {

        navbar.style = "";

    }

}, settings).observe(navbar2);


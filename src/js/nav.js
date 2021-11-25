const navbar = document.querySelector(".nav");
const navbar2 = document.querySelector(".nav2");


new IntersectionObserver((entry) => {

    if (!entry[0].isIntersecting) {

        entry[0].target.style = "position:fixed;top:0;"

    }

}).observe(navbar);


let settings = {
    root: null,
    rootMargin: '-39px',
    threshold:0
  }
new IntersectionObserver((entry) => {

    if (entry[0].isIntersecting) {

        navbar.style = "";
        
    }

},settings).observe(navbar2);







const searchInput = document.querySelector(".nav__search_text");

searchInput.addEventListener("focusin", () => {
    document.querySelector(".nav__search").classList.add("nav-focus");

})
searchInput.addEventListener("focusout", () => {
    document.querySelector(".nav__search").classList.remove("nav-focus");

})


const options = document.querySelector("#categories");
const label = document.querySelector("#selected_categories")

options.addEventListener("change", () => {
    label.innerHTML = options.selectedOptions[0].text;
})



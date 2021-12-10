const searchInput = document.querySelector(".nav__search_text");
const options = document.querySelector("#categories");
const label = document.querySelector("#selected_categories");
const primeLink = document.querySelector(".nav2__menu_list_link--prime");
const covers = document.querySelectorAll(".cover");


searchInput.addEventListener("focusin", () => {
    document.querySelector(".nav__search").classList.add("nav-focus");

});

searchInput.addEventListener("focusout", () => {
    document.querySelector(".nav__search").classList.remove("nav-focus");

});

options.addEventListener("change", () => {
    label.innerHTML = options.selectedOptions[0].text;
})

primeLink.addEventListener("mouseover",()=>{
 covers.forEach(cover=>cover.classList.add("focusOut"));
})

primeLink.addEventListener("mouseout",()=>{
    covers.forEach(cover=>cover.classList.remove("focusOut"));
})



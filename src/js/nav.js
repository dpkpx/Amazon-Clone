const searchInput = document.querySelector(".nav__search_text");
const options = document.querySelector("#categories");
const label = document.querySelector("#selected_categories")


searchInput.addEventListener("focusin", () => {
    document.querySelector(".nav__search").classList.add("nav-focus");

});

searchInput.addEventListener("focusout", () => {
    document.querySelector(".nav__search").classList.remove("nav-focus");

});

options.addEventListener("change", () => {
    label.innerHTML = options.selectedOptions[0].text;
})



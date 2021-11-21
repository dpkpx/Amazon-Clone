
const searchInput = document.querySelector(".nav__search_text");

searchInput.addEventListener("focusin",()=>{
    document.querySelector(".nav__search").classList.add("nav-focus");

})
searchInput.addEventListener("focusout",()=>{
    document.querySelector(".nav__search").classList.remove("nav-focus");

})


const options = document.querySelector("#categories");
const label = document.querySelector("#selected_categories")

options.addEventListener("change",()=>{
label.innerHTML=options.selectedOptions[0].text;
})
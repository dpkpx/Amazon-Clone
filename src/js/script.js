let searchInput = document.querySelector(".nav__search_text");

searchInput.addEventListener("focusin",()=>{
    document.querySelector(".nav__search").classList.add("focus");

})
searchInput.addEventListener("focusout",()=>{
    document.querySelector(".nav__search").classList.remove("focus");

})


let options = document.querySelector("#categories");
let label = document.querySelector("#selected_categories")

options.addEventListener("change",()=>{
label.innerHTML=options.selectedOptions[0].text;
})
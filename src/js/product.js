const thumbnailsContainer = document.querySelector(".product__visualsNavThumbnail").parentElement;
const images = document.querySelectorAll(".product__visualsDisplay > ol > li");

thumbnailsContainer.addEventListener("focusin", (e) => {
   
    const target = e.target.closest(".product__visualsNavThumbnail");
   
    if (target) {

        images.forEach(image =>{
            
            if(image.getAttribute("order") == target.getAttribute("order")){
               
                image.style = "z-index : 99"
            }else{
                
                image.style = "z-index : -1"
            }
        })
        
    }

})

thumbnailsContainer.addEventListener("mouseover", (e) => {
   
    const target = e.target.closest(".product__visualsNavThumbnail");
   
    if (target) {

       target.focus();
        
    }

})

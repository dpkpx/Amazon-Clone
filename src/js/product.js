const thumbnailsContainer = document.querySelector(".product__visualsNav ol");
const imagesContainer = document.querySelector(".product__visualsDisplay > ol");

thumbnailsContainer.addEventListener("focusin", (e) => {
    
    const target = e.target.closest(".product__visualsNavThumbnail");
   
    if (target) {
        
        for(let index = 0; index<imagesContainer.children.length;index++){
               let image = imagesContainer.children[index];
            
            if(image.getAttribute("order") == target.getAttribute("order")){
               
                image.style = "z-index : 99"
            }else{
                
                image.style = "z-index : -1"
            }
        }
        
    }

})

thumbnailsContainer.addEventListener("mouseover", (e) => {
   
    const target = e.target.closest(".product__visualsNavThumbnail");
   
    if (target) {

       target.focus();
        
    }

})

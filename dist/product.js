const thumbnailsContainer=document.querySelector(".product__visualsNav ol"),imagesContainer=document.querySelector(".product__visualsDisplay > ol");thumbnailsContainer.addEventListener("focusin",(e=>{const t=e.target.closest(".product__visualsNavThumbnail");if(t)for(let e=0;e<imagesContainer.children.length;e++){let n=imagesContainer.children[e];n.getAttribute("order")==t.getAttribute("order")?n.style="z-index : 99":n.style="z-index : -1"}})),thumbnailsContainer.addEventListener("mouseover",(e=>{const t=e.target.closest(".product__visualsNavThumbnail");t&&t.focus()}));
//# sourceMappingURL=product.js.map
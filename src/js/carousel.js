
const carousel = document.querySelector(".carousel");
const carouselTrack = document.querySelector(".carousel__track");
const dir = {
    next: -1,
    prev: 1
}
//to auto slide 
const intervalId = setInterval(moveSlide,5000,dir.next);

// to remove auto sliding
setTimeout(()=>{
    clearInterval(intervalId);
},5000*carouselTrack.childElementCount);



function moveSlide(dir) {

    currentTanslateValue = document.querySelector(".carousel__track").style.transform.replace("translate(", "").replace("%)", "");


    if (currentTanslateValue == -((carouselTrack.childElementCount - 1) * 100) && dir == -1) {

        carouselTrack.style.transform = "translate(0%)";


    } else if (currentTanslateValue == "0" && dir == 1) {

        carouselTrack.style.transform = "translate(" + (-((carouselTrack.childElementCount - 1) * 100)) + "%)";

    }
    else {

        carouselTrack.style.transform = "translate(" + (parseInt(currentTanslateValue) + 100 * dir) + "%)";
        carouselTrack.style.transition = "all .3s ease-in";

    }

}

//creating a duplicate slide to create loop effect
let duplicate = carouselTrack.children[carouselTrack.childElementCount - 1].cloneNode(true);
duplicate.classList.add("duplicate");

carouselTrack.prepend(duplicate);



//arrenging the slides
for (let i = 0; i < carouselTrack.childElementCount; i++) {
    carouselTrack.children[i].style = "left:" + i * 100 + "%";

}


const buttonPrev = document.querySelector(".carousel__button--prev");
const buttonNext = document.querySelector(".carousel__button--next");

buttonNext.addEventListener("click", () => {
    moveSlide(dir.next);
    clearInterval(intervalId);

})


buttonPrev.addEventListener("click", () => {
    moveSlide(dir.prev);
    clearInterval(intervalId);
   
})


//repositioning the slide on edge cases with transition off
carouselTrack.addEventListener("transitionend", () => {
    currentTanslateValue = document.querySelector(".carousel__track").style.transform.replace("translate(", "").replace("%)", "");

    if (currentTanslateValue == -((carouselTrack.childElementCount - 1) * 100)) {
        carouselTrack.style.transition = "none";
        carouselTrack.style.transform = "translate(0%)";

    } else if (currentTanslateValue == "0") {
        carouselTrack.style.transition = "none";
        carouselTrack.style.transform = "translate(" + (-((carouselTrack.childElementCount - 1) * 100)) + "%)";

    }

});



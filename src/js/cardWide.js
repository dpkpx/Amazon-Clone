
const cardWide = document.querySelectorAll(".card-wide");

const moveDir = {
    next: -1,
    prev: 1
}
cardWide.forEach((cardWide) => {


    const cardButtonPrev = cardWide.querySelector(".card-wide__carousel-button--prev");
    const cardButtonNext = cardWide.querySelector(".card-wide__carousel-button--next");

    const cardCarouselTrack = cardWide.querySelector(".card-wide__carousel-track");
    const carouselScrollbar = cardWide.querySelector(".card-wide__scrollbar-thumb");



    cardButtonNext.addEventListener("click", () => {
        moveSlide(moveDir.next);

    })


    cardButtonPrev.addEventListener("click", () => {
        moveSlide(moveDir.prev);

    })



    carouselScrollbar.addEventListener("mousedown", (e) => {
        carouselScrollbar.style.opacity = "1";
        carouselScrollbar.style.transition = "";
        document.addEventListener("mousemove", movethumb)
    })

    document.addEventListener("mouseup", () => {
        carouselScrollbar.style.opacity = "";
        cardCarouselTrack.style.transition = "";

        document.removeEventListener("mousemove", movethumb);
    })




    function moveSlide(dir) {

        const currentTanslateValue = cardWide.querySelector(".card-wide__carousel-track").style.transform.replace("translate(", "").replace("px)", "");
        const valueToTranslate = cardCarouselTrack.parentElement.getBoundingClientRect().width;
        const carouselTrackWidth = cardCarouselTrack.getBoundingClientRect().width;

        const nextNextTranslateValue = parseInt(currentTanslateValue) + (2 * valueToTranslate * dir);


        if (Math.abs(nextNextTranslateValue) > carouselTrackWidth && dir == -1) {

            let leftSlide = carouselTrackWidth + (parseInt(currentTanslateValue) + valueToTranslate * dir);

            cardButtonNext.style = "opacity:0.5";

            cardCarouselTrack.style.transform = "translate(" + (parseInt(currentTanslateValue) - leftSlide) + "px)";

            syncScrollThumb((parseInt(currentTanslateValue) - leftSlide), (cardCarouselTrack.getBoundingClientRect().width - cardCarouselTrack.parentElement.getBoundingClientRect().width))

        } else if ((parseInt(currentTanslateValue) + valueToTranslate) > 0 && dir == 1) {

            let leftSlide = valueToTranslate - (parseInt(currentTanslateValue) + valueToTranslate * dir);

            cardButtonPrev.style = "opacity:0.5";

            cardCarouselTrack.style.transform = "translate(" + (parseInt(currentTanslateValue) + leftSlide) + "px)";
            syncScrollThumb((parseInt(currentTanslateValue) + leftSlide), (cardCarouselTrack.getBoundingClientRect().width - cardCarouselTrack.parentElement.getBoundingClientRect().width))

        }
        else {
            cardButtonNext.style = "opacity:1";
            cardButtonPrev.style = "opacity:1";

            cardCarouselTrack.style.transform = "translate(" + (parseInt(currentTanslateValue) + (valueToTranslate * dir)) + "px)";

            syncScrollThumb((parseInt(currentTanslateValue) + (valueToTranslate * dir)), (cardCarouselTrack.getBoundingClientRect().width - cardCarouselTrack.parentElement.getBoundingClientRect().width))

        }

    }


    function movethumb({ movementX }) {

        window.getSelection().removeAllRanges();

        let valToMove = parseInt(window.getComputedStyle(carouselScrollbar).left) + movementX;
        let moveLimit = carouselScrollbar.parentElement.getBoundingClientRect().width - carouselScrollbar.getBoundingClientRect().width

        if (valToMove >= 0 && valToMove <= moveLimit) {

            carouselScrollbar.style.left = valToMove + "px";

            syncSlide(valToMove, moveLimit);
        }
    }

    function syncSlide(moveValue, moveLimit) {

        const scrollThumbPositionRatio = moveValue / moveLimit;
        const carouselTrackSlideRange = cardCarouselTrack.getBoundingClientRect().width - cardCarouselTrack.parentElement.getBoundingClientRect().width;

        const valToMove = carouselTrackSlideRange * scrollThumbPositionRatio * -1;

        cardCarouselTrack.style.transform = "translate(" + valToMove + "px)";
        cardCarouselTrack.style.transition = "none";

    }

    function syncScrollThumb(moveValue, moveLimit) {

        const slideTrackPositionRatio = moveValue / moveLimit;
        const scrollbarSlideRange = carouselScrollbar.parentElement.getBoundingClientRect().width - carouselScrollbar.getBoundingClientRect().width;

        const valToMove = scrollbarSlideRange * slideTrackPositionRatio * -1;

        carouselScrollbar.style.left = valToMove + "px";
        carouselScrollbar.style.transition = "all 0.3s ease-in";


    }

})
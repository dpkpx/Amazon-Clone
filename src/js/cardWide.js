
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
        moveSlide(cardCarouselTrack, carouselScrollbar, cardButtonPrev, cardButtonNext, moveDir.next);

    })


    cardButtonPrev.addEventListener("click", () => {
        moveSlide(cardCarouselTrack, carouselScrollbar, cardButtonPrev, cardButtonNext, moveDir.prev);

    })



    carouselScrollbar.addEventListener("mousedown", () => {

        carouselScrollbar.style.opacity = "1";
        carouselScrollbar.style.transition = "";

        document.addEventListener("mousemove", moveThumbCallback);
        document.addEventListener("mouseup", removeEventListeners);


        function moveThumbCallback(e) {
            movethumb(carouselScrollbar, cardCarouselTrack, e);
        };

        function removeEventListeners() {
            carouselScrollbar.style.opacity = "";
            cardCarouselTrack.style.transition = "";

            document.removeEventListener("mousemove", moveThumbCallback);
            document.removeEventListener("mouseup", removeEventListeners);

        }

        
    });


});

function moveSlide(cardCarouselTrack, carouselScrollbar, cardButtonPrev, cardButtonNext, dir) {

    const currentTanslateValue = cardCarouselTrack.style.transform.replace("translate(", "").replace("px)", "");
    const carouselWindowWidth = cardCarouselTrack.parentElement.getBoundingClientRect().width;
    const carouselTrackWidth = cardCarouselTrack.getBoundingClientRect().width;
    const carouselTrackMoveLimit = cardCarouselTrack.getBoundingClientRect().width - carouselWindowWidth;

    const nextTranslateValue = (parseInt(currentTanslateValue) + carouselWindowWidth * dir);


    if (Math.abs(nextTranslateValue) > carouselTrackMoveLimit && dir == -1) {

        const leftSlide = carouselTrackWidth - Math.abs(nextTranslateValue);
        const valueToTranslate = parseInt(currentTanslateValue) - leftSlide;

        cardButtonNext.style = "opacity:0.5";

        cardCarouselTrack.style.transform = "translate(" + valueToTranslate + "px)";

        syncScrollThumb(carouselScrollbar, valueToTranslate, carouselTrackMoveLimit);

    } else if (nextTranslateValue > 0 && dir == 1) {

        const leftSlide = nextTranslateValue - carouselWindowWidth;
        const valueToTranslate = parseInt(currentTanslateValue) - leftSlide;

        cardButtonPrev.style = "opacity:0.5";

        cardCarouselTrack.style.transform = "translate(" + valueToTranslate + "px)";
        syncScrollThumb(carouselScrollbar, valueToTranslate, carouselTrackMoveLimit)

    }
    else {
        cardButtonNext.style = "opacity:1";
        cardButtonPrev.style = "opacity:1";

        cardCarouselTrack.style.transform = "translate(" + nextTranslateValue + "px)";

        syncScrollThumb(carouselScrollbar, nextTranslateValue, carouselTrackMoveLimit)

    }

}

function movethumb(carouselScrollbar, cardCarouselTrack, { movementX }) {

    window.getSelection().removeAllRanges();
    const valToMove = parseInt(window.getComputedStyle(carouselScrollbar).left) + movementX;
    const moveLimit = carouselScrollbar.parentElement.getBoundingClientRect().width - carouselScrollbar.getBoundingClientRect().width

    if (valToMove >= 0 && valToMove <= moveLimit) {

        carouselScrollbar.style.left = valToMove + "px";

        syncSlide(cardCarouselTrack, valToMove, moveLimit);
    }
}

function syncSlide(cardCarouselTrack, moveValue, moveLimit) {

    const scrollThumbPositionRatio = moveValue / moveLimit;
    const carouselTrackSlideRange = cardCarouselTrack.getBoundingClientRect().width - cardCarouselTrack.parentElement.getBoundingClientRect().width;

    const valToMove = carouselTrackSlideRange * scrollThumbPositionRatio * -1;

    cardCarouselTrack.style.transform = "translate(" + valToMove + "px)";
    cardCarouselTrack.style.transition = "none";

}

function syncScrollThumb(carouselScrollbar, moveValue, moveLimit) {

    const slideTrackPositionRatio = moveValue / moveLimit;
    const scrollbarSlideRange = carouselScrollbar.parentElement.getBoundingClientRect().width - carouselScrollbar.getBoundingClientRect().width;

    const valToMove = scrollbarSlideRange * slideTrackPositionRatio * -1;

    carouselScrollbar.style.left = valToMove + "px";
    carouselScrollbar.style.transition = "all 0.3s ease-in";


}
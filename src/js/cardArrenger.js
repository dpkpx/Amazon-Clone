let smallScreen = false;

const container = document.querySelector(".card-container-1");
const divider1 = container.querySelector(".card-divider--1");
const divider2 = container.querySelector(".card-divider--2");
const cardSignin = container.querySelector(".card--signin");
const cardReplacer = container.querySelector(".card-replacer");

new ResizeObserver((target) => {

    let tempSmallScreen;

    if (target[0].contentRect.width < 1200) {
        tempSmallScreen = true
    } else {
        tempSmallScreen = false
    }

    if (smallScreen != tempSmallScreen) {
        smallScreen = tempSmallScreen;

        arrangeCards();
    }
    //    console.log("resized");
}).observe(container);



function arrangeCards() {

    if (smallScreen) {
        cardReplacer.style.display = "block";
        divider2.style.display = "block";
        cardSignin.style = "margin-top:auto;";

        container.insertBefore(cardSignin, container.children[8]);
        container.insertBefore(divider1, container.children[3]);
        container.insertBefore(divider2, container.children[8]);
    } else {
        cardReplacer.style.display = "none";
        divider2.style.display = "none";
        cardSignin.style = "margin-top:unset;";
        
        container.insertBefore(cardSignin, container.children[3]);
        container.insertBefore(divider1, container.children[5]);


    }
    // console.log("arrenging done");
}


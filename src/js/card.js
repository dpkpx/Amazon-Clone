let smallScreen = false;


if (window.screen.availWidth < 1220) {
    smallScreen = true;

}

arrangeCards();

window.addEventListener("resize", function () {

    let tempSmallScreen;

    if (window.screen.availWidth < 1220) {
        tempSmallScreen = true
    } else {
        tempSmallScreen = false
    }

    if (smallScreen != tempSmallScreen) {
        smallScreen = tempSmallScreen;

        arrangeCards();
        console.log("state changed");
    }


});


function arrangeCards() {
    const container =  document.querySelector(".card-container");
    const divider1 = container.querySelector(".card-divider--1");
    const divider2 = container.querySelector(".card-divider--2");
    const card_signin = container.querySelector(".card--signin");
    const replacer = container.querySelector(".replacer")
   
    if (smallScreen) {
        replacer.style.display = "block";
        divider2.style.display = "block";
        card_signin.style ="margin-top:auto;";

        container.insertBefore(card_signin, container.children[8]);
        container.insertBefore(divider1, container.children[3]);
        container.insertBefore(divider2, container.children[8]);
    }else{
        container.insertBefore(card_signin, container.children[3]);
        card_signin.style ="margin-top:unset;";

        container.insertBefore(divider1, container.children[5]);
        divider2.style.display = "none";
        replacer.style.display = "none";


    }
    console.log("arrenging done");


}
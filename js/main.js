window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScroll = htmlElement.scrollTop / htmlElement.clientHeight;
    console.log(Math.min(percentOfScreenHeightScroll * 100));
    document.querySelector(':root').style.setProperty('--scroll', Math.min(percentOfScreenHeightScroll * 100));
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScroll * 100));
    if (Math.min(percentOfScreenHeightScroll * 100, 100) > 25) {
        $(".navbar").addClass("scroll");
    } else{
        $(".navbar").removeClass("scroll");
    }

    $("#banner").css("height", $("#banner .left").css("height"));
    $("#banner .background-img").css("height", $("#banner").css("height"));
    $("#banner .overlay-img").css("height", $("#banner .background-img").css("height"));

    $("#about").css("height", "calc(100% + " + $("#about .content").css("height") + ")");
    $("#about .second-background-img").css("height", "calc(100% + " + $("#about .content").css("height") + ")");
    console.log($("#about").css("height"));
    $("#about .overlay-img img").css("height", $("#banner .overlay-img").css("height"))
    $("#about .overlay-img2 img").css("height", "" + $("#about").css("height") + "")

    $("#skills .overlay-img img").css("height", "" + $("#about").css("height") + "")

}
setScrollVar();
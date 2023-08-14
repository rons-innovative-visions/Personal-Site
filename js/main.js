window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", () => {
    window.location.reload();
    setScrollVar();
});

function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScroll = htmlElement.scrollTop / htmlElement.clientHeight;
    document.querySelector(':root').style.setProperty('--scroll', Math.min(percentOfScreenHeightScroll * 100));
    const value = Math.min(percentOfScreenHeightScroll * 100);
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScroll * 100));
    if (Math.min(percentOfScreenHeightScroll * 100, 100) > 25) {
        $(".navbar").addClass("scroll");
    } else{
        $(".navbar").removeClass("scroll");
    }

    if($("#banner .background-img").css("opacity") < 1){
        // #about .second-background-img, #skills .background-img
        $("#banner .second-background-img").css("opacity", -.9 + value / 100);
        $("#about .second-background-img").css("opacity", -.9 + value / 100);
        $("#skills .background-img").css("opacity", -.9 + value / 100);
    }
}
setScrollVar();
$("#banner").css("height", $("#banner .left").css("height"));
$("#banner .background-img").css("height", $("#banner").css("height"));
$("#banner .second-background-img").css("height", $("#banner").css("height"));
$("#banner .overlay-img").css("height", $("#banner .background-img").css("height"));

$("#about").css("height", "calc(100% + " + $("#about .content").css("height") + ")");
$("#about .overlay-img img").css("height", $("#banner .overlay-img").css("height"));
$("#about .overlay-img2 img").css("height", $("#about").css("height"));
$("#about .second-background-img").css("height", "calc(100% + " + $("#about .overlay-img2 img").css("height") + ")");

$("#skills").css("height", "calc(100% + " + $("#skills .overlay-img img").css("height") + ")");
if($("#skills").css("height") > $("#skills .overlay-img").css("height")){
    $("#skills .background-img").css("height",  $("#skills .overlay-img").css("height"));
} else {
    $("#skills .background-img").css("height",  $("#skills").css("height"));
    $("#skills .overlay-img img").css("height", $("#skills").css("height"));
    console.log('abc');
}
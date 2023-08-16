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
        $("#banner .transition-to-img").css({height: $("#banner .transition-to-img").css("height"), opacity: -.9 + value / 100});
        $("#about .background-img").css({height: $("#about .transition-to-img").css("height"), opacity: $("#banner .transition-to-img").css("opacity")});
        $("#skills .transition-from-img").css({height: $("#skills .transition-to-img").css("height"), opacity: $("#banner .transition-to-img").css("opacity")});
    } 
    if ($("#banner .transition-to-img").css("opacity") == 1){
        $("#about .background-img").css({height: $("#about .background-img").css("height"), opacity: .9 - (1 - (value / 100 - 1)) * -1});
        $("#skills .transition-from-img").css({height: $("#skills .transition-from-img").css("height"), opacity: $("#about .background-img").css("opacity")});
    }
    if(parseInt($("#skills h2").css("height")) + parseInt($("#skills .content").css("height")) > parseInt($("#skills .overlay-img img").css("height"))){
        $("#skills").css("height", parseInt($("#skills h2").css("height")) + parseInt($("#skills .content").css("height")));
        $("#skills .overlay-img img").css("height", $("#skills").css("height"));
    } else{
        $("#skills").css("height", $("#skills .overlay-img img").css("height"));
    }
}
setScrollVar();
$("#banner").css("height", $("#banner .left").css("height"));
$("#banner .background-img").css("height", $("#banner").css("height"));
$("#banner .transition-to-img").css("height", $("#banner").css("height"));
$("#banner .overlay-img").css("height", $("#banner .background-img").css("height"));

$("#about").css("height", parseInt($("#about h2").css("height")) + parseInt($("#about .content").css("height")));
$("#about .overlay-img img").css("height", $("#banner .overlay-img").css("height")); //
$("#about .overlay-img2 img").css("height", $("#about").css("height"));
$("#about .background-img").css("height", $("#about").css("height"));

// parseInt($("#about h2").css("height")) + parseInt($("#about .content").css("height")
$("#skills .background-img").css("height",  $("#skills").css("height"));
$("#skills .transition-from-img").css("height",  $("#skills").css("height"));

$("#contact").css("height", $("#contact .overlay-img img").css("height"));
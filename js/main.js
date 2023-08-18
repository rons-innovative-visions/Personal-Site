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
        $("#banner .transition-to-img").css({height: $("#banner .transition-to-img").css("height"), opacity: -1 + value / 100});
        $("#about .background-img").css({height: $("#about .transition-to-img").css("height"), opacity: $("#banner .transition-to-img").css("opacity")});
        $("#skills .transition-from-img").css({height: $("#skills .transition-to-img").css("height"), opacity: $("#banner .transition-to-img").css("opacity")});
        // alert()
    } 
    if ($("#banner .transition-to-img").css("opacity") == 1){
        $("#about .background-img").css({height: $("#about .background-img").css("height"), opacity: 1 - (1 - (value / 100 - 1)) * -1});
        $("#skills .transition-from-img").css({height: $("#skills .transition-from-img").css("height"), opacity: 1 - (1 - (value / 100 - 1)) * -1});
    }

    if($("#about .background-img").css("opacity") < 1){
        // $("#banner .transition-to-img").css({height: $("#banner .transition-to-img").css("height"), opacity: -.9 + value / 100});
        $("#about .transition-to-img").css({height: $("#about .transition-to-img").css("height"), opacity: -2 + value / 100});
        $("#skills .background-img").css({height: $("#skills .background-img").css("height"), opacity: $("#about .transition-to-img").css("opacity")});
        $("#contact .transition-from-img").css({height: $("#contact .transition-from-img").css("height"),  opacity: $("#about .transition-to-img").css("opacity")});
        // $("#skills .transition-from-img").css({height: $("#skills .transition-to-img").css("height"), opacity: $("#banner .transition-to-img").css("opacity")});
    } 
    if ($("#about .transition-to-img").css("opacity") == 1){
        $("#skills .background-img").css({height: $("#skills .background-img").css("height"), opacity: 3 - (1 - (value / 100 - 1)) * -1});
        $("#contact .transition-from-img").css({height: $("#contact .transition-from-img").css("height"), opacity: $("#skills .background-img").css("opacity")});
        // alert()
    }

    if($("#skills .background-img").css("opacity") < 1){
        // $("#banner .transition-to-img").css({height: $("#banner .transition-to-img").css("height"), opacity: -.9 + value / 100});
        $("#skills .transition-to-img").css({height: $("#skills .transition-to-img").css("height"), opacity: -2 + (1 - (value / 100 - 1)) * -1});
        $("#contact .background-img").css({height: $("#contact .background-img").css("height"), opacity: $("#skills .transition-to-img").css("opacity")});
        // $("#contact .transition-from-img").css({height: $("#contact .transition-from-img").css("height"),  opacity: $("#about .transition-to-img").css("opacity")});
        // $("#skills .transition-from-img").css({height: $("#skills .transition-to-img").css("height"), opacity: $("#banner .transition-to-img").css("opacity")});
    } 
    // if ($("#skills .transition-to-img").css("opacity") == 1){
    //     $("#contact .background-img").css({height: $("#skills .background-img").css("height"), opacity: 3 - (1 - (value / 100 - 1)) * -1});
    //     $("#contact .transition-from-img").css({height: $("#contact .transition-from-img").css("height"), opacity: $("#skills .background-img").css("opacity")});
    //     // alert()
    // }

    if(parseInt($("#skills h2").css("height")) + parseInt($("#skills .content").css("height")) > parseInt($("#skills .overlay-img img").css("height"))){
        $("#skills").css("height", parseInt($("#skills h2").css("height")) + parseInt($("#skills .content").css("height")));
        $("#skills .overlay-img img").css("height", $("#skills").css("height"));
        $("#skills .background-img").css("height",  $("#skills").css("height"));
        $("#skills .transition-from-img").css("height",  $("#skills").css("height"));
        $("#skills .transition-to-img").css("height",  $("#skills").css("height"));
    } else{
        $("#skills").css("height", $("#skills .overlay-img img").css("height"));
        $("#skills .background-img").css("height",  $("#skills").css("height"));
        $("#skills .transition-from-img").css("height",  $("#skills").css("height"));
        $("#skills .transition-to-img").css("height",  $("#skills").css("height"));
    }
}
setScrollVar();
// $("#banner").css("height", $("#banner .overlay-img img").css("height"));
// $("#banner .background-img").css("height", $("#banner").css("height"));
// $("#banner .transition-to-img").css("height", $("#banner .overlay-img img").css("height"));
// $("#banner .left").css("height", $("#banner .overlay-img img").css("height"));
// $("#banner .right").css("height", $("#banner .overlay-img img").css("height"));

parseInt($("#banner .overlay-img img").css("height")) === 0 ? $("#banner").css("height", $("#banner .left").css("height")) : $("#banner").css("height", $("#banner .overlay-img img").css("height"));
// $("#banner").css("height", $("#banner .overlay-img img").css("height"));
// $("#banner").css("height", $("#banner .left").css("height"));
$("#banner .background-img").css("height", $("#banner").css("height"));
$("#banner .transition-to-img").css("height", $("#banner").css("height"));
$("#banner .overlay-img").css("height", $("#banner .background-img").css("height"));

$("#about").css("height", parseInt($("#about h2").css("height")) + parseInt($("#about .content").css("height")));
$("#about .overlay-img img").css("height", $("#about").css("height")); //
// $("#about .overlay-img2 img").css("height", $("#about").css("height"));
$("#about .background-img").css("height", parseInt($("#about h2").css("height")) + parseInt($("#about .content").css("height")));
$("#about .transition-to-img").css("height", parseInt($("#about h2").css("height")) + parseInt($("#about .content").css("height")));

// parseInt($("#about h2").css("height")) + parseInt($("#about .content").css("height")

$("#contact").css("height", $("#contact .overlay-img img").css("height"));
// $("#contact .overlay-img img").css("height", $("#contact").css("height"));
$("#contact .transition-from-img").css("height", $("#contact").css("height"));
$("#contact .background-img").css("height", $("#contact").css("height"));
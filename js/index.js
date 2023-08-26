window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", () => {
    // window.location.reload();
    // setScrollVar();
    resize();
});

$("*").on("load", () => {
    // let interval = setInterval(() => {
    resize()
    // }, 1000)
    // alert()
})

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
        $("#about .background-img").css({height: $("#about").css("height"), opacity: $("#banner .transition-to-img").css("opacity")});
        $("#skills .transition-from-img").css({height: $("#skills").css("height"), opacity: $("#banner .transition-to-img").css("opacity")});
        $("#contact .transition-from-from-img").css({height: $("#contact").css("height"), opacity: $("#banner .transition-to-img").css("opacity")});
        // alert()
    } 
    if ($("#banner .transition-to-img").css("opacity") == 1){
        $("#about .background-img").css({height: $("#about").css("height"), opacity: 1 - (1 - (value / 100 - 1)) * -1});
        $("#skills .transition-from-img").css({height: $("#skills").css("height"), opacity: 1 - (1 - (value / 100 - 1)) * -1});
        $("#contact .transition-from-from-img").css({height: $("#contact").css("height"), opacity: 1 - (1 - (value / 100 - 1)) * -1});
    }

    if($("#about .background-img").css("opacity") < 1){
        // $("#banner .transition-to-img").css({height: $("#banner .transition-to-img").css("height"), opacity: -.9 + value / 100});
        $("#about .transition-to-img").css({height: $("#about").css("height"), opacity: -2 + value / 100});
        $("#skills .background-img").css({height: $("#skills .background-img").css("height"), opacity: $("#about .transition-to-img").css("opacity")});
        $("#contact .transition-from-img").css({height: $("#contact").css("height"),  opacity: $("#about .transition-to-img").css("opacity")});
        // $("#skills .transition-from-img").css({height: $("#skills .transition-to-img").css("height"), opacity: $("#banner .transition-to-img").css("opacity")});
    } 
    if ($("#about .transition-to-img").css("opacity") == 1){
        $("#skills .background-img").css({height: $("#skills").css("height"), opacity: 3 - (1 - (value / 100 - 1)) * -1});
        $("#contact .transition-from-img").css({height: $("#contact").css("height"), opacity: $("#skills .background-img").css("opacity")});
        // alert()
    }

    if($("#skills .background-img").css("opacity") < 1){
        // $("#banner .transition-to-img").css({height: $("#banner .transition-to-img").css("height"), opacity: -.9 + value / 100});
        $("#skills .transition-to-img").css({height: $("#skills").css("height"), opacity: -2 + (1 - (value / 100 - 1)) * -1});
        $("#contact .background-img").css({height: $("#contact").css("height"), opacity: $("#skills .transition-to-img").css("opacity")});
        // $("#contact .transition-from-img").css({height: $("#contact .transition-from-img").css("height"),  opacity: $("#about .transition-to-img").css("opacity")});
        // $("#skills .transition-from-img").css({height: $("#skills .transition-to-img").css("height"), opacity: $("#banner .transition-to-img").css("opacity")});
    } 
    // if ($("#skills .transition-to-img").css("opacity") == 1){
    //     $("#contact .background-img").css({height: $("#skills .background-img").css("height"), opacity: 3 - (1 - (value / 100 - 1)) * -1});
    //     $("#contact .transition-from-img").css({height: $("#contact .transition-from-img").css("height"), opacity: $("#skills .background-img").css("opacity")});
    //     // alert()
    // }

    // if(parseInt($("#skills h2").css("height")) + parseInt($("#skills .content").css("height")) > parseInt($("#skills .overlay-img img").css("height"))){
    //     $("#skills").css("height", parseInt($("#skills h2").css("height")) + parseInt($("#skills .content").css("height")));
    //     $("#skills .overlay-img img").css("height", $("#skills").css("height"));
    //     $("#skills .background-img").css("height",  $("#skills").css("height"));
    //     $("#skills .transition-from-img").css("height",  $("#skills").css("height"));
    //     $("#skills .transition-to-img").css("height",  $("#skills").css("height"));
    // } else{
    //     $("#skills").css("height", $("#skills .overlay-img img").css("height"));
    //     $("#skills .background-img").css("height",  $("#skills").css("height"));
    //     $("#skills .transition-from-img").css("height",  $("#skills").css("height"));
    //     $("#skills .transition-to-img").css("height",  $("#skills").css("height"));
    // }
    
    // $("#contact .overlay-img img").css("height") > $("#contact").css("height") ? $("#contact").css("height", $("#contact .overlay-img img").css("height")) : $("#contact").css("height");
}
setScrollVar();

resize();

function resize() {
    // $("#banner .background-img").css("height", $("#banner").css("height"));
    // $("#banner .background-img").css("height", $("#banner").css("height"));
    // console.log($("#banner .overlay-img img").css("height"));
    // console.log($("#banner .overlay-img img").css("height"));
    // $("#banner .overlay-img img").css("height") == 0 ? $("#banner").css("height", $("#banner .content").css("height")) : console.log($("#banner .overlay-img img").css("height"));
    parseInt($("#banner .overlay-img img").css("height")) === 0 ? $("#banner").css("height", $("#banner .content").css("height")) : console.log();
    $("#banner .background-blur").css("height", $("#banner").css("height"));
    $("#banner .transition-to-img").css("height", $("#banner").css("height"));
    // $("#banner .overlay-img img").css("height", $("#banner .overlay-img img").css("height"));
    // $("#banner .overlay-img img").css("height", $("#banner .background-img").css("height"));

    // $("#about").css("height", $("#about").css("height"));
    // $("#about .overlay-img img").css("height", $("#about").css("height"));
    $("#about .overlay-img img").css("height", $("#about").css("height"));
    $("#about .transition-from-blur").css("height", $("#about").css("height"));
    $("#about .background-img").css("height", $("#about .overlay-img img").css("height"));
    
    parseInt($("#skills .overlay-img img").css("height")) === 0 ? console.log() : $("#skills").css("height", parseFloat($("#skills h2").css("height")) + parseFloat($("#skills .content").css("height")));
    $("#skills .overlay-img img").css("height", $("#skills").css("height"));
    $("#skills ").css("height", $("#skills").css("height"));
    

    // $("#contact .overlay-img img").css("height", $("#contact"));
    // $("#about .transition-from-blur").css("height", $("#about").css("height"));
    // $("#about .background-img").css("height", $("#about").css("height"));
    // $("#about .background-img").css("height", $("#about .overlay-img").css("height"));
    // $("#about").css("height", parseInt($("#about h2").css("height")) + parseInt($("#about .content").css("height")));
    // $("#about .transition-to-img").css("height", parseInt($("#about h2").css("height")) + parseInt($("#about .content").css("height")));
    // $("#about .overlay-img img").css("height", $("#about").css("height"));
    // $("#about .transition-from-blur").css("height", parseInt($("#about h2").css("height")) + parseInt($("#about .content").css("height")));

    // parseInt($("#contact .overlay-img img").css("height")) != 0 && parseInt($("#contact .overlay-img img").css("height")) < parseInt($("#contact").css("height")) ? $("#contact .overlay-img img").css("height", $("#contact").css("height")) : console.log();
    // console.log(parseInt($("#contact .overlay-img img").css("height")));
    parseInt($("#contact .overlay-img img").css("height")) != 0 && parseInt($("#contact .overlay-img img").css("height")) > parseInt($("#contact").css("height"))? $("#contact").css("height", $("#contact .overlay-img img").css("height")) : $("#contact .overlay-img img").css("height", $("#contact").css("height"));
    // parseInt($("#contact .overlay-img img").css("height")) != 0 && parseInt($("#contact .overlay-img img").css("height")) > parseInt($("#contact").css("height")) ? console.log("true") : console.log("false");
    // $("#contact .overlay-blured").css("height", $("#contact .overlay-img img").css("height"))
    // $("#contact .overlay-blured").css("height", $("#contact").css("height"))
    // $("#contact .overlay-img img").css("height", $("#contact").css("height"))
    // add blur
    // $("#skills .overlay-img img").css("height",  $("#skills").css("height"));
    // $("#contact").css("height", parseInt($("#skills").css("height")));
    // $("#contact .overlay-img img").css("height", $("#contact").css("height"));
    // $("#contact .background-img").css("height", $("#contact").css("height"));
    // $("#contact .transition-from-img").css("height", $("#contact").css("height"));
    // $("#contact iframe")
}

const blurDivs = document.querySelectorAll(".blur-load");
blurDivs.forEach(div => {
    $(div).find($("div")) ? img = $(div).find($("div")) : img = $(div).find($("img"));

    function loaded() {
        div.classList.add("loaded");
    }

    $(img).on("load", loaded());
})
window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", () => {
    resize()
});

$(document).ready(function() {
    let intNum = 0;

    resize();
    let interval = setInterval(() => {
        intNum++;
        console.log(intNum);
        intNum <= 10 ? resize() : clearInterval(interval);
    }, 1000)
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
        $("#banner .transition-to-img").css({opacity: -1 + value / 100});
        $("#about .background-img").css({opacity: $("#banner .transition-to-img").css("opacity")});
        $("#skills .transition-from-img").css({opacity: $("#banner .transition-to-img").css("opacity")});
        $("#contact .transition-from-from-img").css({opacity: $("#banner .transition-to-img").css("opacity")});
    } 
    if ($("#banner .transition-to-img").css("opacity") == 1){
        $("#about .background-img").css({opacity: 1 - (1 - (value / 100 - 1)) * -1});
        $("#skills .transition-from-img").css({opacity: 1 - (1 - (value / 100 - 1)) * -1});
        $("#contact .transition-from-from-img").css({opacity: 1 - (1 - (value / 100 - 1)) * -1});
    }

    if($("#about .background-img").css("opacity") < 1){
        $("#about .transition-to-img").css({opacity: -2 + value / 100});
        $("#skills .background-img").css({opacity: $("#about .transition-to-img").css("opacity")});
        $("#contact .transition-from-img").css({opacity: $("#about .transition-to-img").css("opacity")});
    } 
    if ($("#about .transition-to-img").css("opacity") == 1){
        $("#skills .background-img").css({opacity: 3 - (1 - (value / 100 - 1)) * -1});
        $("#about .transition-to-img").css({opacity: 3 - (1 - (value / 100 - 1)) * -1});
        $("#contact .transition-from-img").css({opacity: $("#skills .background-img").css("opacity")});
    }

    if($("#skills .background-img").css("opacity") < 1){
        $("#skills .transition-to-img").css({opacity: -2 + (1 - (value / 100 - 1)) * -1});
        $("#contact .background-img").css({opacity: $("#skills .transition-to-img").css("opacity")});
    }
}

function resize() {
    window.innerWidth > 1000 ? largerScreen() : smallerScreen();
}

largerScreen = () => {
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        if(parseInt($(section).find(".overlay-img img").css("height")) >= parseInt($(section).css("height"))) {
            $(section).css({height: $(section).find(".overlay-img img").css("height")});
        } else {
            $(section).find(".overlay-img img").css({height: $(section).css("height")});
        }
        renderBackground(section);
    })
}   

smallerScreen = () => {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        $(section).css({height: parseFloat($(section).find(".content").css("height")) + parseFloat($(section).find("h2").css("height"))});
        renderBackground(section);
    })
}

renderBackground = (parentEl) => {
    const backgroundOptions = [".transition-from-img", ".transition-from-from-img", ".transition-from-blur", ".background-img", ".background-blur", ".transition-to-img", ".transition-to-to-img"]
    
    backgroundOptions.forEach(option => {
        if($(parentEl).find(option)[0]) {
            let interval = setInterval(() => {
                if ($(parentEl).attr("style") != undefined) {
                    let el = $(parentEl).find(option)[0];
                    $(el).css("height", parseFloat($(parentEl).css("height")));
                    clearInterval(interval);
                }
            }, 500);
        }
    })
}

const blurDivs = document.querySelectorAll(".blur-load");
blurDivs.forEach(div => {
    $(div).find($("div")) ? img = $(div).find($("div")) : img = $(div).find($("img"));

    function loaded() {
        div.classList.add("loaded");
    }

    $(img).on("load", loaded());
})
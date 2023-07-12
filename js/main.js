window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScroll = htmlElement.scrollTop / htmlElement.clientHeight;
    console.log(Math.min(percentOfScreenHeightScroll * 100, 100));
    htmlElement.style.getPropertyPriority("--scroll", Math.min(percentOfScreenHeightScroll * 100, 100))
    if (Math.min(percentOfScreenHeightScroll * 100, 100) > 25) {
        $(".navbar").addClass("scroll");
    }
    else{
        $(".navbar").removeClass("scroll");
    }
}

setScrollVar();
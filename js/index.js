// $(".skill").mouseover((e) => {
//     const parent = $(e.currentTarget).parent()[0];
//     console.log($(e.currentTarget).find($("h3").text())[0])
//     if (parent.className === "right"){
//         el = $("#skills .left .skill");
//     } else{
//         el = $("#skills .right .skill");
//     }
//     $(el).css("opacity", "0");
// }).mouseout((e) => {
//     const parent = $(e.currentTarget).parent()[0];
//     let el;
//     if (parent.className === "right"){
//         el = $("#skills .left .skill");
//     } else{
//         el = $("#skills .right .skill");
//     }
//     $(el).css("opacity", "1");
// });
$(window).on( "load", () => {
    $("[href='https://elfsight.com/online-form-builder/?utm_source=websites&utm_medium=clients&utm_content=form-builder&utm_term=127.0.0.1&utm_campaign=free-widget']").remove();
} );
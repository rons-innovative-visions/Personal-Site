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
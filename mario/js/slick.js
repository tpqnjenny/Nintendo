// const { data } = require("jquery");

$(function(){
    $("#p-show").slick({
        autoplay:true,
        infinite:true,
        autoplaySpeed:2000,
        slidesToShow:1,
        slidesToScroll:1,
        arrows: false,
    });
})
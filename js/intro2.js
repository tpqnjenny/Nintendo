$(function(){
    $(".intro").on("mouseover",function(){
        const vid = $(this).find("video").get(0);

        vid.currentTime=0;

        vid.play();
    });

    $(".intro").on("mouseout",function(){
        const vid=$(this).find("video").get(0);
        vid.pause();
    });
})
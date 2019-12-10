$(function(){
    var index = 0;
    var timeId;
    var timeId2;
    var $lunbo = $(".lunbo .lunbo_img img");
    var $lunbo_circle =  $(".lunbo .lunbo_img ul li");

    function lunbo_time(){
        timeId = setInterval(function(){
            $lunbo.eq(index).css("display","block").siblings("img").css("display","none");
            $lunbo_circle.eq(index).addClass("circle_li2").siblings("li").removeClass("circle_li2");
            index ++;
            if(index == 3){
                index = 0;
            }
        },2000);
    }
    lunbo_time();
    $(".lunbo").on("mouseenter",function(){
        clearTimeout(timeId);
    }).on("mouseleave",function(){
        lunbo_time();
    })
    $lunbo_circle.on("mouseover",function(){
        clearTimeout(timeId);
        $(this).addClass("circle_li2").siblings("li").removeClass("circle_li2");
        index = $(this).index();
        $lunbo.eq(index).css("display","block").siblings("img").css("display","none");
    })
})
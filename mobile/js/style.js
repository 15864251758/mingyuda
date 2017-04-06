$(function(){
    jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});

    $('.nav>li').click(function(){
        if ($('.nav li ul').css("display")=="none") {
            $('.nav li ul').fadeIn();
        }else{
            $('.nav li ul').fadeOut();
        }
    })
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 20
    });
})
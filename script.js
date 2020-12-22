$(document).ready(function(){
    $("#banner").css({"height":$(window).height() + "px"});

    var flag = false;
    var scroll;
    var anch = $(window).width();

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        
        if(scroll > 200 ){
            if(!flag){
            $("#logo").css({"margin-top": "0px", "width": "130px","heigth": "80px"});
            $("header").css({"background-color": "#ee9254", "z-index": "100"});
            flag = true;
            
        }
        }else{
            if(flag){
            $("#logo").css({"margin-top": "100px", "width": "500px","heigth": "255px"});
            $("header").css({"background-color": "transparent"});    
            flag = false;
            }
        }

        });
});
$(".icono").click(function(){
    $(this).toggleClass("fa-times");
    $(".enlaces").toggleClass("active");
});
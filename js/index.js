

let aboutLink = document.getElementById("aboutLink");
let aboutList = document.getElementById("aboutList");


aboutLink.addEventListener("mouseenter" , function(){

    aboutList.classList.replace("d-none" , "d-flex")
})
aboutLink.addEventListener("mouseleave" , function(){

    aboutList.classList.replace("d-flex" , "d-none")
})


$(".navbar li").click( function(){

    $(this).addClass("active").siblings().removeClass("active")
})

$("a[href^='#']").click( function(e){

    e.preventDefault()
})



$(window).scroll( function(){

    let eInfoScroll = $(window).scrollTop();
    
    if( eInfoScroll > 200 )
    {
        $(".navbar").css("backgroundColor","#222222")
        $(".nav-item").css("padding",".5rem .4rem")
        $("#buttonTop").fadeIn(500)
    }
    else
    {
        $(".navbar").css("backgroundColor","transparent")
        $(".nav-item").css("padding","1.5rem .4rem")
        $("#buttonTop").fadeOut(500)
    }
})

$(document).ready( function(){

    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
})







$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1100:{
            items:3
        }
    }
})




$("#buttonTop").click( function(){

    $("html,body").animate( {scrollTop:0} , 1000 )
})
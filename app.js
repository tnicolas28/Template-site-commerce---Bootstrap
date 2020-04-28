// Ekko LightBox images

$(document).on('click',

'[data-toggle="lightbox"]',function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
})

//Carousel de texte

$('.carousel').carousel({

    interval:2500,
    pause : 'null'

})

// Navbar animation

$(window).scroll(function(){
    if($(this).scrollTop() > 30){
        $('.navbar').addClass('opaque');
    }
    else{
        $('.navbar').removeClass('opaque');
    }
})
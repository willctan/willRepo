$('.resume').on("click", function(){
    $('.resume').css("background-color","red");
})

$('.resume').hover(function() {
    $('.resume').toggleClass( "active" );
})
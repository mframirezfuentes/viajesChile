$(document).ready(function () {
    

    $('[data-toggle="popover"]').popover()
    $("a").click(function (evento) { 
        evento.preventDefault();
        var gato= this.hash;
        $("html").animate({
            scrollTop: $(gato).offset().top,
        }, 800)
        
    });
});

   

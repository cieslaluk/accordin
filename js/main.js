$(document).ready(function(){
    
        
    $('.accordion-item h2').click(function(){
        
            if ($(this).next().hasClass('expanded')){
                $(this).next().slideUp().removeClass('expanded');
            
        }else {
            $('.accordion-item p').slideUp(1000).removeClass('expanded');
             $(this).next().slideDown().addClass('expanded');
        }
       
        
    });
    
    
});
$(document).ready(function(){
    $(".card-bx .card").mouseover(function(){
      $(".card-bx .card").removeClass("active") 
      $(this).attr("class","card active");
      
    })
    
    
});
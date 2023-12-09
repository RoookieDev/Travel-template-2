window.addEventListener("scroll", ()=>{
    var screen_position = window.innerHeight/2;    
    var scroll_container = document.querySelectorAll(".my-scroll-container");
    
    for(let i =0; i<scroll_container.length;i++){
        var scroll_container_position = scroll_container[i].getBoundingClientRect().top;
        var scroll_container_height = scroll_container[i].getBoundingClientRect().height;
        var left_to_right  = document.querySelectorAll( ".left-to-right");
        var right_to_left = document.querySelectorAll(".right-to-left");
        
        console.log("container position" + scroll_container_position);
        console.log("Screen height "+screen_position)
        console.log("Container height" + scroll_container_height)
         if(scroll_container_position < screen_position ){
            for(j =0; j<left_to_right.length; j++){
                left_to_right[j].style.left = '0';
                left_to_right[j].style.opacity = '1';    
            } 

            for(j=0; j< right_to_left.length;j++){
                right_to_left[j].style.left = '0';
                right_to_left[j].style.opacity = '1';
            }
            
    
             
    
         }
         else{
            for(j =0; j<left_to_right.length; j++){
                left_to_right[j].style.left = '-100px';
                left_to_right[j].style.opacity = '0';    
            } 

            for(j=0; j< right_to_left.length;j++){
                right_to_left[j].style.left = '100px';
                right_to_left[j].style.opacity = '0';
            }
         }

        
    }

    
    
    

});

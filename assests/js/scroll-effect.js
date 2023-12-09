window.addEventListener("scroll", ()=>{
    let content_bx = document.querySelector(".banner");
    let content_position = content_bx.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/2;
    let content_height = content_bx.getBoundingClientRect().height;
    var text_bx = document.querySelector("#content_text_bx");
    var img_bx = document.querySelector("#banner_img_bx")
    if(content_position < screenPosition){
        text_bx.style.opacity = '1';
        text_bx.style.left = '0';
        img_bx.style.opacity = '1';
        img_bx.style.left = '0';
        
    }
    else{
        text_bx.style.opacity = '0';
        text_bx.style.left = '100px';
        img_bx.style.opacity = '0';
        img_bx.style.left = '-100px';
    }

    let slider_con = document.querySelector("#slider-con");
    let slider_container = document.querySelector("#slider_container");
    let sldier_position = slider_con.getBoundingClientRect().top;
    let small_img = document.querySelector("#small-img");
    if(sldier_position < screenPosition){
        slider_container.style.opacity = '1';
        slider_container.style.left = '0';
        small_img.style.left='0';
        small_img.style.opacity='1'
    }
    else{
        slider_container.style.opacity = '0';
        slider_container.style.left = '0px';
        small_img.style.left='100px';
        small_img.style.opacity='0'
    }


    let about_con = document.querySelector(".about");
    let about_con_pos =about_con.getBoundingClientRect().top;
    let about_text = document.querySelector(".about-bx");
    let testimonial = document.querySelector(".slider-bx");

    if(about_con_pos < screenPosition){
        about_text.style.opacity='1';
        about_text.style.top = '0';
        testimonial.style.opacity='1';
        testimonial.style.top = '0';
    }
    else{
        about_text.style.opacity='0';
        about_text.style.top = '-40px';
        testimonial.style.opacity='0';
        testimonial.style.top = '40px';
    }


})


// window.addEventListener('scroll',(e)=>{
      //   const nav = document.querySelector('#navigation-container');
      //   if(window.pageYOffset>0){
      //     nav.classList.add("add-shadow");
      //   }else{
      //     nav.classList.remove("add-shadow");
      //   }
      // });
      $(window).scroll(function(){
        if ($(window).scrollTop() >= 30) {
           $('#navigation-container').addClass('shadow-header');
        }
        else {
           $('#navigation-container').removeClass('shadow-header');
        }
    });

    // const navbar = document.querySelector('#navlinks');
    // window.onscroll = () => {
    //     if (window.scrollY > 300 && window.scrollY < 500) {
    //         navbar.classList.add('nav-elements');
    //     } else {
    //         navbar.classList.remove('nav-elements');
    //     }
    // };

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 0 && $(window).scrollTop() <=400) {
           $('#navlinks').addClass('nav-elementss');
        }
        else {
           $('#navlinks').removeClass('nav-elementss');
        }
    });
    // $(window).scroll(function(){
    //     if ($(window).scrollTop() >= 400 && $(window).scrollTop() <=800) {
    //        $('#navlinks').addClass('nav-elements');
    //     }
    //     else {
    //        $('#navlinks').removeClass('nav-elements');
    //     }
    // });


    // var mouse = new Audio('sounds/mouse.mp3')
    // var btn = document.getElementById("sendmessage")
    // btn.addEventListener("click",mouse.play());
    // var navbuttons = document.getElementsById("#navlinks")
    // navbuttons.addEventListener("click",mouse.play());


    (function ($) {

          /*--Scroll Back to Top Button Show--*/

          $(window).scroll(function(){
              if ($(this).scrollTop() > 100) {
                  $('#back-to-top').fadeIn();
              } else {
                  $('#back-to-top').fadeOut();
              }
          });

          //Click event scroll to top button jquery

          $('#back-to-top').click(function(){

              $('html, body').animate({scrollTop : 0},600);
              return false;
          });

          })(jQuery);

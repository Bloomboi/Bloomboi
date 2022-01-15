// $(function() {
//     var boxDraw = $(".scroll");
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();

//         if (scroll >= 4) {
//             boxDraw.addClass("draw");
//         } 
//     });
// });

// gsap.to('header', { autoAlpha: 0,
//     scrollTrigger: {
//         trigger: '.scrollTriggerLogo',
//         start: 'top top+=100',
//         end: '+=200',
//         scrub: true,
//         markers: true
//     }
// });

function displayHide() {
    document.getElementById("hide").style.visibility = "hidden";
    document.getElementById("rect").style.visibility = "visible";
    
    
 }
 function displayShow() {
    document.getElementById("hide").style.visibility = "visible";
    document.getElementById("rect").style.visibility = "hidden";

 }

 function moveDown() {
   document.getElementById("sub-menu").style.paddingTop = "90px";
 }

 function moveUp() {
  document.getElementById("sub-menu").style.paddingTop = "0px";
}


ScrollTrigger.create({
   
    toggleClass: {className: "scrolled", targets: '.header-trigger' },
    
    start: 'top+=100',
    
    end: "max",
    
    onEnter: self => setTimeout(displayHide, 500),
    onLeaveBack: self => setTimeout(displayShow,500)
  });

  
  ScrollTrigger.create({
   
    
    toggleClass: {className: "fadein", targets: '.rectangle' },
    start: 'top+=100',
    
    end: "max+10" ,
    
    onEnter: self => setTimeout(displayHide, 500),
   
    


  });

    
  ScrollTrigger.create({
   
    
    toggleClass: {className: "fadeout", targets: '.rectangle' },
    
    start: -10,
    end: "top+=200",
   
    
    onLeaveBack: self => setTimeout(displayShow,500),
   
  });
    
      
  ScrollTrigger.create({
   
    start: -10,
    toggleClass: {className: "fadein", targets: '.header-trigger' },
   
  
    end: "top+=200",
   
    
    onLeaveBack: self => setTimeout(displayShow,1500)

  });
    
  
   
    
  ScrollTrigger.create({
   
    
    
    start: 'top+=100',
    
    end: "max" ,
  

    onEnter: self => setTimeout(moveDown, 400),
    onLeaveBack: self => setTimeout(moveUp, 500),


  });

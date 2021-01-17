
let  btnNavToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");
let btnSide = document.querySelector(".btn-side");
let sideHeader = document.querySelector(".side-header");


// this is to check if a particular div has been added, if yes remove and if no add

btnNavToggle.addEventListener('click', function(){


      // if(links.classList.contains("show-links")){
      //       links.classList.remove("show-links");
      //       btnNavToggle.classList.remove("style-toggle");
            
         
      // }else{
      //       links.classList.add("show-links");
      //       btnNavToggle.classList.add("style-toggle");   
      // }
      
   // short hand method
   links.classList.toggle("show-links");
   btnNavToggle.classList.toggle("style-toggle");

});

btnSide.addEventListener('click', function(){
   sideHeader.classList.toggle("show-sidebar");
   btnSide.classList.toggle("style-toggle");
   
});
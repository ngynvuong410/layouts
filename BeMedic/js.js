$(function () {
 $(window).scroll(function () { 
       fixedNav($(this)[0].pageYOffset);
            
 });
 

});
function fixedNav(pageoffsety){
     if(pageoffsety<=62){
        $('nav').removeClass('navbar-fixed');
        $('nav').removeClass('high-up');
     }else{
         $('nav').addClass('navbar-fixed');
         $('nav').addClass('high-up')
        
     }
     if(pageoffsety >= $('section.about').offset().top - 200 ){  
        $('section.about .col-sm-3').addClass('show'); 
      
     }
     if(pageoffsety >= $('section.services').offset().top -200 ){
      $('section.services').addClass('show');
     }

       
}
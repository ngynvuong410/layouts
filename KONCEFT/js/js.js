$(document).ready(function () {
    $('.pageBody').isotope({
        // options
        itemSelector: '.page-item'       
      });
      //Process
      $('.head-darboark span:first-child').on('click',function(){
               $('.menu').toggleClass('hide');    
      });
      //filter  
       $('.menu li').each(function (index, element) {
         // element == this
         $(this).on('click',function(){
             var val = $(this).attr('value');
             if(val=="01"){$('.pageBody').isotope({ filter: '.IDENTITY' });   }
             else if(val=="02"){
              $('.pageBody').isotope({ filter: '.MOTION' });   
             }else if(val=="03"){$('.pageBody').isotope({ filter: '.ILLUSTRATION' });   }
             else if(val=="04"){$('.pageBody').isotope({ filter: '.PRESENTATION' });   }
             else if(val=="05"){$('.pageBody').isotope({ filter: '.PRINT' });   }
             else if(val=="06"){$('.pageBody').isotope({ filter: '.WEB' });   }
             else {$('.pageBody').isotope({ filter: '*' });   }
         });
         
       });
          
});

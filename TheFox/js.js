$(function () {
    init();
    $(window).on('scroll',function(){
       var locCurrent= $(this)[0].pageYOffset;       
       setMenuFixed(locCurrent); 
        goneComponent(locCurrent);
    });
});
function init(){
    new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }).init();
    
}
function setMenuFixed(location){
     var nav=$('section.nav-parent');
    if(location>=20){
         $(nav).addClass('fixed');
    }else{
        $(nav).removeClass('fixed');
    }
}
function goneComponent(loc_cur){ 
    var num =$('section.number')[0].offsetTop;
    console.log(num);
    
     if(loc_cur>=Componet.def.def_loc){
        $(Componet.def.this).addClass('def-showitem');
     } if(loc_cur >= num-200){
        var idx=1; var interval_obj = setInterval(function(){
            $('p.count-number').text(''+[idx*=1.2]);if(idx>=1000000){ $('p.count-number').text('1000');
           clearInterval(interval_obj);}
       }, 5);
       
     }
}

var Componet={
    def:{ 
        this:$('section.def'),
        def_loc:$('section.def')[0].offsetTop
    }
}
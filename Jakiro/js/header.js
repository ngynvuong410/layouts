var toggle=$('.fix-icon_bar');
toggle.on('click',function(){
    $(this).toggleClass('hover_after').toggleClass('hover_before');
    $('section.menu-stand').toggleClass('menu-stand_on')
})
$('.stand-item').on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('on');
})

$( window ).resize(function() {
    if($(this).width()>=992){$('section.menu-stand').removeClass('menu-stand_on')}
  });
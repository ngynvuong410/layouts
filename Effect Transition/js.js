$(function () {
    $('select').on('change', function () {
        var id = this.value;
        var namePage=$(this).attr('data-page');
        
        if (id != 0) {
            LoadEffect(id,namePage);
            $('.slide-remote').addClass('show');
        } else { $('.slide-remote').removeClass('show'); }

    });

});
var remoteLeft =null;
function LoadEffect(idSelect,page) {
    if(page=="fullwidth"){
        switch (idSelect) {

            case "1":
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "2":
    
                 remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "3":
    
                 remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "4":
    
               remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "5":
                 remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "6":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "7":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "8":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "9":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "10":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "11":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "12":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "13":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "14":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            case "15":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect);
                });
                break;
            default:
                break;
        }
    }else if(page=="small"){
        switch(idSelect){
            case "1":
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect+'m');
                });
                break;
            case "2":
    
                 remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect+'m');
                });
                break;
            case "3":
    
                 remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect+'m');
                });
                break;
            case "4":
    
               remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect+'m');
                });
                break;
            case "5":
                 remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect+'m');
                });
                break;
            case "6":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect+'m');
                });
                break;
            case "7":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect+'m');
                });
                break;
            case "8":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect+'m');
                });
                break;
            case "9":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect+'m');
                });
                break;
            case "10":
    
                remoteLeft = $('.remote-left').on('click', function () {
                    //should have a function amon... to it action normar .
                    Motion(idSelect+'m');
                });
                break;
        }
    }    
  
}
function Motion(Numstyle) {
    var active = $('.slide-item.active').addClass('motion-lost_' + Numstyle).one('webkitAnimationEnd', function () {
        $(this).removeClass('motion-lost_' + Numstyle).removeClass('active');
    });
    var next = $(active).next().addClass('motion-in_' + Numstyle).one('webkitAnimationEnd', function () {
        $(this).removeClass('motion-in_' + Numstyle);
        $(this).addClass('active');
    });
    if (next.length == 0) {
        var slideFirst = $('.slide-item:first-child').addClass('active').addClass('motion-in_' + Numstyle).one('webkitAnimationEnd', function () {
            $(this).removeClass('motion-in_' + Numstyle);
        });
        return false;
    }
}
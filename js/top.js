$(function() {

    $("#goTop").click(function() {

        $("html,body").animate({
            scrollTop: 0
        }, 800);

        //$("html,body").animate({scrollTop:0},900,"easeOutBounce");

        return false;

    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});
$(window).scroll(function() {
        if ($(this).scrollTop() > 3000 ) {
            $('#handna').fadeOut("fast");
        } else if ($(this).scrollTop() > 580 ){
            $('#handna').stop().fadeIn("fast");
        }
        else  {
            $('#handna').stop().fadeOut("fast");
        }
    });


$(window).scroll(function() {
    if ($(this).scrollTop() > 655) {
        $('#nav').fadeIn("fast");
    } else {
        $('#nav').stop().fadeOut("fast");
    }
});;
$(function() {
    //control display of goTop button and motion
    $("#go1").click(function() {
        jQuery("html,body").animate({
            scrollTop: 120
        }, 800);
    });
}, )
$(function() {
    //control display of goTop button and motion
    $("#go2").click(function() {
        jQuery("html,body").animate({
            scrollTop: 700
        }, 800);
    });
}, )
$(function() {
    //control display of goTop button and motion
    $("#go3").click(function() {
        jQuery("html,body").animate({
            scrollTop:1900
        }, 800);
    });
}, )
$(function() {
    //control display of goTop button and motion
    $("#go4").click(function() {
        jQuery("html,body").animate({
            scrollTop: 3900
        }, 800);
    });
}, )



//以下領養頁
$(function() {
            //control display of goTop button and motion
            $("#s1").click(function() {
                jQuery("html,body").animate({
                    scrollTop: 700
                }, 800);
            });
        }, )
        $(function() {
            //control display of goTop button and motion
            $("#s2").click(function() {
                jQuery("html,body").animate({
                    scrollTop: 1110
                }, 800);
            });
        }, )
        $(function() {
            //control display of goTop button and motion
            $("#s3").click(function() {
                jQuery("html,body").animate({
                    scrollTop: 1520
                }, 800);
            });
        }, )
        $(function() {
            //control display of goTop button and motion
            $("#s4").click(function() {
                jQuery("html,body").animate({
                    scrollTop: 1930
                }, 800);
            });
        }, )
        $(function() {
            //control display of goTop button and motion
            $("#s5").click(function() {
                jQuery("html,body").animate({
                    scrollTop: 2340
                }, 800);
            });
        }, )
        $(function() {
            //control display of goTop button and motion
            $("#s6").click(function() {
                jQuery("html,body").animate({
                    scrollTop: 2750
                }, 800);
            });
        }, )
      
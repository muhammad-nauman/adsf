//hide loading
$(window).on("load", function () {
    $('.loading').fadeOut(1000, function () {
    }).remove();
    $('#hero_anim').addClass('scrolled-action')

});
//end loading
$(document).ready(function () {
    //variables
    var body = $('body'),
        myNav = $('#scrollnav');

    body.scrollspy(
        {
            target: '#scrollnav',
            offset: 100
        });

    // smoothScroll for workshops
    $('.smoothScroll').smoothScroll({
        speed: 600,
        offset: -80
    });

    var flowSec = $('#workshops');
    flowSec.on('click', '.show-more', function () {
        $('.show-less').removeClass('show-less').addClass('show-more');
        $('.full-desc').hide();
        $(this).removeClass('show-more').addClass('show-less');
        $(this).siblings('.desc-cont').find('.full-desc').fadeIn();
    });
    flowSec.on('click', '.show-less', function () {
        $(this).removeClass('show-less').addClass('show-more');
        $('.full-desc').fadeOut();
    });
    // for the colouring same workshop




    //smart scroll for shows


    $('.smoothScroll').smoothScroll({
        speed: 600,
        offset: -80
    });

    var flowSec = $('#shows');
    flowSec.on('click', '.show-more', function () {
        $('.show-less').removeClass('show-less').addClass('show-more');
        $('.full-desc').hide();
        $(this).removeClass('show-more').addClass('show-less');
        $(this).siblings('.desc-cont').find('.full-desc').fadeIn();
    });
    flowSec.on('click', '.show-less', function () {
        $(this).removeClass('show-less').addClass('show-more');
        $('.full-desc').fadeOut();
    });
    // for the colouring same workshop


    //smoothscroll foe interactive

    $('.smoothScroll').smoothScroll({
        speed: 600,
        offset: -80
    });

    var flowSec = $('#interactive');
    flowSec.on('click', '.show-more', function () {
        $('.show-less').removeClass('show-less').addClass('show-more');
        $('.full-desc').hide();
        $(this).removeClass('show-more').addClass('show-less');
        $(this).siblings('.desc-cont').find('.full-desc').fadeIn();
    });
    flowSec.on('click', '.show-less', function () {
        $(this).removeClass('show-less').addClass('show-more');
        $('.full-desc').fadeOut();
    });



    //back to top btn click
    var bacToTop = $('#back-to-top');
    bacToTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //show and hide back to top button and add nav-bar fixed top


    if ($(window).scrollTop() > 250 || $(window).width() < 768) {
        myNav.addClass('fixed-top').removeClass('transparent-nav');
        bacToTop.fadeIn();
    } else {
        myNav.removeClass('fixed-top').addClass('transparent-nav');
        bacToTop.fadeOut();
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 250 || $(window).width() < 768) {
            myNav.addClass('fixed-top').removeClass('transparent-nav');
            bacToTop.fadeIn();
        } else {
            myNav.removeClass('fixed-top').addClass('transparent-nav');
            bacToTop.fadeOut();
        }
    });
    $(window).resize(function () {
        if ($(window).width() < 768) {
            myNav.addClass('fixed-top').removeClass('transparent-nav');
        }
    });
    //end back to top

    //add Scrolled action to the selected section

    $(window).on('scroll', function () {
        $('.catch-scroll').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 200) {
                $(this).addClass('scrolled-action');
            } else {
                $(this).removeClass('scrolled-action');
            }
        });

    });


    $('.navbar-nav li a').click(function () {
        $('.navbar-collapse').removeClass('show');
    });

    //sliders
    var swiper = new Swiper('.workshop-wrapper', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerColumn: 2,
                pagination: false
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerColumn: 1,
                pagination: false
            },
            380: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerColumn: 1,
                pagination: false
            }
        }
    });

    //sliders for shows
    var swiper = new Swiper('.show-wrapper', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerColumn: 2,
                pagination: false
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerColumn: 1,
                pagination: false
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerColumn: 1,
                pagination: false
            }
        }
    });

    //slider  for interactive

    var swiper = new Swiper('.interactiv-wrapper', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerColumn: 2,
                pagination: false
            },
            460: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerColumn: 1,
                pagination: false
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerColumn: 1,
                pagination: false
            }
        }
    });



    var swiper = new Swiper('.sponsor-mobile', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

    });



    //sliders participating
    var swiper = new Swiper('.participating-wrapper', {
        slidesPerView: 7,
        slidesPerColumn: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev'
        },
        pagination: {
            el: '.participating-pagination',
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                pagination: {
                    el: '.participating-pagination',
                    clickable: true
                }
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerColumn: 1,
                pagination: false
            },
            460: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerColumn: 1,
                pagination: false
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerColumn: 1,
                pagination: false
            }
        }
    });
});



//sliders  rtl workshop
var swiperRtl = new Swiper('.workshop-wrapperRtl', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.nav-prev',
        prevEl: '.nav-next'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerColumn: 2,
            pagination: false
        },
        460: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerColumn: 1,
            pagination: false
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerColumn: 1,
            pagination: false
        }
    }
});



//sliders  rtl show
var swiperRtl = new Swiper('.show-wrapperRtl', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.nav-prev',
        prevEl: '.nav-next'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerColumn: 2,
            pagination: false
        },
        460: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerColumn: 1,
            pagination: false
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerColumn: 1,
            pagination: false
        }
    }
});

//swiper for interactive
var swiperRtl = new Swiper('.interactiv-wrapperRtl', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.nav-prev',
        prevEl: '.nav-next'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerColumn: 2,
            pagination: false
        },
        460: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerColumn: 1,
            pagination: false
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerColumn: 1,
            pagination: false
        }
    }
});




//sliders participating RTL
var swiperRtl = new Swiper('.participating-wrapperRtl', {
    slidesPerView: 7,
    slidesPerColumn: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.nav-prev',
        prevEl: '.nav-next'
    },
    pagination: {
        el: '.participating-pagination',
        clickable: true
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            pagination: {
                el: '.participating-pagination',
                clickable: true
            }
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerColumn: 1,
            pagination: false
        },
        460: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerColumn: 1,
            pagination: false
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerColumn: 1,
            pagination: false
        }
    }
});
//end document ready

//start nice scroll
$("body").niceScroll({
    cursorcolor: '#014273',
    cursorwidth: '6px',
    cursorborder: '2px',
    cursorborderradius: '10px',
    zindex: '9999999999999',
    scrollspeed: 110,
    horizrailenabled: false,
    mousescrollstep: 40,
    touchbehavior: false,
    preventmultitouchscrolling: false
});
//end nice scroll




//wow js
new WOW().init();
//end wow js
let links = document.getElementsByClassName('CiTy')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => City(links[i].innerHTML))
}
function City(CityValue) {
    console.log(CityValue)
    switch (CityValue) {
        case 'ABU DHABI':
        {
            $('.abuDhabi').show();
            $('.alAin').hide();
            $('.alDhafra').hide();
            $('.workshop-swipper-angles').show();
            break;

        }
        case 'AL AIN':
        {
            $('.abuDhabi').hide();
            $('.alAin').show();
            $('.alDhafra').hide();
            $('.workshop-swipper-angles').show();
            break;

        }
        case 'Al DHAFRA':
        {
            $('.abuDhabi').hide();
            $('.alAin').hide();
            $('.alDhafra').show();
            $('.workshop-swipper-angles').show();
            break;

        }
    }
}

let Ages = document.getElementsByClassName('AgE')
for (let i = 0; i < Ages.length; i++) {
    Ages[i].addEventListener("click", () => age(Ages[i].innerHTML))
}
function age(ageValue) {
    console.log(ageValue)
    switch (ageValue) {
        case 'All':
        {
            $('.aLL').show();
            $('.two').hide();
            $('.Nine').hide();
            $('.Five').hide();
            $('.fivePlus').hide();
            $('.workshop-swipper-angles').show();
            break;

        }
        case '+2':
        {
            $('.aLL').hide();
            $('.two').show();
            $('.Nine').hide();
            $('.Five').hide();
            $('.fivePlus').hide();
            $('.workshop-swipper-angles').show();
            break;

        }
        case '+5':
        {
            $('.aLL').hide();
            $('.two').hide();
            $('.Nine').hide();
            $('.Five').show();
            $('.fivePlus').hide();
            $('.workshop-swipper-angles').show();
            break;

        }
        case '5+':
        {
            $('.aLL').hide();
            $('.two').hide();
            $('.Nine').hide();
            $('.Five').hide();
            $('.fivePlus').show();
            $('.workshop-swipper-angles').show();
            break;

        }
        case '+9':
        {
            $('.aLL').hide();
            $('.two').hide();
            $('.Nine').show();
            $('.Five').hide();
            $('.fivePlus').hide();
            $('.workshop-swipper-angles').show();
            break;

        }
    }
}

let WorkShopss = document.getElementsByClassName('WorkShops')
for (let i = 0; i < WorkShopss.length; i++) {
    WorkShopss[i].addEventListener("click", () => WorkShops(WorkShopss[i].innerHTML))
}
function WorkShops(WorkshopValue) {
    console.log(WorkshopValue)
    switch (WorkshopValue) {
        case 'SCIENCE':
        {
            $('.science').show();
            $('.Technology').hide();
            $('.Engineering').hide();
            $('.Mathematices').hide();
            $('.artAndDesign').hide();
            $('.workshop-swipper-angles').show();
            break;

        }
        case 'TECHNOLOGY':
        {
            $('.science').hide();
            $('.Technology').show();
            $('.Engineering').hide();
            $('.Mathematices').hide();
            $('.artAndDesign').hide();
            $('.workshop-swipper-angles').show();
            break;

        }
        case 'ENGINEERING':
        {
            $('.science').hide();
            $('.Technology').hide();
            $('.Engineering').show();
            $('.Mathematices').hide();
            $('.artAndDesign').hide();
            $('.workshop-swipper-angles').show();
            break;

        }
        case 'ART AND DESIGN':
        {
            $('.science').hide();
            $('.Technology').hide();
            $('.Engineering').hide();
            $('.Mathematices').hide();
            $('.artAndDesign').show();
            $('.workshop-swipper-angles').show();
            break;

        }
        case 'MATHEMATICS':
        {
            $('.science').hide();
            $('.Technology').hide();
            $('.workshop-swipper-angles').hide();
            $('.Engineering').hide();
            $('.Mathematices').show();
            $('.artAndDesign').hide();
            break;

        }
    }
}
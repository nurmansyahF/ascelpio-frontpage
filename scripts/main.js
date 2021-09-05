(function () {
  'use strict';

  function init() {
    // INLINE SVG
    jQuery('img.svg').each(function (i) {
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function (data) {
        var $svg = jQuery(data).find('svg');
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
      }, 'xml');
    });// END OF INLINE SVG

    // mainLayout();
    runSlider();
    func();

  } init(); // END OF init()

  function mainLayout() {
    var $headerH = $('header').outerHeight(),
      $footerH = $('footer').height();
    $('main').css({ 'min-height': 'calc(100vh - ' + $footerH + 'px)', 'padding-top': +$headerH + 'px' });
  }

  function runSlider() {
    $('.slider').each(function () {
      var t = $(this),
          child = t.children().length,
          item = t.attr('data-items') ? t.attr('data-items') : 1,
          loops = t.attr('data-loop') && t.attr('data-loop') == "false" ? false : true;

      if( child > 1 ) {
        t.addClass('owl-carousel');
          t.owlCarousel({
            navText: ["<span></span>", "<span></span>"],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: item,
            loop: false,
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500
        });
      }else {
        t.addClass('no-slider');
        t.trigger('destroy.owl.carousel').removeClass('owl-carousel');
        t.removeClass('owl-loaded');
        t.find('.owl-stage-outer').children().unwrap();
      }

    });

    function slickMobile() {
      $('.slick-mobile').each(function () {
        var w = $(window).width();
        var t = $(this);
        if(w < 500){
          t.addClass('owl-carousel');
          t.owlCarousel({
            navText: [],
            items: 1,
            loop: false,
            nav: false,
            dots: false,
            autoplay: false,
            stagePadding: 30,
            autoWidth: true
          });
        }
      });
    }slickMobile();
  }// end of runSlider()

  function func() {

    if($('.join-webinar').length > 0){
      $('.footer').addClass('minus-top');
    }

    // STICKY HEADER
    if ($('.header').length > 0) {
      var header = $('.header'),
        pos = 10;
      $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= pos) {
          header.addClass('sticky');
          $('body').addClass('header-stick');
        } else {
          header.removeClass('sticky');
          $('body').removeClass('header-stick');
        }
      });
    }

    $('.marquee').each(function () {
      var $t = $(this);
      $t.marquee({
        speed: 100,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        startVisible: true,
        duplicated: true,
        pauseOnHover: true
      })
    })

    $('.accordion').each(function () {
      var $t = $(this),
        $card = $t.find('.card');

      $card.each(function () {
        var $el = $(this),
          $head = $el.find('.card-header'),
          $body = $el.find('.card-body');

        $head.click(function () {
          $card.not($el).removeClass('open');
          $el.toggleClass('open');
        });
      });
    });

    // Bootsrap Select
    $('.select').each(function(){
      $(this).selectpicker();
    });

    $('.drop-box').each(function(){
      var t     = $(this),
          inputs = t.find('#photo'),
          preview = t.find('.image-preview'),
          del   = t.find('.del-btn');

      function readURL(input, prev) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
              preview.css('background-image', 'url(' + e.target.result + ')');
              preview.fadeIn();
              del.fadeIn();
            }

            reader.readAsDataURL(input.files[0]);
        }
      }

      $("#photo").change(function(){
        readURL(this);
        console.log('jalan')
      });

      del.click(function(){
        $(this).fadeOut();
        preview.fadeOut();
        preview.css('background-image', '');
        inputs.val('');
      })

    });

    // Copy to clipboard
    $('.can-copy').each(function(){
      var t = $(this),
          fc = t.find('.form-control'),
          cp = t.find('.copy');
      $(cp).click(function(){
        $(fc).select();
        document.execCommand("copy");
      });
    })


  }// END of func()

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgLy8gSU5MSU5FIFNWR1xyXG4gICAgalF1ZXJ5KCdpbWcuc3ZnJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICB2YXIgJGltZyA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgdmFyIGltZ0lEID0gJGltZy5hdHRyKCdpZCcpO1xyXG4gICAgICB2YXIgaW1nQ2xhc3MgPSAkaW1nLmF0dHIoJ2NsYXNzJyk7XHJcbiAgICAgIHZhciBpbWdVUkwgPSAkaW1nLmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgalF1ZXJ5LmdldChpbWdVUkwsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyICRzdmcgPSBqUXVlcnkoZGF0YSkuZmluZCgnc3ZnJyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbWdJRCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICRzdmcgPSAkc3ZnLmF0dHIoJ2lkJywgaW1nSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGltZ0NsYXNzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cignY2xhc3MnLCBpbWdDbGFzcyArICcgcmVwbGFjZWQtc3ZnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzdmcgPSAkc3ZnLnJlbW92ZUF0dHIoJ3htbG5zOmEnKTtcclxuICAgICAgICAkaW1nLnJlcGxhY2VXaXRoKCRzdmcpO1xyXG4gICAgICB9LCAneG1sJyk7XHJcbiAgICB9KTsvLyBFTkQgT0YgSU5MSU5FIFNWR1xyXG5cclxuICAgIC8vIG1haW5MYXlvdXQoKTtcclxuICAgIHJ1blNsaWRlcigpO1xyXG4gICAgZnVuYygpO1xyXG5cclxuICB9IGluaXQoKTsgLy8gRU5EIE9GIGluaXQoKVxyXG5cclxuICBmdW5jdGlvbiBtYWluTGF5b3V0KCkge1xyXG4gICAgdmFyICRoZWFkZXJIID0gJCgnaGVhZGVyJykub3V0ZXJIZWlnaHQoKSxcclxuICAgICAgJGZvb3RlckggPSAkKCdmb290ZXInKS5oZWlnaHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoeyAnbWluLWhlaWdodCc6ICdjYWxjKDEwMHZoIC0gJyArICRmb290ZXJIICsgJ3B4KScsICdwYWRkaW5nLXRvcCc6ICskaGVhZGVySCArICdweCcgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBydW5TbGlkZXIoKSB7XHJcbiAgICAkKCcuc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgIGNoaWxkID0gdC5jaGlsZHJlbigpLmxlbmd0aCxcclxuICAgICAgICAgIGl0ZW0gPSB0LmF0dHIoJ2RhdGEtaXRlbXMnKSA/IHQuYXR0cignZGF0YS1pdGVtcycpIDogMSxcclxuICAgICAgICAgIGxvb3BzID0gdC5hdHRyKCdkYXRhLWxvb3AnKSAmJiB0LmF0dHIoJ2RhdGEtbG9vcCcpID09IFwiZmFsc2VcIiA/IGZhbHNlIDogdHJ1ZTtcclxuXHJcbiAgICAgIGlmKCBjaGlsZCA+IDEgKSB7XHJcbiAgICAgICAgdC5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4+PC9zcGFuPlwiLCBcIjxzcGFuPjwvc3Bhbj5cIl0sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcclxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcclxuICAgICAgICAgICAgaXRlbXM6IGl0ZW0sXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogNjAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTUwMCxcclxuICAgICAgICAgICAgc21hcnRTcGVlZDogMTUwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgdC5hZGRDbGFzcygnbm8tc2xpZGVyJyk7XHJcbiAgICAgICAgdC50cmlnZ2VyKCdkZXN0cm95Lm93bC5jYXJvdXNlbCcpLnJlbW92ZUNsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICB0LnJlbW92ZUNsYXNzKCdvd2wtbG9hZGVkJyk7XHJcbiAgICAgICAgdC5maW5kKCcub3dsLXN0YWdlLW91dGVyJykuY2hpbGRyZW4oKS51bndyYXAoKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNsaWNrTW9iaWxlKCkge1xyXG4gICAgICAkKCcuc2xpY2stbW9iaWxlJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHcgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICB2YXIgdCA9ICQodGhpcyk7XHJcbiAgICAgICAgaWYodyA8IDUwMCl7XHJcbiAgICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICAgIHQub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBuYXZUZXh0OiBbXSxcclxuICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGFnZVBhZGRpbmc6IDMwLFxyXG4gICAgICAgICAgICBhdXRvV2lkdGg6IHRydWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9c2xpY2tNb2JpbGUoKTtcclxuICB9Ly8gZW5kIG9mIHJ1blNsaWRlcigpXHJcblxyXG4gIGZ1bmN0aW9uIGZ1bmMoKSB7XHJcblxyXG4gICAgaWYoJCgnLmpvaW4td2ViaW5hcicpLmxlbmd0aCA+IDApe1xyXG4gICAgICAkKCcuZm9vdGVyJykuYWRkQ2xhc3MoJ21pbnVzLXRvcCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNUSUNLWSBIRUFERVJcclxuICAgIGlmICgkKCcuaGVhZGVyJykubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgaGVhZGVyID0gJCgnLmhlYWRlcicpLFxyXG4gICAgICAgIHBvcyA9IDEwO1xyXG4gICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIGlmIChzY3JvbGwgPj0gcG9zKSB7XHJcbiAgICAgICAgICBoZWFkZXIuYWRkQ2xhc3MoJ3N0aWNreScpO1xyXG4gICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdoZWFkZXItc3RpY2snKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdzdGlja3knKTtcclxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGVhZGVyLXN0aWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcubWFycXVlZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJHQgPSAkKHRoaXMpO1xyXG4gICAgICAkdC5tYXJxdWVlKHtcclxuICAgICAgICBzcGVlZDogMTAwLFxyXG4gICAgICAgIGdhcDogMCxcclxuICAgICAgICBkZWxheUJlZm9yZVN0YXJ0OiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxyXG4gICAgICAgIHN0YXJ0VmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICBkdXBsaWNhdGVkOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCcuYWNjb3JkaW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkdCA9ICQodGhpcyksXHJcbiAgICAgICAgJGNhcmQgPSAkdC5maW5kKCcuY2FyZCcpO1xyXG5cclxuICAgICAgJGNhcmQuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICRlbCA9ICQodGhpcyksXHJcbiAgICAgICAgICAkaGVhZCA9ICRlbC5maW5kKCcuY2FyZC1oZWFkZXInKSxcclxuICAgICAgICAgICRib2R5ID0gJGVsLmZpbmQoJy5jYXJkLWJvZHknKTtcclxuXHJcbiAgICAgICAgJGhlYWQuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJGNhcmQubm90KCRlbCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICRlbC50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEJvb3RzcmFwIFNlbGVjdFxyXG4gICAgJCgnLnNlbGVjdCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5zZWxlY3RwaWNrZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5kcm9wLWJveCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIHQgICAgID0gJCh0aGlzKSxcclxuICAgICAgICAgIGlucHV0cyA9IHQuZmluZCgnI3Bob3RvJyksXHJcbiAgICAgICAgICBwcmV2aWV3ID0gdC5maW5kKCcuaW1hZ2UtcHJldmlldycpLFxyXG4gICAgICAgICAgZGVsICAgPSB0LmZpbmQoJy5kZWwtYnRuJyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiByZWFkVVJMKGlucHV0LCBwcmV2KSB7XHJcbiAgICAgICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgcHJldmlldy5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcgKyBlLnRhcmdldC5yZXN1bHQgKyAnKScpO1xyXG4gICAgICAgICAgICAgIHByZXZpZXcuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgZGVsLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dC5maWxlc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAkKFwiI3Bob3RvXCIpLmNoYW5nZShmdW5jdGlvbigpe1xyXG4gICAgICAgIHJlYWRVUkwodGhpcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2phbGFuJylcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkZWwuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLmZhZGVPdXQoKTtcclxuICAgICAgICBwcmV2aWV3LmZhZGVPdXQoKTtcclxuICAgICAgICBwcmV2aWV3LmNzcygnYmFja2dyb3VuZC1pbWFnZScsICcnKTtcclxuICAgICAgICBpbnB1dHMudmFsKCcnKTtcclxuICAgICAgfSlcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDb3B5IHRvIGNsaXBib2FyZFxyXG4gICAgJCgnLmNhbi1jb3B5JykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgdCA9ICQodGhpcyksXHJcbiAgICAgICAgICBmYyA9IHQuZmluZCgnLmZvcm0tY29udHJvbCcpLFxyXG4gICAgICAgICAgY3AgPSB0LmZpbmQoJy5jb3B5Jyk7XHJcbiAgICAgICQoY3ApLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChmYykuc2VsZWN0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcblxyXG5cclxuICB9Ly8gRU5EIG9mIGZ1bmMoKVxyXG5cclxufSkoKTtcclxuIl0sImZpbGUiOiJtYWluLmpzIn0=

//# sourceMappingURL=main.js.map

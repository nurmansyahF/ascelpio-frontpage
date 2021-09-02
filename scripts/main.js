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
        slider.addClass('no-slider');
        slider.trigger('destroy.owl.carousel').removeClass('owl-carousel');
        slider.removeClass('owl-loaded');
        slider.find('.owl-stage-outer').children().unwrap();
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

  }// END of func()

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgLy8gSU5MSU5FIFNWR1xyXG4gICAgalF1ZXJ5KCdpbWcuc3ZnJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICB2YXIgJGltZyA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgdmFyIGltZ0lEID0gJGltZy5hdHRyKCdpZCcpO1xyXG4gICAgICB2YXIgaW1nQ2xhc3MgPSAkaW1nLmF0dHIoJ2NsYXNzJyk7XHJcbiAgICAgIHZhciBpbWdVUkwgPSAkaW1nLmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgalF1ZXJ5LmdldChpbWdVUkwsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyICRzdmcgPSBqUXVlcnkoZGF0YSkuZmluZCgnc3ZnJyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbWdJRCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICRzdmcgPSAkc3ZnLmF0dHIoJ2lkJywgaW1nSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGltZ0NsYXNzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cignY2xhc3MnLCBpbWdDbGFzcyArICcgcmVwbGFjZWQtc3ZnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzdmcgPSAkc3ZnLnJlbW92ZUF0dHIoJ3htbG5zOmEnKTtcclxuICAgICAgICAkaW1nLnJlcGxhY2VXaXRoKCRzdmcpO1xyXG4gICAgICB9LCAneG1sJyk7XHJcbiAgICB9KTsvLyBFTkQgT0YgSU5MSU5FIFNWR1xyXG5cclxuICAgIC8vIG1haW5MYXlvdXQoKTtcclxuICAgIHJ1blNsaWRlcigpO1xyXG4gICAgZnVuYygpO1xyXG5cclxuICB9IGluaXQoKTsgLy8gRU5EIE9GIGluaXQoKVxyXG5cclxuICBmdW5jdGlvbiBtYWluTGF5b3V0KCkge1xyXG4gICAgdmFyICRoZWFkZXJIID0gJCgnaGVhZGVyJykub3V0ZXJIZWlnaHQoKSxcclxuICAgICAgJGZvb3RlckggPSAkKCdmb290ZXInKS5oZWlnaHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoeyAnbWluLWhlaWdodCc6ICdjYWxjKDEwMHZoIC0gJyArICRmb290ZXJIICsgJ3B4KScsICdwYWRkaW5nLXRvcCc6ICskaGVhZGVySCArICdweCcgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBydW5TbGlkZXIoKSB7XHJcbiAgICAkKCcuc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgIGNoaWxkID0gdC5jaGlsZHJlbigpLmxlbmd0aCxcclxuICAgICAgICAgIGl0ZW0gPSB0LmF0dHIoJ2RhdGEtaXRlbXMnKSA/IHQuYXR0cignZGF0YS1pdGVtcycpIDogMSxcclxuICAgICAgICAgIGxvb3BzID0gdC5hdHRyKCdkYXRhLWxvb3AnKSAmJiB0LmF0dHIoJ2RhdGEtbG9vcCcpID09IFwiZmFsc2VcIiA/IGZhbHNlIDogdHJ1ZTtcclxuXHJcbiAgICAgIGlmKCBjaGlsZCA+IDEgKSB7XHJcbiAgICAgICAgdC5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4+PC9zcGFuPlwiLCBcIjxzcGFuPjwvc3Bhbj5cIl0sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcclxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcclxuICAgICAgICAgICAgaXRlbXM6IGl0ZW0sXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogNjAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTUwMCxcclxuICAgICAgICAgICAgc21hcnRTcGVlZDogMTUwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgc2xpZGVyLmFkZENsYXNzKCduby1zbGlkZXInKTtcclxuICAgICAgICBzbGlkZXIudHJpZ2dlcignZGVzdHJveS5vd2wuY2Fyb3VzZWwnKS5yZW1vdmVDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgc2xpZGVyLnJlbW92ZUNsYXNzKCdvd2wtbG9hZGVkJyk7XHJcbiAgICAgICAgc2xpZGVyLmZpbmQoJy5vd2wtc3RhZ2Utb3V0ZXInKS5jaGlsZHJlbigpLnVud3JhcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2xpY2tNb2JpbGUoKSB7XHJcbiAgICAgICQoJy5zbGljay1tb2JpbGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdyA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIHZhciB0ID0gJCh0aGlzKTtcclxuICAgICAgICBpZih3IDwgNTAwKXtcclxuICAgICAgICAgIHQuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgdC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIG5hdlRleHQ6IFtdLFxyXG4gICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0YWdlUGFkZGluZzogMzAsXHJcbiAgICAgICAgICAgIGF1dG9XaWR0aDogdHJ1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1zbGlja01vYmlsZSgpO1xyXG4gIH0vLyBlbmQgb2YgcnVuU2xpZGVyKClcclxuXHJcbiAgZnVuY3Rpb24gZnVuYygpIHtcclxuXHJcbiAgICBpZigkKCcuam9pbi13ZWJpbmFyJykubGVuZ3RoID4gMCl7XHJcbiAgICAgICQoJy5mb290ZXInKS5hZGRDbGFzcygnbWludXMtdG9wJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU1RJQ0tZIEhFQURFUlxyXG4gICAgaWYgKCQoJy5oZWFkZXInKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhciBoZWFkZXIgPSAkKCcuaGVhZGVyJyksXHJcbiAgICAgICAgcG9zID0gMTA7XHJcbiAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbCA+PSBwb3MpIHtcclxuICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnc3RpY2t5Jyk7XHJcbiAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hlYWRlci1zdGljaycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xyXG4gICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdoZWFkZXItc3RpY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5tYXJxdWVlJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkdCA9ICQodGhpcyk7XHJcbiAgICAgICR0Lm1hcnF1ZWUoe1xyXG4gICAgICAgIHNwZWVkOiAxMDAsXHJcbiAgICAgICAgZ2FwOiAwLFxyXG4gICAgICAgIGRlbGF5QmVmb3JlU3RhcnQ6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiAnbGVmdCcsXHJcbiAgICAgICAgc3RhcnRWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGR1cGxpY2F0ZWQ6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgICQoJy5hY2NvcmRpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyICR0ID0gJCh0aGlzKSxcclxuICAgICAgICAkY2FyZCA9ICR0LmZpbmQoJy5jYXJkJyk7XHJcblxyXG4gICAgICAkY2FyZC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJGVsID0gJCh0aGlzKSxcclxuICAgICAgICAgICRoZWFkID0gJGVsLmZpbmQoJy5jYXJkLWhlYWRlcicpLFxyXG4gICAgICAgICAgJGJvZHkgPSAkZWwuZmluZCgnLmNhcmQtYm9keScpO1xyXG5cclxuICAgICAgICAkaGVhZC5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkY2FyZC5ub3QoJGVsKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgJGVsLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQm9vdHNyYXAgU2VsZWN0XHJcbiAgICAkKCcuc2VsZWN0JykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLnNlbGVjdHBpY2tlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmRyb3AtYm94JykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgdCAgICAgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgaW5wdXRzID0gdC5maW5kKCcjcGhvdG8nKSxcclxuICAgICAgICAgIHByZXZpZXcgPSB0LmZpbmQoJy5pbWFnZS1wcmV2aWV3JyksXHJcbiAgICAgICAgICBkZWwgICA9IHQuZmluZCgnLmRlbC1idG4nKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlYWRVUkwoaW5wdXQsIHByZXYpIHtcclxuICAgICAgICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBwcmV2aWV3LmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArIGUudGFyZ2V0LnJlc3VsdCArICcpJyk7XHJcbiAgICAgICAgICAgICAgcHJldmlldy5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICBkZWwuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoXCIjcGhvdG9cIikuY2hhbmdlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmVhZFVSTCh0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnamFsYW4nKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRlbC5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuZmFkZU91dCgpO1xyXG4gICAgICAgIHByZXZpZXcuZmFkZU91dCgpO1xyXG4gICAgICAgIHByZXZpZXcuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJycpO1xyXG4gICAgICAgIGlucHV0cy52YWwoJycpO1xyXG4gICAgICB9KVxyXG5cclxuICB9KTtcclxuXHJcbiAgfS8vIEVORCBvZiBmdW5jKClcclxuXHJcbn0pKCk7XHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9

//# sourceMappingURL=main.js.map

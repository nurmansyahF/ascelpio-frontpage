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
      var w = $(window).width();
      if( child > 1 ) {
        t.addClass('owl-carousel').removeClass('row');
          t.owlCarousel({
            navText: ["<span></span>", "<span></span>"],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: item,
            loop: false,
            autoWidth: true,
            nav: true,
            dots: false,
            autoplay: false,
            margin: 25,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500
        });
      }else {
        t.addClass('no-slider row');
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

    $('.icon-menu').click(function() {
      $('body').toggleClass('mobile-menu-open');
      // $('.has-sub').removeClass('sub-open');
    });

    $('.box-navmobile__close').click(function() {
      $('body').toggleClass('mobile-menu-open');
      // $('.has-sub').removeClass('sub-open');
  })

    $('.account-user:not(.mobile)').click(function(){
      $('body').toggleClass('usracnt-open');
    });

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

    // Calendar
    $('.box-calendar').each(function(){
      var t = $(this);
      t.calendar();
    });




  }// END of func()

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgLy8gSU5MSU5FIFNWR1xyXG4gICAgalF1ZXJ5KCdpbWcuc3ZnJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICB2YXIgJGltZyA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgdmFyIGltZ0lEID0gJGltZy5hdHRyKCdpZCcpO1xyXG4gICAgICB2YXIgaW1nQ2xhc3MgPSAkaW1nLmF0dHIoJ2NsYXNzJyk7XHJcbiAgICAgIHZhciBpbWdVUkwgPSAkaW1nLmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgalF1ZXJ5LmdldChpbWdVUkwsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyICRzdmcgPSBqUXVlcnkoZGF0YSkuZmluZCgnc3ZnJyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbWdJRCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICRzdmcgPSAkc3ZnLmF0dHIoJ2lkJywgaW1nSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGltZ0NsYXNzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cignY2xhc3MnLCBpbWdDbGFzcyArICcgcmVwbGFjZWQtc3ZnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzdmcgPSAkc3ZnLnJlbW92ZUF0dHIoJ3htbG5zOmEnKTtcclxuICAgICAgICAkaW1nLnJlcGxhY2VXaXRoKCRzdmcpO1xyXG4gICAgICB9LCAneG1sJyk7XHJcbiAgICB9KTsvLyBFTkQgT0YgSU5MSU5FIFNWR1xyXG5cclxuICAgIC8vIG1haW5MYXlvdXQoKTtcclxuICAgIHJ1blNsaWRlcigpO1xyXG4gICAgZnVuYygpO1xyXG5cclxuICB9IGluaXQoKTsgLy8gRU5EIE9GIGluaXQoKVxyXG5cclxuICBmdW5jdGlvbiBtYWluTGF5b3V0KCkge1xyXG4gICAgdmFyICRoZWFkZXJIID0gJCgnaGVhZGVyJykub3V0ZXJIZWlnaHQoKSxcclxuICAgICAgJGZvb3RlckggPSAkKCdmb290ZXInKS5oZWlnaHQoKTtcclxuICAgICQoJ21haW4nKS5jc3MoeyAnbWluLWhlaWdodCc6ICdjYWxjKDEwMHZoIC0gJyArICRmb290ZXJIICsgJ3B4KScsICdwYWRkaW5nLXRvcCc6ICskaGVhZGVySCArICdweCcgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBydW5TbGlkZXIoKSB7XHJcbiAgICAkKCcuc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgIGNoaWxkID0gdC5jaGlsZHJlbigpLmxlbmd0aCxcclxuICAgICAgICAgIGl0ZW0gPSB0LmF0dHIoJ2RhdGEtaXRlbXMnKSA/IHQuYXR0cignZGF0YS1pdGVtcycpIDogMSxcclxuICAgICAgICAgIGxvb3BzID0gdC5hdHRyKCdkYXRhLWxvb3AnKSAmJiB0LmF0dHIoJ2RhdGEtbG9vcCcpID09IFwiZmFsc2VcIiA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgdmFyIHcgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgaWYoIGNoaWxkID4gMSApIHtcclxuICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKS5yZW1vdmVDbGFzcygncm93Jyk7XHJcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4+PC9zcGFuPlwiLCBcIjxzcGFuPjwvc3Bhbj5cIl0sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcclxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcclxuICAgICAgICAgICAgaXRlbXM6IGl0ZW0sXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgbWFyZ2luOiAyNSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA2MDAwLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxNTAwLFxyXG4gICAgICAgICAgICBzbWFydFNwZWVkOiAxNTAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICB0LmFkZENsYXNzKCduby1zbGlkZXIgcm93Jyk7XHJcbiAgICAgICAgdC50cmlnZ2VyKCdkZXN0cm95Lm93bC5jYXJvdXNlbCcpLnJlbW92ZUNsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICB0LnJlbW92ZUNsYXNzKCdvd2wtbG9hZGVkJyk7XHJcbiAgICAgICAgdC5maW5kKCcub3dsLXN0YWdlLW91dGVyJykuY2hpbGRyZW4oKS51bndyYXAoKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNsaWNrTW9iaWxlKCkge1xyXG4gICAgICAkKCcuc2xpY2stbW9iaWxlJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHcgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICB2YXIgdCA9ICQodGhpcyk7XHJcbiAgICAgICAgaWYodyA8IDUwMCl7XHJcbiAgICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICAgIHQub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBuYXZUZXh0OiBbXSxcclxuICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGFnZVBhZGRpbmc6IDMwLFxyXG4gICAgICAgICAgICBhdXRvV2lkdGg6IHRydWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9c2xpY2tNb2JpbGUoKTtcclxuICB9Ly8gZW5kIG9mIHJ1blNsaWRlcigpXHJcblxyXG4gIGZ1bmN0aW9uIGZ1bmMoKSB7XHJcblxyXG4gICAgJCgnLmljb24tbWVudScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21vYmlsZS1tZW51LW9wZW4nKTtcclxuICAgICAgLy8gJCgnLmhhcy1zdWInKS5yZW1vdmVDbGFzcygnc3ViLW9wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5ib3gtbmF2bW9iaWxlX19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21vYmlsZS1tZW51LW9wZW4nKTtcclxuICAgICAgLy8gJCgnLmhhcy1zdWInKS5yZW1vdmVDbGFzcygnc3ViLW9wZW4nKTtcclxuICB9KVxyXG5cclxuICAgICQoJy5hY2NvdW50LXVzZXI6bm90KC5tb2JpbGUpJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCd1c3JhY250LW9wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKCQoJy5qb2luLXdlYmluYXInKS5sZW5ndGggPiAwKXtcclxuICAgICAgJCgnLmZvb3RlcicpLmFkZENsYXNzKCdtaW51cy10b3AnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTVElDS1kgSEVBREVSXHJcbiAgICBpZiAoJCgnLmhlYWRlcicpLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFyIGhlYWRlciA9ICQoJy5oZWFkZXInKSxcclxuICAgICAgICBwb3MgPSAxMDtcclxuICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICBpZiAoc2Nyb2xsID49IHBvcykge1xyXG4gICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdzdGlja3knKTtcclxuICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGVhZGVyLXN0aWNrJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XHJcbiAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hlYWRlci1zdGljaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLm1hcnF1ZWUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyICR0ID0gJCh0aGlzKTtcclxuICAgICAgJHQubWFycXVlZSh7XHJcbiAgICAgICAgc3BlZWQ6IDEwMCxcclxuICAgICAgICBnYXA6IDAsXHJcbiAgICAgICAgZGVsYXlCZWZvcmVTdGFydDogMCxcclxuICAgICAgICBkaXJlY3Rpb246ICdsZWZ0JyxcclxuICAgICAgICBzdGFydFZpc2libGU6IHRydWUsXHJcbiAgICAgICAgZHVwbGljYXRlZDogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWVcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgJCgnLmFjY29yZGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICRjYXJkID0gJHQuZmluZCgnLmNhcmQnKTtcclxuXHJcbiAgICAgICRjYXJkLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciAkZWwgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgJGhlYWQgPSAkZWwuZmluZCgnLmNhcmQtaGVhZGVyJyksXHJcbiAgICAgICAgICAkYm9keSA9ICRlbC5maW5kKCcuY2FyZC1ib2R5Jyk7XHJcblxyXG4gICAgICAgICRoZWFkLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICRjYXJkLm5vdCgkZWwpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAkZWwudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBCb290c3JhcCBTZWxlY3RcclxuICAgICQoJy5zZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykuc2VsZWN0cGlja2VyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuZHJvcC1ib3gnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciB0ICAgICA9ICQodGhpcyksXHJcbiAgICAgICAgICBpbnB1dHMgPSB0LmZpbmQoJyNwaG90bycpLFxyXG4gICAgICAgICAgcHJldmlldyA9IHQuZmluZCgnLmltYWdlLXByZXZpZXcnKSxcclxuICAgICAgICAgIGRlbCAgID0gdC5maW5kKCcuZGVsLWJ0bicpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gcmVhZFVSTChpbnB1dCwgcHJldikge1xyXG4gICAgICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIHByZXZpZXcuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgnICsgZS50YXJnZXQucmVzdWx0ICsgJyknKTtcclxuICAgICAgICAgICAgICBwcmV2aWV3LmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgIGRlbC5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJChcIiNwaG90b1wiKS5jaGFuZ2UoZnVuY3Rpb24oKXtcclxuICAgICAgICByZWFkVVJMKHRoaXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdqYWxhbicpXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGVsLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgcHJldmlldy5mYWRlT3V0KCk7XHJcbiAgICAgICAgcHJldmlldy5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAnJyk7XHJcbiAgICAgICAgaW5wdXRzLnZhbCgnJyk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ29weSB0byBjbGlwYm9hcmRcclxuICAgICQoJy5jYW4tY29weScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgZmMgPSB0LmZpbmQoJy5mb3JtLWNvbnRyb2wnKSxcclxuICAgICAgICAgIGNwID0gdC5maW5kKCcuY29weScpO1xyXG4gICAgICAkKGNwKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoZmMpLnNlbGVjdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIENhbGVuZGFyXHJcbiAgICAkKCcuYm94LWNhbGVuZGFyJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgdCA9ICQodGhpcyk7XHJcbiAgICAgIHQuY2FsZW5kYXIoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICB9Ly8gRU5EIG9mIGZ1bmMoKVxyXG5cclxufSkoKTtcclxuIl0sImZpbGUiOiJtYWluLmpzIn0=

//# sourceMappingURL=main.js.map

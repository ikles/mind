jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('.burger').click(function (e) {    
    $('.header .header__r').addClass('show');
    $('body').addClass('ohi');
  });

  $('.close').click(function (e) {
    e.preventDefault();
    $('.header .header__r').removeClass('show');
    $('body').removeClass('ohi');
  });


  $(".has-tooltip, .top-mnu").click(function (e) {
    e.stopPropagation();
  });

  $('.has-tooltip').each(function () {
    const tooltip = $(this).find('sup span');  
    $(this).click(function () {
      $('.has-tooltip sup span').removeClass('show');
      tooltip.addClass('show')

      setTimeout(function () {
        tooltip.removeClass('show');        
      }, 2000);
    })
  });

  $('body').click(function () {
    $('.has-tooltip sup span').removeClass('show');
  });





  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [

    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3        
      }
    },    
    {
      breakpoint: 361,
      settings: {
        slidesToShow: 2
      }
    }
    ]
  });


  $('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    infobar: true,
    smallBtn: false,
    toolbar: true,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });






  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });

  }

  popup('.link2', '.modal-overlay_2', '.modal-close_2');
  popup('.link', '.modal-overlay_1', '.modal-close_1');


  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
     $('.serv-arr-up').hide();
   }
 });

  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    });
  }

  $('.rating__star').click(function () {
    let starValue = $(this).attr('data-star-value');
    $(this).parent().attr('data-result-value', starValue);
  });

  $('.accordion-content').first().slideDown().toggleClass('open-content');
  $('.accordion-header').click(function () {
    $(this).toggleClass('active-header');
    $(this).next().slideToggle().toggleClass('open-content');
  });

}); //ready
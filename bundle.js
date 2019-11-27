function slider(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 20000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
      
    ]
  });
}
function append(){
  var txt1 = "<div>Markup</div>";
  $('.kss-section__markup').prepend(txt1);
  $('.kss-section__markup').find('div').addClass('markup');
}

function toggle(){
  $('.markup').click(function(){
    $('.language-markup').toggle('slide');
  })  
}

function burgermenu(){
  $('.navbar-menu li:last-child').click(function(){
    //console.log('nsakjdfn');
    $('.icon').toggleClass('rotate');
    $('.navbar-menu').toggleClass('active-menu');
    $('body').toggleClass('overflow-hide');
  })
}
slider();
 burgermenu();
 append();
 toggle();

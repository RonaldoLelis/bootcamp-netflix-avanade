// Demo's JS here
window.addEventListener("load", function () {
    var owlOptions = {
      loop: false,
      margin: 10,
      nav: true,
      navText: ['', ''],
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    };
  
    $('.owl-carousel').owlCarousel(owlOptions);
  
    // Bind click: use owlOnClick to ignore drag's click trigger    
    owlOnClick($('.owl-carousel'), '.item', function (e) {
      var $currentItem = $(e.target).closest('.item');
      alert($currentItem[0].classList);
    });
  }, false);

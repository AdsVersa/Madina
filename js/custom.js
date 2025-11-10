jQuery(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop()) {
      jQuery("#back-top").fadeIn();
    } else {
      jQuery("#back-top").fadeOut();
    }
  });

  
});




jQuery(window).scroll(function () {
  var sticky = jQuery("#myHeader"),
    scroll = jQuery(window).scrollTop();
  if (scroll >= 5) {
    sticky.addClass("sticky");
  } else {
    sticky.removeClass("sticky");
  }
});

jQuery(document).ready(function () {
  if (jQuery(window).width() > 1199) {
    jQuery("li.mega-menu ul.sub-menu").wrap(
      "<div class='hover_mega_menu'></div>"
    );
    jQuery("li.mega-menu2 ul.sub-menu").wrap(
      "<div class='hover_mega_menu'></div>"
    );
  }


  jQuery(document).ready(function () {
    jQuery("button.navbar-toggle").on("click", function () {
      jQuery("body").toggleClass("open-menu");
    });
  });
  
});

jQuery(window).scroll(function () {
  if (jQuery(".count-digit").hasClass("counter-loaded")) return;

  var offset = jQuery(".count-digit").offset().top - window.innerHeight;
  if (jQuery(window).scrollTop() > offset) {
    jQuery(".count-digit").addClass("counter-loaded");

    jQuery(".count-digit").each(function () {
      var $this = jQuery(this);
      var finalValue = parseFloat($this.text());

      jQuery({ Counter: 0 }).animate(
        { Counter: finalValue },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            if (finalValue % 1 === 0) {
              // Integer
              $this.text(Math.ceil(now));
            } else {
              // Decimal
              $this.text(now.toFixed(1));
            }
          }
        }
      );
    });
  }
});



jQuery(".eid-collection-slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    nav: true,
    dots: false,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
        center: false,
        autoHeight: true,
      },
      575: {
        center: false,
        items: 1,
        margin: 0,
      },
      700: {
        nav: true,
        dots: false,
        center: false,
        items: 2,
        margin: 20,
      },
      991: {
        nav: true,
        dots: false,
        center: false,
        items: 3,
        margin: 20,
      },
      1300: {
        nav: true,
        dots: false,
        center: false,
        items: 3,
        margin: 30,
      },
    },
  });
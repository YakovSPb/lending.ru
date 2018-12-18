$(document)
  .ready(function () {
    var appCarousel = new Carousel('curve-icon-wrapper', 'feature-desc');
    var foodCarousel = new Carousel('carousel-el', 'carousel-el-desc');

    var toggleMenu = $('.nav-menu');

    appCarousel.start();
    foodCarousel.start(8000);

    $('.site-nav__menu-trigger').click(function () {
      toggleMenu.slideToggle(200);
    });

    function adaptiveToScreenWidth() {
      var screenWidth = $(window).width();
      var featureDescs = $('.feature-desc');

      screenWidth < 768
        ? appCarousel.start(8000)
        : toggleMenu.removeAttr('style');
    }

    $(window)
      .resize(function () {
        adaptiveToScreenWidth();
      });

    adaptiveToScreenWidth();
  });


    $(function(){
        $("button").click(function() {
            $("#navbarSupportedContent").attr('style', 'background-color:rgba(0, 0, 0, 0.3);margin:0 -50px');
            $(".top_menu a").attr('style', 'text-align:center');
            $(".top_menu li:last-child").attr('style', 'text-align:center;');
        });

        $(".carousel__apple").hover(
            function() {
                $(this).addClass('active-car');
                $(".carousel__sandwich").attr('style', 'top:160px;');
                $(".carousel__salad").attr('style', 'top:290px;');
            },
            function(){
                $(this).removeClass('active-car');
                $(".carousel__sandwich").attr('style', 'top:130px;');
                $(".carousel__salad").attr('style', 'top:260px;');
            });



        $(".carousel__sandwich").hover(
            function() {
                $(this).addClass('active-car');
                $(".carousel__salad").attr('style', 'top:290px;');
            },
            function(){
                $(this).removeClass('active-car');
                $(".carousel__salad").attr('style', 'top:260px;');
            });

        $(".carousel__salad").hover(
            function() {
                $(this).addClass('active-car');
            },
            function(){
                $(this).removeClass('active-car');

            });




        $(".carousel__apple").click(function(){
            $(".m-apple").attr('style', "display:block;");
            $(".m-sandwich").attr('style', "display:none;");
            $(".m-salad").attr('style', "display:none;");

        });

        $(".carousel__sandwich").click(function(){
            $(".m-apple").attr('style', "display:none;");
            $(".m-sandwich").attr('style', "display:block");
            $(".m-salad").attr('style', "display:none");

        });

        $(".carousel__salad").click(function(){
            $(".m-apple").attr('style', "display:none;");
            $(".m-sandwich").attr('style', "display:none");
            $(".m-salad").attr('style', "display:block");
        });
    });

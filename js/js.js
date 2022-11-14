$(document).ready(function () {
  let width = $(window).width();
  if(width<1000){
    $(".slider").slick({
      rows: 2,
      slidesToShow: 2,
      appendArrows: $(".arrow"),
    });
    $(".slider__item")
    .on("mouseenter", function(){
      $( this ).children( ".slider__border" ).css({
          "width": "160px",
          "margin-left": "0px",
          "border-bottom": "30px"
        });
    })
    .on("mouseleave", function() {
      $( this ).children( ".slider__border" ).css({
          "width": "40px",
          "margin-left": "176px",
          "border-bottom": "0px"
        });
    })
  }else{
    $(".slider").slick({
      rows: 2,
      slidesToShow: 4,
      appendArrows: $(".arrow"),
    });
    $(".slider__item")
    .on("mouseenter", function(){
      $( this ).children( ".slider__border" ).css({
          "width": "288px",
          "margin-left": "0px",
          "border-bottom": "30px"
        });
    })
    .on("mouseleave", function() {
      $( this ).children( ".slider__border" ).css({
          "width": "40px",
          "margin-left": "176px",
          "border-bottom": "0px"
        });
    })
  }


  $(".document").on(function () {
    console.log("dsf");
      $(".this").slick({
        rows: 1,
        slidesToShow: 2,
        appendArrows: $(".arrow"),
      });
      console.log(width);
  })
  
});

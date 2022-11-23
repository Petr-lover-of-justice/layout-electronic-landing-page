$(document).ready(function () {
    $(".slider").slick({
      rows: 2,
      slidesToShow: 4,
      appendArrows: $(".arrow"),
      responsive: [
        {
          breakpoint:1000,
          settings:{
            slidesToShow: 2,
          }
        }
      ]
    });
});

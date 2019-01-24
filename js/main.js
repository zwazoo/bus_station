//Calendar
(function () {
  "use strict";

})();
// $("#datepicker").click(function () {
//   $("#datepicker").datepicker();
// });
$("#datepicker").click(function () {
  $("#datepicker").datepicker();
  $("#datepicker").on("change", function () {
    sessionStorage.setItem("date", $(this).val());
  });
});

$(function () {
  $("#datepicker").datepicker($.datepicker.regional["uk"]);
  $("#locale").on("change", function () {
    $("#datepicker").datepicker("option", $.datepicker.regional[$(this).val()]);
  });
});

//Additional information of ticket
$(document).ready(function () {
  $('[data-action="addMore"]').click(function () {
    if ($('[data-action="addMore"]').hasClass("open")) {
      $(this).removeClass("open");
      $(".ba-ticket__additional").css("display", "none");
      $("#hide-details").css("display", "none");
      $(".ba-breadcrumbs__optional").css("display", "none");
      $("#without-details").css("color", "#00D2D2");
    } else {
      $(this).addClass("open");
      $(".ba-ticket__additional").css("display", "block");
      $(".ba-breadcrumbs__optional").css("display", "flex");
      $("#without-details").css("color", "#193341");
    }
  });

  $("#schedule").click(function () {
    $('[data-action="addMore"]').removeClass("open");
    $(".ba-ticket__additional").css("display", "none");
    $(".ba-breadcrumbs__optional").css("display", "none");
    $("#without-details").css("color", "#00D2D2");
  });
});

//Animation on error page
$(document).ready(function () {
  $(".ba-error-img__animation").css("transform", "rotate(0deg)");
});

//Mobile menu
$(document).ready(function () {
  $("#burger").click(function () {
    if ($("#burger").hasClass("open")) {
      $(this).removeClass("open");
      $(".ba-mobile-navigation-open").css("display", "none");
      $(".ba-header").css("height", "60px");
    } else {
      $(this).addClass("open");
      $(".ba-mobile-navigation-open").css("display", "flex");
      $(".ba-header").css("height", "110px");
    }
  });
});
////AUTOCOMPLETE////
var placeSearch, autocompleteTo, autocompleteFrom;

var inputFrom = document.getElementById("from-field");
var inputTo = document.getElementById("to-field");
var options = {
  types: ["(cities)"],
  componentRestrictions: {
    country: "ua"
  }
};
autocompleteFrom = new google.maps.places.Autocomplete(inputFrom, options);
autocompleteTo = new google.maps.places.Autocomplete(inputTo, options);

$(".seat-selection").on("change", function () {
  sessionStorage.setItem("seatQty", $(this).val());
});

autocompleteFrom.addListener("place_changed", changeToShortAddressAjax);
autocompleteTo.addListener("place_changed", changeToShortAddressAjax);

var cityFromShortName;
var cityToShortName;

function changeToShortAddressAjax() {
  var cityFrom = autocompleteFrom.getPlace();
  if (cityFrom) {
    var placeFromArray = cityFrom.address_components;
    cityFromShortName = placeFromArray[0].short_name;
    $.ajax({
      success: function () {
        $("#from-field").val(cityFromShortName);
        sessionStorage.setItem("cityFrom", cityFromShortName);
      }
    });
  }

  var cityTo = autocompleteTo.getPlace();
  if (cityTo) {
    var placeToArray = cityTo.address_components;
    cityToShortName = placeToArray[0].short_name;

    $.ajax({
      success: function () {
        $("#to-field").val(cityToShortName);
        sessionStorage.setItem("cityTo", cityToShortName);
      }
    });
  }
}
///Ticket placeSearch

var currentUrlEnding = window.location.href.split("/").reverse()[0];
$(document).ready(function () {
  var date, seatQty;
  if (currentUrlEnding == "tickets.html") {
    tempCityFrom = sessionStorage.getItem("cityFrom");
    tempCityTo = sessionStorage.getItem("cityTo");
    date = sessionStorage.getItem("date");
    seatQty = sessionStorage.getItem("seatQty");
    $.ajax({
      success: function () {
        $("#from-field").val(tempCityFrom);
        $("#to-field").val(tempCityTo);
        $("#datepicker").val(date);
        $(".seat-selection").val(seatQty);
      }
    });
    $("#search-tickets").click(function (e) {
      e.preventDefault();
      $.ajax({
        url: "../data/cities.json",
        dataType: "json",
        success: function (response) {
          let tickets = response;
          tickets.forEach(ticket => {});
        }
      });
    });
  }
});

// index-slider

(function ($) {
  "use strict";

  const bestSlider = $(".ba-index-slider");

  bestSlider.slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    adaptiveHeight: true,
    fade: false,
    // slide: '.ba-index-slider__img',
    prevArrow: ".ba-index-slider-prev",
    nextArrow: ".ba-index-slider-next",
    dots: true,
    responsive: [{
      breakpoint: 1023,
      settings: {
        rows: 2,
        slidesPerRow: 2,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

})(jQuery)
//Calendar
;
(function () {
	"use strict";


})();
$("#datepicker").click(function () {
	$("#datepicker").datepicker();
});
$(function () {
	$("#datepicker").datepicker($.datepicker.regional["uk"]);
	$("#locale").on("change", function () {
		$("#datepicker").datepicker("option",
			$.datepicker.regional[$(this).val()]);
	});
});


//Additional information of ticket
$(document).ready(function () {
	$('#addInf').click(function () {
		
	  $(this).toggleClass('open');

	  if ($("#addInf").hasClass('open')) {
		  $(".ba-ticket__additional").css('display', 'none');
		  $("#hide-details").css('display', 'none');
		  $(".ba-breadcrumbs__optional").css('display', 'none');
		  $("#without-details").css('color', '#00D2D2');
		} else {
			$(".ba-ticket__additional").css('display', 'block');
			$(".ba-breadcrumbs__optional").css('display', 'flex');
			$("#without-details").css('color', '#193341');
	  }
	});

	$('#addInfMore').click(function () {

		if ($("#addInfMore").hasClass('open')) {
			$(this).removeClass('open');
			$(".ba-ticket__additional").css('display', 'none');
			$(".ba-breadcrumbs__optional").css('display', 'none');
			$("#without-details").css('color', '#00D2D2');
		} else {
			$(this).addClass('open');
			$(".ba-ticket__additional").css('display', 'block');
			$(".ba-breadcrumbs__optional").css('display', 'flex');
			$("#without-details").css('color', '#193341');
		  }
	  });
  });
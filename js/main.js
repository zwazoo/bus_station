//Calendar
(function () {
	"use strict";

})();
$("#datepicker").click(function () {
	$("#datepicker").datepicker();
});
$(function () {
	$("#datepicker").datepicker($.datepicker.regional["uk"]);
	$("#locale").on("change", function () {
		$("#datepicker").datepicker("option", $.datepicker.regional[$(this).val()]);
	});
});

//Additional information of ticket
$(document).ready(function () {

	$('#addInf, #addInfMore').click(function () {

		if ($("#addInf, #addInfMore").hasClass('open')) {
			$(this).removeClass('open');
			$(".ba-ticket__additional").css('display', 'none');
			$("#hide-details").css('display', 'none');
			$(".ba-breadcrumbs__optional").css('display', 'none');
			$("#without-details").css('color', '#00D2D2');

		} else {
			$(this).addClass("open");
			$(".ba-ticket__additional").css("display", "block");
			$(".ba-breadcrumbs__optional").css("display", "flex");
			$("#without-details").css("color", "#193341");
		}
	});

	$("#addInfMore").click(function () {
		if ($("#addInfMore").hasClass("open")) {
			$(this).removeClass("open");
			$(".ba-ticket__additional").css("display", "none");
			$(".ba-breadcrumbs__optional").css("display", "none");
			$("#without-details").css("color", "#00D2D2");
		} else {
			$(this).addClass("open");
			$(".ba-ticket__additional").css("display", "block");
			$(".ba-breadcrumbs__optional").css("display", "flex");
			$("#without-details").css("color", "#193341");
		}
	});
	$('#schedule').click(function () {
		$("#addInf, #addInfMore").removeClass('open');
		$(".ba-ticket__additional").css('display', 'none');
		$(".ba-breadcrumbs__optional").css('display', 'none');
		$("#without-details").css('color', '#00D2D2');
	});

});

//Animation on error page
$(document).ready(function () {
	$(".ba-error-img__animation").css("transform", "rotate(0deg)");
});


//Mobile menu
$(document).ready(function () {
	$('#burger').click(function () {
		if ($("#burger").hasClass('open')) {
			$(this).removeClass('open');
			$(".ba-mobile-navigation-open").css('display', 'none');
			$(".ba-header").css('height', '60px');

		} else {
			$(this).addClass('open');
			$(".ba-mobile-navigation-open").css('display', 'flex');
			$(".ba-header").css('height', '110px');
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
console.log(autocompleteFrom);


autocompleteFrom.addListener("place_changed", changeToShortAddressAjax);
autocompleteTo.addListener("place_changed", changeToShortAddressAjax);

function changeToShortAddressAjax() {
	console.log('we were here')
	var cityFrom = autocompleteFrom.getPlace();
	var placeFromArray = cityFrom.address_components;
	let cityFromShortName = placeFromArray[0].short_name;

	$.ajax({
		success: function () {
			$("#from-field").val(cityFromShortName);
		}
	});

	var cityTo = autocompleteTo.getPlace();
	if (cityTo) {
		var placeToArray = cityTo.address_components;
		let cityToShortName = placeToArray[0].short_name;

		$.ajax({
			success: function () {
				$("#to-field").val(cityToShortName);
			}
		});
	}


}
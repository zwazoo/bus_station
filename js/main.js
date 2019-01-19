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
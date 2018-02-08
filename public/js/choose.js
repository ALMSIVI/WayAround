'use strict';


$(".options").hide();

$("#aestheticRadio").click(function() {
	$(".options").hide();
	$("#aestheticOptions").show();
});

$("#congestionRadio").click(function() {
	$(".options").hide();
	$("#congestionOptions").show();
});

$("#terrainRadio").click(function() {
	$(".options").hide();
	$("#terrainOptions").show();
});

$("#safetyRadio").click(function() {
	$(".options").hide();
	$("#safetyOptions").show();
});
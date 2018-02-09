'use strict';

$(".options").hide();

$("#aestheticRadio").click(function() {
	$(".options").hide();
	clearForm(".options");
	$("#aestheticOptions").show();
});

$("#congestionRadio").click(function() {
	$(".options").hide();
	clearForm(".options");
	$("#congestionOptions").show();
});

$("#terrainRadio").click(function() {
	$(".options").hide();
	clearForm(".options");
	$("#terrainOptions").show();
});

$("#safetyRadio").click(function() {
	$(".options").hide();
	clearForm(".options");
	$("#safetyOptions").show();
});

// Referred to https://www.electrictoolbox.com/jquery-clear-form/
function clearForm(e) {
    $(e).find(':input').each(function() {
        switch(this.type) {
            case 'select':
                $(this).val('');
                break;
            case 'checkbox':
            case 'radio':
                this.checked = false;
                break;
        }
    });
}
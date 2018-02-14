'use strict';

$(".options").hide();

$("input[type='checkbox']").click(function() {
	let id = this.id;
	let opt = id.split('R')[0];
	clearForm('.options');
	$('#' + opt + "Options").toggle(200);
});

// Referred to https://www.electrictoolbox.com/jquery-clear-form/
function clearForm(e) {
    $(e).find(':input').each(function() {
        switch(this.type) {
            case 'select':
                $(this).val('');
                break;
        }
    });
}

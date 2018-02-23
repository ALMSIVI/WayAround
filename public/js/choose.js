'use strict';

$(".options").hide();

$(".bg-primary").click(function() {
	let id = this.id;
	let opt = id.split('R')[0];
	$('#' + opt + "Options").toggle(200);
    $(".bg-primary").click(function() {
    let id = this.id;
    let opt = id.split('R')[0];
    $('#' + opt + "Options").toggle(200);
    //if (('#' + opt + "Options").select) {
        $(this).addClass('active');
    //}
    });
});

$("#resetbutton").click(function() {
    clearForm('.options');
});

$('#showbutton').click(function() {
    localStorage.setItem('start', $("input[name='start']").val());
    localStorage.setItem('dest', $("input[name='dest']").val());
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
        }
    });
}
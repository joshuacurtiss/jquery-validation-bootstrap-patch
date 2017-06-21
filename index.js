/*
 *  Patch the jQuery Validation Plugin to be friendly with Bootstrap's form feedback
 *  By Josh Curtiss, v1.1 (6/21/2017)
 *
 *  You have a couple options how to utilize this patch:
 *
 *  1. Take the options object and call $.validator.setDefaults(jQueryValidationBootstrapOptions) yourself in $(document).ready() or whatever.
 *  2. For your own convenience, you can call jQueryValidationBootstrapPatch() in your $(document).ready() or whatever you choose.
 *  3. You could pick and choose the options out of this object and call them in your own $().validate() call if you want.
 *
 *  FOR THE IMPATIENT, DO THIS:  In your page load initialization script, call jQueryValidationBootstrapPatch() and you're done. 
 *
 */
 
var jQueryValidationBootstrapOptions={
	highlight: function(element) {
		$(element)
			.closest('.has-feedback')
				.removeClass('has-success')
				.addClass('has-error')
			.find('.form-control-feedback')
				.removeClass('glyphicon-ok')
				.addClass('glyphicon-remove');
	},
	unhighlight: function(element) {
		$(element)
			.closest('.has-feedback')
				.removeClass('has-error')
				.addClass('has-success')
			.find('.form-control-feedback')
				.removeClass('glyphicon-remove')
				.addClass('glyphicon-ok');
	},
	errorElement: 'span',
	errorClass: 'help-block',
	errorPlacement: function(error, element) {
		if(element.parent('.input-group').length) {
			error.insertAfter(element.parent());
		} else if(element.closest('.has-feedback').length) {
			error.appendTo(element.closest('.has-feedback'));
		} else {
			error.insertAfter(element);
		}
	}
};
 
function jQueryValidationBootstrapPatch(){$.validator.setDefaults(jQueryValidationBootstrapOptions)}

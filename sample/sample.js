$(document).ready(function(){
    // Apply the patch:
    jQueryValidationBootstrapPatch();
    // Do some validation:
    $("#testform")
        .validate({
            debug: true,
            rules: {
                name: {required:true, minlength:3},
                email: {required:true, email:true},
                gender: {required:true}
            },
            invalidHandler: function(event,validator) {
                $("#status").html("There are "+validator.numberOfInvalids()+" errors.");
            },
            submitHandler: function(form) {
                $("#status").html("Passed validation!");
            }
        });
});
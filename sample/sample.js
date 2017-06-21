$(document).ready(function(){
    // Apply the patch:
    jQueryValidationBootstrapPatch();
    // Do some validation:
    $("#testform")
        .validate({
            rules: {
                name: {required:true, minlength:3},
                email: {required:true, email:true}
            },
            invalidHandler: function(event,validator) {
                $("#status").html("There are "+validator.numberOfInvalids()+" errors.");
                return false;
            },
            submitHandler: function(form) {
                $("#status").html("Passed validation!");
                return false;
            }
        });
});
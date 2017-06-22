# jQuery Validation Plugin Bootstrap Patch # 

By Joshua Curtiss

This script is a simple patch that can be executed to apply some defaults to
the [jQuery Validation Plugin](https://jqueryvalidation.org) to make it work
well with [Bootstrap](http://getbootstrap.com)'s form HTML conventions and its
validation states. 

See a demo of the patch in action here:  
<http://www.curtiss.me/jquery-validation-bootstrap-patch>

## Usage ##

In its simplest form, just load the script and include this function call in 
your page initialization script, such as in `$(document).ready()`: 

```
jQueryValidationBootstrapPatch();
```

*What's going on here?* 

The script is creating an object called `jQueryValidationBootstrapOptions` that
defines the defaults that should be set. Namely, the `highlight`, 
`unhighlight`, `errorElement`, `errorClass`, and `errorPlacement` properties.

If you so choose, you could just use or manipulate the object as desired, but
to make things simple, you can execute `jQueryValidationBootstrapPatch()` which
will make the call to `setDefaults()` for the validation plugin with the values
in the `jQueryValidationBootstrapOptions` object. 

That's all that is going on. Use it as you will. Enjoy. 

## Additional Notes ##

Error placement handles three situations, and otherwise falls back to the 
default of just adding an error after the element: 

  1. If the element is in an `input-group`, add the error after the 
     `input-group` container.
  2. If there is a `has-feedback` container with a `errorcontainer` container
     inside of it, add the error within that container.
  3. If there is no `errorcontainer`, just add the error within the 
     `has-feedback` container.

As mentioned earlier, if none of these conditions exist, the default will be to
just insert the error immediately after the element.

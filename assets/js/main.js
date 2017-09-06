var estado=true;  
setTimeout("ver()",900);  
function ver (){  
    estado=!estado;  if(estado==true)  texto1.style.visibility="visible";
      else  texto1.style.visibility="hidden";  
      setTimeout("ver()",900);  
}

ver();

/*Seccion formulario*/
 $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            consulta: {
                validators: {
                    notEmpty: {
                        message: 'Por favor selecciona su consulta'
                    }
                }
            },
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Por favor escriba su nombre'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor escriba su apellido'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor escriba su email'
                    },
                    emailAddress: {
                        message: 'Por favor escriba un email válido'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Por favor escriba su celular'
                    },

                }
            },


        comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

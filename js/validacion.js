$(document).ready(function() { 
    
    $('form input[name="dateData"]').datepicker({ //Calendario
        dateFormat: 'dd MM yy'
    });
    
    $("#formulario").validate({ //https://jqueryvalidation.org/documentation/
      rules: {
        nameData : {
          required: true,
          minlength: 3

          
        },
        lastNameData : {
            required: true,
            minlength: 3
          },
        ageData: {
          required: true,
          number: true,
          min: 18
        },
        dateData: {
            required: true,
            date: true
            
        },
        email: {
          required: true,
          email: true
        }
      }
    });

    $('#enviar_a').submit(function () {
      var savedd = $('#nameData').val();
      localStorage.setItem('name_data', savedd);
    });
  });
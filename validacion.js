$(document).ready(function() { //https://jqueryvalidation.org/documentation/
    
    $('form input[name="dateData"]').datepicker({ //Calendario
        dateFormat: 'dd MM yy'
    });
    
    $("#formulario").validate({
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
  });
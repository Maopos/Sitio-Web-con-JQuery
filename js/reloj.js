$(document).ready(function () {
    
    //Reloj

        setInterval(function () {  
            var reloj = moment().format('dddd MMMM YYYY.' + '<br>hh:mm:ss.');
            $('#reloj').html('<br>Hoy es ' + reloj);
        
        }, 1000);

    
});
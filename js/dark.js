$(document).ready(function () {
    
    
    // Selector de Dark Theme
    
    
    var tema = $('#dark');
    
    $('#temaL').click(function () {
        
        tema.removeAttr('href')     
        
    })   
    
    $('#temaD').click(function () {
        
        tema.attr('href', 'dark.css')     
        
    })  
});
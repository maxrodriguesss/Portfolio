$(document).ready(function(){
    $('#mobile-btn').on('click', function(){
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('I').toggleClass('fa-minimize');
    });
})
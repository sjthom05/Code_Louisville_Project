
(function() {
$('#navbar a').click(function(){
    $('#navbar li').removeClass('active');
    $(this).parent().addClass('active');
    console.log('test test');
});
})();

console.log('test')
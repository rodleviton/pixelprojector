$(function() {

    var divs = [];
    var num = 80;

    // Generate some random divs
    for (var i = 0; i <= num; i++) {
        divs.push('#div-0' + (i + 1));
        
        var el = $('<div id="div-0' + (i + 1) + '" class="block"></div>');

        $('#container').append(el);
        position(el);
    }
    
    

        
    function position(el) {
            var element = $(el);
            var top = Math.round(Math.random() * 960);
            var left = Math.round(Math.random() * 1441);
            
            // Check that element will not be positioned off screen
            if((top + element.height()) >= 960) {
                top -= (element.height() * 2);
            }
            if((left + element.width()) >= 1441) {
                left -= (element.width() * 2);
            }
            
            element.css({'top': top, 'left': left, 'position': 'absolute'});

        }
        

});
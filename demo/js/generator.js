$(function() {

    var divs = [];
    var num = 40;

    // Generate some random divs
    for (var i = 0; i <= num; i++) {
        divs.push('#div-0' + (i + 1));

        var el = $('<div id="div-0' + (i + 1) + '" class="block shadow-' + (Math.round(Math.random() * 4) + 1) + '"></div>');

        $('#container').append(el);
        position(el);
    }




    function position(el) {
        var element = $(el);
        var top = Math.round(Math.random() * 640);
        var left = Math.round(Math.random() * 960);

        // Check that element will not be positioned off screen
        if((top + element.height()) >= 640) {
            top -= (element.height() * 2);
        }
        if((left + element.width()) >= 960) {
            left -= (element.width() * 2);
        }

        element.css({'top': top, 'left': left, 'position': 'absolute'});

    }

});
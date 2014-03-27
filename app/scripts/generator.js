var Generator = window.Generator || {};

Generator = (function() {
    'use strict';

    var num = 10,
        $container = $('#pp-container');

    // Position elements randomly on screen
    function position(el) {
        var $element = $(el),
            top = Math.round(Math.random() * 640),
            left = Math.round(Math.random() * 960);

        // Check that element will not be positioned off screen
        if((top + $element.height()) >= 640) {
            top -= ($element.height() * 2);
        }
        if((left + $element.width()) >= 960) {
            left -= ($element.width() * 2);
        }
        $element.css({'top': top, 'left': left, 'position': 'absolute'});
    }

    // Generate some random divs
    function generateElements() {
        for (var i = 0; i <= num; i++) {
            var el = $('<div id="div-0' + (i + 1) + '" class="block shadow-' + (Math.round(Math.random() * 4) + 1) + '"></div>');
            $container.append(el);
        }
        positionElements();
    }

    function positionElements() {
        $('.block').each(function(index, item) {
            position(item);
        });
    }

    function init() {
        generateElements();
    }

    return {
        init: init,
        positionElements: positionElements
    };
})();

$(function() {
    'use strict';

    Generator.init();
});
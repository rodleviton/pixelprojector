$(function() {
    'use strict';
    /*jshint unused: false */
    /*jshint camelcase: false */
    /* global Hammer */
    /* global FrameEvents */

    $('.block').pixelProjector({parentContainer: '#pp-container', offset: 3});


    setInterval(function() {
        $('.block').each(function(index, item) {
            if(!$(item).hasClass('dragging')) {
                $(item).pixelProjector().data('plugin_pixelProjector').randomise(item);
            }
        });
    }, 5000);


    // Hammer JS Drag
    var container = document.getElementById('pp-container');
    var fragment = document.createDocumentFragment();

    var hammertime = new Hammer(container, { drag_max_touches: 0, prevent_default: true });
    var lastTouches = [];
    var xOffset = 0;
    var yOffset = 0;

    function updatePositions() {
        Hammer.utils.each(lastTouches, function(touch) {
            if($(touch.target).hasClass('block')) {
                if(!$(touch.target).hasClass('dragging')) {
                    $(touch.target).addClass('dragging');
                }

                xOffset = ( ($(window).width() - $(container).width()) / 2 );
                yOffset = ( $(container).position().top );
                fragment.appendChild(touch.target);
                $(touch.target).css({'left': ((touch.pageX - 75) - xOffset) + 'px', 'top': ((touch.pageY - 75) - yOffset) + 'px'});
                $(touch.target).pixelProjector().data('plugin_pixelProjector').update(touch.toElement, ((touch.pageY - 75) - yOffset), ((touch.pageX - 75) - xOffset));
            }
        });
        container.appendChild(fragment);
    }

    function collectTouches(ev) {
        lastTouches = ev.gesture.touches;
    }

    function removeDrag(ev) {
        $(ev.target).removeClass('dragging');
    }

    // frame events tries to make it run at 60fps
    FrameEvents.on(container, 'touch', updatePositions, collectTouches);
    FrameEvents.on(container, 'drag', updatePositions, collectTouches);
    FrameEvents.on(container, 'release', removeDrag);

});
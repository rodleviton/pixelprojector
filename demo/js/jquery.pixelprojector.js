/**
 * jQuery Pixel Projector v0.9.0
 * jQuery pixel plugin to simulate image projection over a specified area
 * https://github.com/rodleviton/pixelprojector
 *
 * Licensed under the MIT license.
 * Copyright 2013 Rod Leviton
 */
(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pixelProjector = "pixelProjector";

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
        console.log(this.element);

        this.options = $.extend( {}, options );
        this._name = pixelProjector;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            var that = this;
            that.generatePosition(); // Fire event for first time
            setInterval(function() { that.generatePosition(); }, 5000);
        },

        generatePosition: function() {
            var that = this,
                top,
                left = 0;

            $('.block', this.element).each(function() {
                top = Math.round(Math.random() * $(container).height());
                left = Math.round(Math.random() * $(container).width());

                // Check that element will not be positioned off screen
                if( (top + $(this).height()) >= $(container).height()) {
                    top -= ( $(this).height() * 2 );
                }
                if( (left + $(this).width()) >= $(container).width()) {
                    left -= ( $(this).width() * 2 );
                }

                that.shufflePixels(this, top, left);
                $(this).css({'top': top, 'left': left});
            });
        },

        shufflePixels: function(el, top, left) {

            var topOffset = - top;
            var leftOffset = - left;
            var offset = (leftOffset + 'px' + ' ' + topOffset + 'px');
            $(el).css('background-position', offset);
        }

    };

    $.fn[pixelProjector] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pixelProjector)) {
                $.data(this, "plugin_" + pixelProjector, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );
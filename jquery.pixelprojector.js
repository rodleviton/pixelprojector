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

        this.options = $.extend( {}, options );
        this._name = pixelProjector;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            var that = this;
            this.shufflePixels();
            setInterval(function() { that.generatePosition(); }, 10000);
        },
        
        generatePosition: function() {
            var that = this;
            var top = Math.round(Math.random() * 640);
            var left = Math.round(Math.random() * 960);
            
            // Check that element will not be positioned off screen
            if( (top + $(this.element).height()) >= 640 ) {
                top -= ( $(this.element).height() * 2 );
            }
            if( (left + $(this.element).width()) >= 960 ) {
                left -= ( $(this.element).width() * 2 );
            }
            $(this.element).animate({'top': top, 'left': left, 'position': 'absolute'}, { duration: 1000, step: function() { that.shufflePixels() }} );
        },
        
        shufflePixels: function() {
            var topOffset = - $(this.element).position().top;
            var leftOffset = - $(this.element).position().left;
            var offset = (leftOffset + 'px' + ' ' + topOffset + 'px');
            $(this.element).css('background-position', offset);
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
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
    var pixelProjector = "pixelProjector"

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, options );
        this._name = pixelProjector;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            var topOffset = - $(this.element).offset().top;
            var leftOffset = - $(this.element).offset().left;
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
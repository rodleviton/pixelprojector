/*
 * PixelProjector - v0.9 - 2014-03-27
 * jQuery plugin to simulate image projection onto a collection of elements
 *
 * Copyright (c) 2014 Rodney Leviton
 * Licensed under the MIT license.
 */
(function ($, window, document, undefined) {
    'use strict';

    var pluginName = 'pixelProjector',
        defaults = {
            parentContainer: '#pp-container', // Default wrapping container
            offset: 0 // E.g. Accounts for border-width offset on element
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            this.project(this.element);
        },

        // Simulate projection of pixels onto element
        project: function (el) {
            var topOffset = ($(this.settings.parentContainer).position().top - $(el).position().top) - this.settings.offset,
                leftOffset = ($(this.settings.parentContainer).position().left - $(el).position().left) - this.settings.offset,
                offset = (leftOffset + 'px' + ' ' + topOffset + 'px');

            $(el).css('background-position', offset);
        },

        update: function(el, top, left) {
            var topOffset = ($(this.settings.parentContainer).position().top - top) - this.settings.offset,
                leftOffset = ($(this.settings.parentContainer).position().left - left) - this.settings.offset,
                offset = (leftOffset + 'px' + ' ' + topOffset + 'px');

            $(el).css('background-position', offset);
        },

        randomise: function(el) {
            var top = Math.round(Math.random() * $(this.settings.parentContainer).height()),
                left = Math.round(Math.random() * $(this.settings.parentContainer).width());

            var topOffset = ($(this.settings.parentContainer).position().top - top) - this.settings.offset,
                leftOffset = ($(this.settings.parentContainer).position().left - left) - this.settings.offset,
                offset = (leftOffset + 'px' + ' ' + topOffset + 'px');

            $(el).css({'top': top, 'left': left, 'background-position': offset});
        }
    };

    $.fn[pluginName] = function (options) {
        this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);
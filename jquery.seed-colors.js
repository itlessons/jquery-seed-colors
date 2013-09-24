/**
 * SeedColors is a jQuery plugin that makes it easy to colorize text using him as random seed.
 * Useful for chat username or same things.
 *
 * @name seedColors
 * @version 0.0.1
 * @requires jQuery v1.2.3+
 * @requires seedrandom (https://github.com/davidbau/seedrandom/blob/master/seedrandom.js)
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * https://github.com/itlessons/jquery-seed-colors
 * http://www.itlessons.info/javascript/generate-chat-colors-by-username/
 *
 * Copyright (c) 2013, www.itlessons.info
 */
(function ($) {

    $.seedColors = function(seed){
        return $.seedColors.getColorBySeed(seed);
    }

    var $t = $.seedColors;

    $.extend($.seedColors, {
        settings: {
            color_bright_min: 100,
            color_diff: 20
        },
        getColorBySeed: function(seed){
            var $s = $t.settings;

            Math.seedrandom(seed);

            var brightCount = $t.randAB(1,3);

            var rgb = [];

            for (var i = 0; i < 3; i++) {

                if(brightCount > 0){
                    var c = $s.color_bright_min + $s.color_diff;
                    rgb[i] = $t.randAB(c / 2, 250);
                    brightCount--;
                    continue
                }

                var c = $s.color_bright_min - $s.color_diff;
                rgb[i] = $t.randAB(0, c / 2);
            }

            Math.seedrandom();

            return $t.getHtmlColor($t.getColorFromRGB(rgb));
        },
        randAB: function(min, max){
            return min + Math.round((max - min) * Math.random());
        },
        getColorFromRGB: function(rgb){
            return rgb[0] << 16 | rgb[1] << 8 | rgb[2];
        },
        getHtmlColor: function(color){
            return '#' + color.toString(16);
        }
    });

    $.fn.seedColors = function (action, options) {
        this.each(function () {
            var el = $(this);
            el.css("color", $.seedColors(el.html()));
        });
    };
})(jQuery);
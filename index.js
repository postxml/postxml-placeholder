var url = require('url'),
    path = require('path');

module.exports = function (opts) {
    
    opts = opts || {};
    opts.url = opts.url ? opts.url : 'http://dummyimage.com/';
    opts.prefix = opts.prefix ? opts.prefix : ':';

    return function ($) {
        $('img[src^="' + opts.prefix + '"][src*="x"]').each(function () {
            var image = {};
            image.src = $(this).attr('src').replace(opts.prefix, '');
            image.width = image.src.match(/\d{1,}x/g)[0].replace('x','');
            image.height = image.src.match(/x\d{1,}[^\D]/g)[0].replace('x','')
            $(this).attr({
                'src': opts.url + image.src,
                'width': image.width,
                'height': image.height
            });
        });
    };
};

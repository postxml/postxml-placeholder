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
            $(this).attr('src', opts.url + image.src);
        });
    };
};

var plugin = require('../');
var postxml = require('../../postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

    var proccessed = postxml(input, [plugin(opts)]);

    expect(proccessed).to.eql(output);
};

describe('poxtxml-placeholder', function () {
    it('placehold', function () {
        test(
            '<img src=":600x400/000/fff.jpg&text=выыва">',
            '<img src="http://dummyimage.com/600x400/000/fff.jpg&text=выыва">',
            {}
        );
    });
    it('ignore x in src', function () {
        test(
            '<img src="img/400x250">',
            '<img src="img/400x250">',
            {}
        );
    });
    it('custom options', function () {
        test(
            '<img src="p:400x250">',
            '<img src="http://placehold.it/400x250">',
            {
                url: 'http://placehold.it/',
                prefix: 'p:'
            }
        );
    });
});

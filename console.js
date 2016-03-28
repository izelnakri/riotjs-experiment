require('babel-register')({
   presets: [ 'es2015' ]
});
require('./models');
require('./riot-load');

var _ = require('lodash'),
    repl = require('repl'),
    Repl = repl.start('> ');

Repl.context._ = _;

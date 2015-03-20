var gobble = require( 'gobble' );

gobble.cwd( __dirname );

module.exports = gobble( 'src' )
.transform( 'babel', {
	blacklist: [ 'es6.modules', 'useStrict' ],
	sourceMap: false
})
.transform( 'esperanto-bundle', {
	entry: 'ractive-transitions-fade',
	type: 'umd',
	name: 'Ractive.transitions.fade',
	sourceMap: false
});
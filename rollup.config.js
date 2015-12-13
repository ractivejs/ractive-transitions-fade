import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/ractive-transitions-fade.js',
	plugins: [ babel() ],
	moduleName: 'Ractive.transitions.fade'
};

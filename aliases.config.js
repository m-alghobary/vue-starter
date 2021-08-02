const path = require('path');

const aliases = {
	'@': '.',
	'@src': 'src',
	'@pages': 'src/pages',
	'@components': 'src/components',
	'@assets': 'src/assets',
	'@utils': 'src/utils',
	'@store': 'src/store',
};

module.exports = {
	webpack: {},
};

for (const alias in aliases) {
	const aliasTo = aliases[alias];
	module.exports.webpack[alias] = resolveSrc(aliasTo);
}

function resolveSrc(_path) {
	return path.resolve(__dirname, _path);
}

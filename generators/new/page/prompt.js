module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Name:',
		validate(value) {
			if (!value.length) {
				return 'Page must have a name.';
			}
			return true;
		},
	},
];

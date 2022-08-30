module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#111111',
      white: {
        100 : '#FFFFFF',
        200 : '#F4F4F4'
      },
      grey: {
        100 : '#555555',
        200 : '#888888'
      },
      blue : '#16ABF8',
	  pink : '#ED4C5C'
		},
		fontFamily: {
			'sans': ['Quicksand', 'Montserrat', 'Poppins'],
			'sans-serif': 'Inter'
		},
		extend: {
			transitionProperty: {
				'height': 'height'
			}
		},
	},
	plugins: [],
}

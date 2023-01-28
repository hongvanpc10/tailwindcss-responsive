const plugin = require('tailwindcss/plugin')

module.exports = plugin(
	({ matchComponents, theme }) => {
		matchComponents(
			{
				'show-on': value => ({
					display: 'none',
					[`@media (min-width: ${value})`]: {
						display: 'initial',
					},
				}),
			},
			{ values: theme('breakpoints') }
		)

		matchComponents(
			{
				'hide-on': value => ({
					display: 'initial',
					[`@media (min-width: ${value})`]: {
						display: 'none',
					},
				}),
			},
			{ values: theme('breakpoints') }
		)
	},
	{
		theme: {
			breakpoints: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
	}
)

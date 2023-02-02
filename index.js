const plugin = require('tailwindcss/plugin')

module.exports = plugin(
	({ matchComponents, theme }) => {
		matchComponents(
			{
				'show-on': value => ({
					[`@media (max-width: ${value})`]: {
						display: 'none',
					},
				}),
			},
			{ values: theme('breakpoints') }
		)

		matchComponents(
			{
				'hide-on': value => ({
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

import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				akira: ['var(--font-akira)'],
				blueCurve: ['var(--font-blueCurve)'],
				wiGuru: ['var(--font-wiGuru)'],
				gothamPro: ['var(--font-gothamPro)'],
			},
			fontSize: {
				'clamp-sm': 'clamp(0.25rem, 3vw, 0.75rem)',
				clamp: 'clamp(0.375rem, 3vw, 1rem)',
				'clamp-lg': 'clamp(0.5rem, 3vw, 1.125rem)',
				'clamp-xl': 'clamp(0.75rem, 3vw, 1.25rem)',
				'clamp-2xl': 'clamp(1rem, 3vw, 1.5rem)',
			},
			screens: {
				'max-sm': { max: '639px' },
				'max-md': { max: '767px' },
				'max-lg': { max: '1023px' },
				'max-xl': { max: '1279px' },
				'max-2xl': { max: '1535px' },
				'max-3xl': { max: '1719px' },
			},
			colors: {
				bodyBg: '#090315',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: '#8F88FF',
					'100': '#e9e8ff',
					'200': '#d5d4ff',
					'300': '#b7b1ff',
					'400': '#9385ff',
					'500': '#7459ff', //main
					'600': '#5d30f7',
					'700': '#4f1ee3',
					'800': '#4118bf',
					'900': '#37169c',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
				titanium: {
					'100': '#F0F0F0',
					'200': '#EEEEEE',
					'300': '#E1E1E1',
					'400': '#C9C9C9',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			transitionProperty: {
				'colors-transform':
					'color, background-color, border-color, transform, box-shadow, filter',
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;

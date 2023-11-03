/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '0.5rem',
				sm: '1rem',
				lg: '2rem',
			},
			screens: {
				sm: '640px',
				md: '800px',
				lg: '900px',
				xl: '1200px',
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				poppins: ['var(--font-poppins)', 'sans-serif'],
				inter: ['var(--font-inter)', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					yellow: 'hsl(var(--background-yellow))',
					lightPurple: 'hsl(var(--background-lightpurple))',
					purple: 'rgb(var(--background-purple))',
				},
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				links: {
					DEFAULT: 'hsl(var(--link-blue))',
					blue: 'hsl(var(--url-blue))',
				},
				brand: {
					DEFAULT: 'hsl(var(--brand-yellow))',
					mblue: 'hsl(var(--moderate-blue))',
					gray: 'hsl(var(--brand-gray))',
					yellow: 'hsl(var(--brand-yellow))',
					blue: 'hsl(var(--brand-blue))',
					verified: 'hsl(var(--verified-green))',
					error: 'hsl(var(--error-red))',
					links: 'hsl(var(--links-blue))',
					l_blue: 'hsl(var(--light-blue))',
					vd_gray: 'hsl(var(--very-dark-gray))',
					d_gray: 'hsl(var(--dark-gray))',
					md_gray: 'hsl(var(--medium-gray))',
					l_gray: 'hsl(var(--light-gray))',
					vl_gray: 'hsl(var(--very-light-gray))',
					vvl_gray: 'hsl(var(--very-very-light-gray))',
				},
				light: {
					DEFAULT: 'hsl(var(--light-blue))',
					blue: 'hsl(var(--light-blue))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			backgroundImage: {
				'app-download':
					"url('https://d1tl44nezj10jx.cloudfront.net/assets/app_download.png')",
				'app-store':
					"url('https://d1tl44nezj10jx.cloudfront.net/assets/app_store.svg')",
				'play-store':
					"url('https://d1tl44nezj10jx.cloudfront.net/assets/play_store.png')",
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};

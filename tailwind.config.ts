
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                burgundy: {
                    50: '#f9f6f7',
                    100: '#f5eef0',
                    200: '#e9d7dd',
                    300: '#d8b5bf',
                    400: '#c0889c',
                    500: '#a6657f',
                    600: '#894a66',
                    700: '#713953',
                    800: '#5e2e44',
                    900: '#50293a',
                    950: '#340f1f',
                },
                hotpink: {
                    50: '#fef1f7',
                    100: '#fee5f0',
                    200: '#fecce3',
                    300: '#ffa2cb',
                    400: '#fe67ac',
                    500: '#fc3d91',
                    600: '#eb1677',
                    700: '#ce0865',
                    800: '#a90a57',
                    900: '#8b0d4b',
                    950: '#55002a',
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-out': {
                    '0%': { opacity: '1', transform: 'translateY(0)' },
                    '100%': { opacity: '0', transform: 'translateY(10px)' }
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                'scale-out': {
                    from: { transform: 'scale(1)', opacity: '1' },
                    to: { transform: 'scale(0.95)', opacity: '0' }
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' }
                },
                'slide-out-right': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                'slide-in-bottom': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                'pulse-subtle': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.02)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
                'fade-out': 'fade-out 0.6s ease-out',
                'scale-in': 'scale-in 0.4s ease-out',
                'scale-out': 'scale-out 0.4s ease-out',
                'slide-in-right': 'slide-in-right 0.6s ease-out',
                'slide-out-right': 'slide-out-right 0.6s ease-out',
                'slide-in-bottom': 'slide-in-bottom 0.6s ease-out',
                'enter': 'fade-in 0.6s ease-out, scale-in 0.4s ease-out',
                'exit': 'fade-out 0.6s ease-out, scale-out 0.4s ease-out',
                'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite'
			},
            fontFamily: {
                sans: ['SF Pro Display', 'system-ui', 'sans-serif'],
                serif: ['Georgia', 'serif'],
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        './landing/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['"Plus Jakarta Sans"', 'sans-serif'],
                heading: ['"Plus Jakarta Sans"', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#f0f6ff',
                    100: '#e0edff',
                    200: '#c0daff',
                    300: '#90bfff',
                    400: '#5c9dff',
                    500: '#3b82f6', // Premium Enterprise Blue (Base)
                    600: '#2563eb', // Deeper vivid blue for buttons
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#091530', // Navy Black for very dark backgrounds
                },
                secondary: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569', 
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                },
                accent: {
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4', // Cyan Accent
                    600: '#0891b2',
                    700: '#0e7490',
                },
                surface: {
                    50: '#ffffff',
                    100: '#f8fafc',
                    200: '#f1f5f9',
                    300: '#e2e8f0',
                    400: '#cbd5e1',
                    800: '#1e293b',
                    900: '#0f172a',
                },
            },
            boxShadow: {
                'premium': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03), 0 12px 24px -4px rgba(0, 0, 0, 0.05)',
                'premium-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.08)',
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
                'glass-border': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #0a0f29 0%, #1a1f3c 50%, #312e81 100%)',
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient': 'gradient 8s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    safelist: [
        {
            pattern: /(bg|text|border|shadow)-(blue|sky|emerald|rose|orange|purple)-(300|400|500)/,
            variants: ['hover', 'group-hover'],
        }
    ],
    plugins: [],
}

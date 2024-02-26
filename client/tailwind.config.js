/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: '#36cf0c',
                secondary: '#5cf232',
                tertiary: '#d1fbc5',
                background: '#efefef',
                dimWhite: 'rgba(255, 255, 255, 0.7)',
                dimBlue: 'rgba(9, 151, 124, 0.1)',
                white: '#fcfcf9',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                aoboshi: ['Aoboshi One', 'serif'],
            },
        },
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1200px',
            xl: '1700px',
        },
    },
    plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
}

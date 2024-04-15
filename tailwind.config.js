/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.hbs", "./**/*.hbs"],
    theme: {
        extend: {
            colors: {
                // Define custom button color
                primary: '#60A5FA', // color for buttons
                // Define custom text color
                secondary: '#111827', // color for text
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}

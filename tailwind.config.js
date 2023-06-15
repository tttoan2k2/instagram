/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        screens: {
            sm: "480px",
            md: "767px",
            lg: "1000px",
            xl: "1264px",
        },
    },
    plugins: [],
};

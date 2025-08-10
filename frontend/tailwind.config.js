/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                burgundia: ["Burgundia"],
                lato: ["Lato"],
                dmsans: ["DM Sans", "sans-serif"],
            },
            borderRadius: {
                sm: "8px",
                md: "16px",
                lg: "32px",
            },
            colors: {
                primary: "#93032E",
                secondary: "#DBC2CA",
                lighttext: "#FFFBFC",
                darktext: "#27000C",
            }
        }
    },
}
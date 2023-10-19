/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                netflix: ["Netflix", "sans"],
                "netflix-bold": ["Netflix-Bold", "sans"],
                "netflix-medium": ["Netflix-Medium", "sans"],
            },
            colors: {
                primary: "#e5e5e5",
            },
        },
    },
    plugins: [],
};

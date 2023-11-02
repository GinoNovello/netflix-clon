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
                "custom-white": "#e5e5e5",
                "custom-black": "#141414",
            },
            keyframes: {
                slideDownAndFade: {
                    from: {opacity: 0, transform: "translateY(-2px)"},
                    to: {opacity: 1, transform: "translateY(0)"},
                },
                slideLeftAndFade: {
                    from: {opacity: 0, transform: "translateX(2px)"},
                    to: {opacity: 1, transform: "translateX(0)"},
                },
                slideUpAndFade: {
                    from: {opacity: 0, transform: "translateY(2px)"},
                    to: {opacity: 1, transform: "translateY(0)"},
                },
                slideRightAndFade: {
                    from: {opacity: 0, transform: "translateX(-2px)"},
                    to: {opacity: 1, transform: "translateX(0)"},
                },
            },
            animation: {
                slideDownAndFade: "slideDownAndFade 100ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideLeftAndFade: "slideLeftAndFade 100ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideUpAndFade: "slideUpAndFade 100ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideRightAndFade: "slideRightAndFade 100ms cubic-bezier(0.16, 1, 0.3, 1)",
            },
        },
    },
    plugins: [],
};

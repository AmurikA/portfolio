/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'phone': '375px',
            'phoneLg': '450px',
            'tablet': '640px',
            'laptop': '1024px',
            'desktop': '1280px',
        },
        extend: {
            fontSize: {
                "14px": "14px",
                "16px": "16px",
                "18px": "18px",
                "20px": "20px",
                "24px": "24px",
                "26px": "26px",
                "28px": "28px",
                "30px": "30px",
                "32px": "32px",
                "36px": "36px",
                "40px": "40px",
                "50px": "50px",
                "60px": "60px",
                "70px": "70px",
                "80px": "80px",
                "85px": "85px",
            },
            fontFamily: {
                lato: ["Lato", "serif"],
                k2D: ["K2D", "serif"]
            },
            letterSpacing: {
                '0.6px': '0.6px',
                '0.9px': '0.9px',
            },
            colors: {
                'main-background': '#121212',
                'white-dark': '#959595',
                'active': "#FD6F00",
                'gray-text': "#707070",
                'heading-bg':'#E8E7E7'
            },
            backgroundImage: {
                'bg-logo': 'linear-gradient(90deg, #FA6E00 0%, #E60026 100%);',
                'bg-Front': 'linear-gradient(90deg, #984300 0.34%, #FD6F00 42.06%, #CA5900 90.34%);',
                'quote': 'linear-gradient(91deg, #DBFF00 4.92%, #0F172A 37.44%)',
            },
            keyframes: {
                'fade-slide': {
                    '0%': {opacity: '0', transform: 'translateY(20px)'},
                    '100%': {opacity: '1', transform: 'translateY(0)'},
                },
            },
            animation: {
                'fade-slide': 'play 0.5s steps(4) infinite',
            },
        },
    },
    plugins: [],
}
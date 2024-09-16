/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'darkred' : 'var(--darkred)',
        'light-gray': 'var(--light-gray)',
        'white': 'var(--white)',
        'light-white': 'var(--light-white)',
        'black': 'var(--black)',
        'white-para-color': 'var(--white-para-color)',
        'lightred': 'var(--lightred)'
      },
      backgroundImage:{
        'gradient-red': 'linear-gradient(to bottom right, var(--darkred), #ff5e68)'
      },
      boxShadow:{
        'dark-shadow': 'var(--dark-shadow)',
        'light-shadow': 'var(--light-shadow)'
      },
      fontFamily:{
        'bold-font': 'var(--bold-font)',
        'light-font': 'var(--light-font)',
        'awesome': 'Font Awesome 6 Free'
      },
      transitionDuration:{
        'transition' : 'var(--transition)'
      },
      fontSize:{
        'parasize': 'parasize'
      },
      borderColor:{
        'borderWidth': '1px solid rgba(67, 41, 163, .2)'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
    keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 10px))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - 10px))" },
        },
      },

      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-vertical": "marquee-vertical 20s linear infinite",
      },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
    ],
    
  theme: {
    extend: {
      fontFamily:{
        Poppins: "Poppins",
      },
      colors: {
        dark_purple:"#172d8e24",
        btn_primary:"#7e7ee3",
        heading_color:"#abd9d9",
        bg_white:"#ffffff",
        btn_color:"#172d8e",
        btn_yellow:"#f2ff34cc"
      
      },
      height: {
        cst_heith:"500px"
      },
      keyframes: {
        wave: { 
          '0%': { transform: 'scale(1);' },
          '14%': { transform: 'scale(1.3);' },
          '28%': { transform: 'scale(1);' },
          '42%': { transform: 'scale(1.3);' },
          '70%': { transform: 'scale(1.3);' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
      
    },
  },
  plugins: [
    
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [{
      mytheme: {
          
        "primary": "#1DA1F2",
                  
        "secondary": "#ffffff",
                  
        "accent": "#657786",
                  
        "neutral": "#657786",
                  
        "base-100": "#14171A",
                  
        "info": "#1DA1F2",
                  
        "success": "#1DA1F2",
                  
        "warning": "#00ff00",
                  
        "error": "#ff0000",
                  },
  }],
  },
  
  plugins: [require('daisyui'),require('tailwind-scrollbar')({ nocompatible: true }),],
}
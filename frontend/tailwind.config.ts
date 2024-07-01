import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-green': '#386641',
        'green': '#6A994E',
        'light-green': '#A7C957',
        'black': '#000000',
        'white': '#ffffff',        
        'white-2': '#F0F1FA',
        'white-3': '#F4F7FC',
        'gray': '#9CA3AF',
      },
      backgroundImage: {
        'image-baground': "url('../public/images/student/uorBgImg.jpg')",
      },
      spacing: {
        '150': '32rem',
      },
      height:{
        '800':'800px',
        '500':'500px',
        '300':'300px',
      },
      width: {
        '720': '720px',
        '200': '42rem',
      },
      borderRadius:{
        '5xl':'60px',
      },
      screens:{
        'vsm':'320px'
      },
    },
  },
  plugins: [],
};
export default config;

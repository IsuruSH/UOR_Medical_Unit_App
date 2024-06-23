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
        
      },
    },
  },
  plugins: [],
};
export default config;

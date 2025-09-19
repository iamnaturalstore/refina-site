/** @type {import('tailwindcss').Config} */
export default {
content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
theme: {
extend: {
colors: {
brand: {
50: '#f6f3fa', 100: '#ede8f5', 200: '#d9d1ec', 300: '#b7a7dc',
400: '#8f76c7', 500: '#6e53b3', 600: '#5b3a91', 700: '#4a2f77',
800: '#39255c', 900: '#2e1f4a'
}
}
}
},
plugins: []
};
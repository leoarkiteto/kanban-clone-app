/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
			colors: {
				"mainBgColor": "#0d1117",
				"columnBgColor": "#161c22"
			}
    },
  },
  plugins: [],
}

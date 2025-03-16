/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				primary: "#EDEDED",
				secondary: "#FFFFFF99",
				radical: "blue-400",
				kanji: "yellow-400",
				vocabulary: "green-400",
				box: "#1C1C1C",
				bg: "#161616",
				border: "#242424",
			},
		},
	},
	plugins: [],
};

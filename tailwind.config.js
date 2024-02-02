/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				body: "#000",
				yellow: "#FE961C",
				"variant-100": "#8790AE",
			},
			boxShadow: {
				100: "0px 2px 5px rgba(0,0,0, 0.3)",
				200: "1px 2px 5px -2px rgba(0,0,0, 0.5)",
			},
			borderRadius: {
				sm: "3px",
			},
			fontFamily: {
				nunito: ["Nunito Sans", "Helvetica", "Arial", "sans-serif"],
				poppins: ["Poppins", "Arial", "sans-serif"],
				poppinslight: ["PoppinsLight", "Arial", "sans-serif"],
			},
			fontSize: {
				tiny: "0.65rem",
				sm: "0.8rem",
				base: ["0.9rem", { lineHeight: "1.4" }],
				subtitle: ["clamp(1.2rem, 1vw, 24px)", { lineHeight: "1.2" }],
				secondary: ["clamp(2rem, 3vw, 40px) ", { lineHeight: "1.2" }],
				primary: ["clamp(2.5rem, 5vw, 52px)", { lineHeight: "1.2" }],
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".h-100dvh": {
					height: "100dvh",
				},
				".transition-sm": {
					transition: "all 0.3s linear",
				},
				".clip-circle ": {
					clipPath: "circle()",
				},
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
};

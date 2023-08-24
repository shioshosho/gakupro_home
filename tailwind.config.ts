import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 10px rgba(255, 255, 255, 0.4)",
          "0 0px 20px rgba(255, 255, 255, 0.4)",
          "0 0px 30px rgba(23, 0, 103, 0.2)",
          "0 0px 65px rgba(23, 0, 103, 0.3)"
        ],
        purple: [
          "0 10px 8px rgba(23, 0, 103, 0.25)"
        ]
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config

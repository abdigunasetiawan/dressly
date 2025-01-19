/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./lab.html"],
  theme: {
    extend: {
      colors: {
        "x-neutral-900": "#1B1314",
        "x-neutral-700": "#12070B",
        "x-neutral-500": "#262626",
        "x-neutral-300": "#BDBDBD",
        "x-neutral-200": "#BDBDBD",
        "x-neutral-100": "#E9E9E9",
        "x-secondary-900": "#15396B",
        "x-secondary-700": "#3872A1",
        "x-secondary-500": "#70BDE0",
        "x-secondary-300": "#ABE8F5",
        "x-secondary-200": "#C9F6FB",
        "x-secondary-100": "#E4FCFD",
        "x-primary-900": "#6B1915",
        "x-primary-700": "#A14B38",
        "x-primary-500": "#E09370",
        "x-primary-300": "#F5CCAB",
        "x-primary-200": "#FBE3C9",
        "x-primary-100": "#FDF2E4",
        "x-background-900": "#E6E6E6",
        "x-background-700": "#EBEBEB",
        "x-background-500": "#EEEEEE",
        "x-background-300": "#F3F3F3",
        "x-background-200": "#F8F8F8",
        "x-background-100": "#FDFDFD",
        "x-success-900": "#095A3C",
        "x-success-700": "#188749",
        "x-success-500": "#31BC53",
        "x-success-300": "#82EA88",
        "x-success-200": "#B2F8AE",
        "x-success-100": "#DBFBD6",
        "x-info-900": "#102A7A",
        "x-info-700": "#2A59B7",
        "x-info-500": "#7EB9FF",
        "x-info-300": "#98CBFF",
        "x-info-200": "#BADFFF",
        "x-info-100": "#DCF0FF",
        "x-warning-900": "#7A4E0B",
        "x-warning-700": "#B7831E",
        "x-warning-500": "#FFC83D",
        "x-warning-300": "#FFE48A",
        "x-warning-200": "#FFEFB1",
        "x-warning-100": "#FFF8D8",
        "x-danger-900": "#7A0922",
        "x-danger-700": "#B71821",
        "x-danger-500": "#FF4530",
        "x-danger-300": "#FFA382",
        "x-danger-200": "#FFC8AC",
        "x-danger-100": "#FFE7D5",
      },
      fontFamily: {
        inter: ["Inter"],
        poppins: ["Poppins"],
        lora: ["Lora"],
        ubuntu: ["Ubuntu"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};

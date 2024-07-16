/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        // red
        primary: {
          DEFAULT: "#E30909",
          100: "#F7EAEA",
          200: "#F5E3E3",
          300: "#F1D3D3",
          400: "#EEB9B9",
          500: "#EB9595",
          600: "#EC6666",
          700: "#EE3A3A",
          800: "#E30909",
          900: "#DA0202",
          1000: "#BD0000",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "#ECECEC",
          0: "#FFFFFF",
          100: "#F8F8F8",
          150: "#ECECEC",
          200: "#E8E8E8",
          300: "#BBBBBB",
          400: "#848484",
          500: "#625D5D",
          600: "#454141",
          700: "#2D2D2D",
          800: "#1A1818",
          900: "#000000",
          foreground: "hsl(var(--secondary-foreground))",
        },
        gold: {
          100: "#AD914C",
          200: "#A0843F",
          300: "#8B7338",
          400: "#7D6A3E",
          ECCB7D: "#ECCB7D",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        noto: ["Noto Sans TC", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        body: [
          "Noto Sans TC",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Noto Sans TC",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
      maxWidth: { ...defaultTheme.width, "8xl": "1344px" },
      // add text-2xs
      fontSize: {
        "2xs": ".625rem",
      },
      keyframes: ({ theme }) => ({
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        rerender: {
          "0%": {
            "border-color": theme("colors.vercel.pink"),
          },
          "40%": {
            "border-color": theme("colors.vercel.pink"),
          },
        },
        highlight: {
          "0%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
          "40%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
        },
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: "1",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      }),
      backgroundImage: {
        "gradient-carousel": "linear-gradient(6.84deg, rgba(44, 44, 44, 0.9) 5.29%, rgba(44, 44, 44, 0) 94.24%)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors[#343434]"),
            "--tw-prose-headings": theme("colors[#343434]"),
            "--tw-prose-counters": theme("colors[#343434]"),
            "--tw-prose-bullets": theme("colors[#343434]"),
            "--tw-prose-hr": theme("colors.tertiary.400"),
            "--tw-prose-quotes": theme("colors[#343434]"),
            "--tw-prose-quote-borders": theme("colors.secondary.500"),
            "--tw-prose-captions": theme("colors[#343434]"),
            p: {
              fontSize: "17px",
              lineHeight: "150%",
              letterSpacing: "0.5px",
              marginTop: "12px",
              marginBottom: "40px",
            },
            strong: {
              fontWeight: "500",
            },
            figure: {
              marginTop: "40px",
              marginBottom: "40px",
            },
            figcaption: {
              fontSize: "14px",
              lineHeight: "22px",
              marginTop: "4px",
            },
            blockquote: {
              fontStyle: "normal",
              paddingTop: "8px",
              paddingBottom: "8px",
              borderLeftColor: "#8F0F0F",
            },
            "blockquote p": {
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "27px",
              fontWeight: "500",
              marginTop: "0",
              marginBottom: "0",
            },
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
            ul:{
              padding: "0px",
              marginLeft: "0px",
            },
            h1: {
              fontSize: "28px",
              lineHeight: "40px",
              fontWeight: "600",
              letterSpacing: "0",
              marginTop: "0",
              marginBottom: "24px",
            },
            h2: {
              fontSize: "24px",
              lineHeight: "32px",
              fontWeight: "600",
              letterSpacing: "0px",
              marginTop: "0",
              marginBottom: "14px",
            },
            h3: {
              fontSize: "20px",
              lineHeight: "30px",
              fontWeight: "500",
              letterSpacing: "0.5px",
              marginTop: "0",
              marginBottom: "11px",
            },
            h4: {
              fontSize: "16px",
              lineHeight: "27px",
              fontWeight: "500",
              letterSpacing: "0.5px",
              marginTop: "0",
              marginBottom: "8.5px",
            },
            h5: {
              fontSize: "14px",
              lineHeight: "22px",
              fontWeight: "500",
              letterSpacing: "0.5px",
              marginTop: "0",
              marginBottom: "7px",
            },
            h6: {
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: "400",
              letterSpacing: "0.5px",
              marginTop: "0",
              marginBottom: "6px",
            },
            hr: {
              marginTop: "24px",
              marginBottom: "24px",
            },
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")],
}

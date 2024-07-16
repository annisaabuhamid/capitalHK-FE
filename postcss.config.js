module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},

    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      autoprefixer: {},
      stage: 3,
      features: {},
    },
  },
}

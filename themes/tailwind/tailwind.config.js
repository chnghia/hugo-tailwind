const path = require("path");
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [path.resolve(__dirname) + "/layouts/**/*.html"],
    options: {
      whitelist: [],
    },
  },

  theme: {
    extend: {
      colors: {
        black: "#212b36",
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#3056D3",
        secondary: "#13C296",
        "body-color": "#637381",
        warning: "#FBBF24",
      },
      fontFamily: {
        ...fontFamily,
        'sans': 'Poppins, sans-serif'
      },
      container: {
        center: true,
        padding: "16px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h2: {
              color: theme('colors.gray.800'),
            },

            h3: {
              color: theme('colors.gray.700'),
            },
            strong: {
              color: theme('colors.gray.800'),
            },
            em: {
              color: theme('colors.gray.400'),
            },
            a: {
              color: theme('colors.green.500'),
              '&:hover': {
                color: theme('colors.gray.300')
              },
            },
          },
        },
      })
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}


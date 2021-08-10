module.exports = {
  purge: [],
  // prefix:'tw-'''
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '1.8rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      // padding: "",
    },
    extend: {
      colors: {
        'rili-care-blue': '#458FF6',
        'rili-care-light': '#84B5F9'
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/bgElement.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   riliCareBlue: {
    //     light: "#85d7ff",
    //     DEFAULT: "#458FF6",
    //     dark: "#009eeb",
    //   },
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

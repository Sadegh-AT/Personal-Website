module.exports = {
  content: ["./src/js/*.{html,js}", "./src/index.html"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      colors: {
        textcolor: "#333333",
        shadowcolor: "rgba(4,195,255,0.15)",
        appbg: "#fff",
        sectionbgcolor: "#fff",
        AmericanGreen: "#49AF46",
        SpiroDiscoBall: "#13B6FF",
        PortlandOrange: "#FF6331",
        CerisePink: "#EC407A",
        MikadoYellow: "#FFC50C",
        LavenderIndigo: "#8540FF",
        PrincetonOrange: "#F57F17",
        TiffanyBlue: "#0ABEAD",
      },
      fontFamily: {
        Poppins: "Poppins",
        PoppinsMedium: "Poppins Medium",
        PoppinsSemiBold: "Poppins SemiBold",
        PoppinsBold: "Poppins Bold",
        PoppinsBlack: "Poppins Black",
      },
    },
  },
  plugins: [],
};

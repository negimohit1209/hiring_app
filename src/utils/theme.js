import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const bodyBgMap = {
  light: "#f0f0f0",
  dark: "#303030"
};
const primaryColorMap = {
  light: "#4caf50",
  dark: "#cddc39"
};
const secondaryColorMap = {
  light: "#cddc39",
  dark: "#4caf50"
};

export default function getTheme(type) {
  return createMuiTheme({
    palette: {
      type,
      primary: {
        main: primaryColorMap[type]
      },
      secondary: {
        main: secondaryColorMap[type]
      },
      background: {
        default: bodyBgMap[type]
      },
      error: {
        main: "#123456",
        default: "#123456"
      }
    },
    typography: {
      fontFamily: [
        "Lato",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      useNextVariants: true
    }
  });
}

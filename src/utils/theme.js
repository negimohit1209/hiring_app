import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const bodyBgMap = {
  light: "#f0f0f0",
  dark: "#303030"
};
const primaryColorMap = {
  light: "#273b4f",
  dark: "#0fc5a4"
};
const secondaryColorMap = {
  light: "#0fc5a4",
  dark: "#273b4f"
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

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    marginBottom: 0,
                },
            },
        },
    },
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#7A5900",
        },
    },
    typography: {
        fontSize: 12,
        htmlFontSize: 10,
        fontFamily: ["Noto Serif", "Times New Roman", "sans-serif"].join(","),
        h1: {
            fontSize: "2.25rem",
            fontWeight: 700,
            marginBottom: "0.75rem",
        },
        h2: {
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "0.75rem",
        },
        h3: {
            fontSize: "1.3125rem",
            fontWeight: 700,
            marginBottom: "0.75rem",
        },
        h4: {
            fontSize: "1.125rem",
            fontWeight: 700,
            marginBottom: "0.75rem",
        },
        h5: {
            fontSize: "1rem",
            marginBottom: "0.75rem",
        },
        h6: {
            fontSize: "0.875rem",
            marginBottom: "0.75rem",
        },
        body1: {
            fontSize: "1rem",
            marginBottom: "1.3125rem",
        },
    },
});

theme = responsiveFontSizes(theme, {
    breakpoints: ["sm"],
});

export default theme;

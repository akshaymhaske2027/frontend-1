import { createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#e91e63",
        },
        secondary: {
            main: "#5A20CB",
        },
        background: {
            default: "#0D0D0D", 
            paper: "#0D0D0D",
        },
        textColor: {
            main: "#111111",  // Use `text.primary`
        },
        // Custom colors can be added under 
        black: {
            main: "#242B2E",
        },
    },
})
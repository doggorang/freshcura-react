import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import { red, grey } from "@mui/material/colors"

const base = createTheme({
  palette: {
    primary: {
      main: red[400]
    },
    secondary: {
      main: grey[400]
    },
    error: {
      main: red[400]
    }
  }
})

const theme = responsiveFontSizes(base)

export default theme
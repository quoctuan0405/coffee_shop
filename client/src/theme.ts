import { createMuiTheme } from '@material-ui/core/styles';
import { red, teal, green } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: teal[500],
        },
        secondary: {
            main: green[300],
        },
        error: {
            main: red[800],
        },
        type: "dark"
    },
});

export default theme;
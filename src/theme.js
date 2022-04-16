import {createMuiTheme} from '@material-ui/core/styles';
import {blue, indigo, orange} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: indigo[700]
          },
        secondary: {
            main: blue[900]
        },
      },
});

theme.props ={};

theme.overrides = {};


export default theme;
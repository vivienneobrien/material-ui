import { createMuiTheme } from '@material-ui/core/styles';

const blue = "#2196f3";
const orange = "#ff9100";
const theme = createMuiTheme ({
    palette: {
          common: {
              blue: `${blue}`,
              orange: `${orange}`
          },
          primary: {
              main: `${blue}`
          },
          secondary: {
              main: `${orange}`
          }
      },
    typography: {
        h3: {
            fontWeight: 300
        }
    }
  });
export default theme
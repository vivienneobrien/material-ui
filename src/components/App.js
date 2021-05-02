import React from 'react';
import Header from './ui/Header'
import {ThemeProvider} from '@material-ui/styles'
import theme from './ui/Theme'

function App() {
  return (
    // theme is a prop
    <ThemeProvider theme={theme}> 
    <Header />
   Hello
  </ThemeProvider>
  );
}

export default App;

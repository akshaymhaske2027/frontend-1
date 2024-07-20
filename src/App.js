import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import DarkTheme, { darkTheme } from './Theme/DarkTheme';
import { Navbar } from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home/> */}
      <RestaurantDetails/>
    </ThemeProvider>
  );
}

export default App;
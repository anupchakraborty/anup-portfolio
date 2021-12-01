import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
});

const Mainmenu = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
            <AppBar position="fixed">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                    Anup Chakraborty
                </Typography>
                <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">Home</Button>
                </NavLink>
                <NavLink to="/portfolio" style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">Portfolio</Button>
                </NavLink>
                <NavLink to="/blog" style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">Blog</Button>
                </NavLink>
                <NavLink to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">Contact</Button>
                </NavLink>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </Box>
    );
};

export default Mainmenu;
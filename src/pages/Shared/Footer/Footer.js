import { Typography, AppBar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Facebook, Twitter, LinkedIn, Google} from '@mui/icons-material';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
});

const Footer = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="static" color="primary" sx={{ py: 5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '300px', marginLeft: '530px', marginBottom: '50px' }}>
                            <Facebook />
                            <Twitter />
                            <LinkedIn />
                            <Google />
                        </Box>
                        <Typography variant="body1" gutterBottom>
                            Copy Right by Anup Chakraborty 2021
                        </Typography>
                    </AppBar>
                </ThemeProvider>
            </Box>
        </>
    );
};

export default Footer;
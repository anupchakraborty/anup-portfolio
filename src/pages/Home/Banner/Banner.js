import React from 'react';
import banner from '../../../images/banner-4.jpg';
import { Typography, Box, Button } from '@mui/material';

const styles = {
    bannerContainer: {
        height: 800,
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
};

const Banner = () => {
    return (
    <Box sx={{ flexGrow: 1, height: '500px', width: '100%' }} style={styles.bannerContainer}>
        <Box sx={{ paddingTop: '280px' }}>
            <Typography variant="h6" sx={{ pb: 5, fontWeight: 'bold', color: '#101601' }}>
                Hey There !
            </Typography>
            <Typography variant="h3" sx={{ pb: 5, fontWeight: 'bold', color: '#101601' }}>
                I Am Anup Chakraborty
            </Typography>
            <Typography variant="h6" sx={{ pb: 5, fontWeight: 'bold', color: '#101601' }}>
                MERN Stack Web Developer
            </Typography>
            <Button href="https://docs.google.com/document/d/16Ah9RGFysXtLbTsr94T6u7r0sBGF3be1JdoSUKOm6CI/edit?usp=sharing" target="_blank
            " variant="outlined">View Resume</Button>
        </Box>
    </Box>
    );
};

export default Banner;
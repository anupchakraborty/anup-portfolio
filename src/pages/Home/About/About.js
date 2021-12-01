import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import banner3 from '../../../images/banner-3.jpg'
const About = () => {
    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 8, mb: 8 }}>
                <Grid item xs={12} md={6}>
                    <img src={banner3} style={{ width: '100%' }} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ textAlign: 'left', color: '#3F85F0', fontSize: '48px' }}>
                        Let Me Introduce MySelf
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'left', mt: 5, fontSize: '18px' }}>
                    I have created some projects such as Drone Beyond App, Travel Agent Website, Hospital Appointment App using MERN(Mongo DB, Express js, React js, and Node js) for my portfolio. I also know Laravel and I have created some projects using Laravel such as Real Estate Project, Online Training Project,  e-commerce websites.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
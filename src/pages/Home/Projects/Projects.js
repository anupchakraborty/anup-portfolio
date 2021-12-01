import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import project1 from '../../../images/project-1.jpg';
import project2 from '../../../images/project-2.jpg';
import project3 from '../../../images/project-3.jpg';
import project4 from '../../../images/project-4.jpg';
import project5 from '../../../images/project-5.jpg';
import project6 from '../../../images/project-6.jpg';
import project7 from '../../../images/project-7.jpg';
import project8 from '../../../images/project-8.jpg';
import project9 from '../../../images/project-9.jpg';

const Projects = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: '#222'; color: #bada55`
          );
        }
      };
    return (
        <Box sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h4">
            My Projects
        </Typography>
        <Container sx={{ mt: 5 }}>
            <Slider {...settings}>
            <Box>
                <img src={project1} style={{ width: '200px', height: '200px' }} alt="" />
            </Box>
            <Box>
            <img src={project2} style={{ width: '200px', height: '200px' }} alt="" />
            </Box>
            <Box>
            <img src={project3} style={{ width: '200px', height: '200px' }} alt="" />
            </Box>
            <Box>
            <img src={project4} style={{ width: '200px', height: '200px' }} alt="" />
            </Box>
            <Box>
            <img src={project5} style={{ width: '200px', height: '200px' }} alt="" />
            </Box>
            <Box>
            <img src={project6} style={{ width: '200px', height: '200px' }} alt="" />
            </Box>
            <Box>
            <img src={project7} style={{ width: '200px', height: '200px' }} alt="" />
            </Box>
            <Box>
            <img src={project8} style={{ width: '200px', height: '200px' }} alt="" />
            </Box>
            <Box>
            <img src={project9} style={{ width: '200px', height: '200px' }} alt="" />
            </Box>
            </Slider>
        </Container>
      </Box>
    );
};

export default Projects;
import { Container, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_eCWMHL53UbekDsLj2wq6R");

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0l4e84f', 'template_vm3aqkq', form.current, 'user_eCWMHL53UbekDsLj2wq6R')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();        
    };
    return (
        <Box>
            <Container sx={{ mt: 16, mb: 5 }}>
                <form ref={form} onSubmit={sendEmail}>
                <Box>
                    <Typography variant="h3">
                        Contact Me
                    </Typography>
                    <Typography variant="body1">
                        If you want to contact with me then fill the information and send me.
                    </Typography>
                </Box>
                <Box>
                    <TextField
                    sx={{ width: '100%', mb: 5}}
                    label="Your Name"
                    id="your-name"
                    name="user_name"
                    variant="standard"
                    />
                </Box>
                <Box>
                    <TextField
                    sx={{ width: '100%', mb: 5 }}
                    label="Your Email"
                    id="your-email"
                    name="user_email"
                    variant="standard"
                    />
                </Box>
                <Box>
                    <TextField
                    sx={{ width: '100%', mb: 5}}
                    id="your-comment"
                    label="Your Comment"
                    name="message"
                    multiline
                    rows={10}
                    variant="outlined"
                    />
                </Box>
                <Button type="submit" variant="outlined">Send Me</Button>
                </form>
            </Container>
        </Box>
    );
};

export default Form;
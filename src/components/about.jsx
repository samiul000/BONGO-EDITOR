import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: 'none',
};

const AboutModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="about-modal-title"
            aria-describedby="about-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography id="about-modal-title" variant="h6" component="h2">
                    ABOUT
                </Typography>
                <Typography id="about-modal-description" sx={{ mt: 2 }}>
                  Welcome to BONGO-EDITOR, a versatile and powerful web application designed to provide a seamless coding experience for developers of all skill levels. BONGO-EDITOR offers an integrated development environment where users can write, test, and visualize their HTML, CSS, and JavaScript code in real-time.
                </Typography>
                <Typography id="about-modal-title" variant="h6" component="h3">
                    Key Features:
                </Typography>
                <Typography component="ul" sx={{ mt: 2 }}>
                    <Typography component="li">
                        <strong>Real-Time Code Preview:</strong> Instantly see the results of your HTML, CSS, and JavaScript code changes in the preview section. This immediate feedback loop enhances productivity and helps in quick debugging.
                    </Typography>
                    <Typography component="li">
                        <strong>User-Friendly Interface:</strong> Our clean and intuitive interface ensures that both beginners and experienced developers can navigate and use the editor with ease.
                    </Typography>
                    <Typography component="li">
                        <strong>Separate Code Sections:</strong> Write your HTML, CSS, and JavaScript code in dedicated sections, allowing for organized and efficient coding.
                    </Typography>
                    <Typography component="li">
                        <strong>Cross-Browser Compatibility:</strong> BONGO EDITOR runs smoothly on all major browsers, ensuring you can code anytime, anywhere.
                    </Typography>
                </Typography>
                <Typography id="about-modal-description" sx={{ mt: 2 }}>
                    <strong>Developed by:</strong> Al-Mahmud Samiul
                </Typography>
            </Box>
        </Modal>
    );
};

export default AboutModal;

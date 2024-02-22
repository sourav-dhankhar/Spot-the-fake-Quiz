import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const handleClose = () => props.handleSetStartQuiz(true);

    return (
        <div>
            <Modal
                open={!props.startQuiz}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Spot-the-fake Quiz
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Please click on start button to start the Quiz.
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2 }} onClick={handleClose}>Start</Button>
                </Box>
            </Modal>
        </div>
    );
}
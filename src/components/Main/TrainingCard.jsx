import React, { useState } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material';
import CreateModal from './CreateModal';

export default function TreiningCard({ trainingName, imageSrc, info }) {
    const [open, setOpenModal] = useState(false);

    const startQuiz = () => {
        console.log("Quiz started");
        alert("Quiz started")
    }

    return (
        <>
            <Card sx={{
                width: 250,
                background: 'rgba(0, 0, 0, 0.550)',
                color: 'white'
            }}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={imageSrc}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {trainingName}
                    </Typography>
                    <Typography variant='body2' color='grey'>
                        {info.slice(0, 40)}...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ fontSize: '11px' }} size='small' onClick={startQuiz}>Записатись</Button>
                    <Button sx={{ fontSize: '11px', color: 'white'}} size='small' onClick={() => setOpenModal(true)}>Дізнатись більше</Button>
                </CardActions>
            </Card>
            <CreateModal
                open={open}
                handleOnClose={() => setOpenModal(false)}
                imageSrc={imageSrc}
                trainingName={trainingName}
                info={info}
            />
        </>
    );
}

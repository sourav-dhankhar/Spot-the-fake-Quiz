import React, { useState, Suspense, useEffect } from 'react'
import FastForwardIcon from '@mui/icons-material/FastForward';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Loading from './Loading.jsx';


function QuizeQuestion(props) {
    const questionNumber = props.questionNumber;
    const selectedImage = props.selectedImage;
    const shuffledQuestionsRef = props.shuffledQuestionsRef
    const Quizquestions = props.quizQuestion

    const [loadedImage, setLoadedImage] = useState(0);

    useEffect(() => {
        setLoadedImage(0);
    }, [questionNumber])


    function handleImageLoad() {
        setLoadedImage((prevState) => prevState + 1);
    }

    useEffect(() => {
        if (loadedImage == 2) {
            props.startTimer(true);
        }
    }, [loadedImage])

    const questionsComp = shuffledQuestionsRef.current.map((answer, index) => {
        let status = '';
        if (selectedImage == answer) {
            if (selectedImage == Quizquestions[questionNumber].answers[0]) {
                status = <ClearIcon size="large" sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1, color: 'red', background: 'white' }} />;
            } else {
                status = <CheckIcon size="large" sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1, color: 'green', background: 'white' }} />;
            }
        }
        return (
            <button key={`${answer.id}_${index}`} className='relative mx-8 my-4' disabled={(selectedImage || loadedImage < 2) ? true : false} onClick={() => { props.handleOnClick(answer) }}>
                {status ? status : <></>}
                <img className={`relative h-full w-full rounded-lg`} onLoad={handleImageLoad} src={answer} />
            </button >
        )
    })
    return (
        <>
            <div className='relative h-5/6 top-20 m-2'>
                <div className={`${loadedImage < 2 ? 'h-full flex justify-center content-center' : 'hidden'}`}>
                    <Loading />
                </div>
                <div className={`${loadedImage >= 2 ? 'block' : 'hidden'}`}>
                    <div className='absolute top-0 left-0 my-2 px-4'><h3 className='text-3xl font-bold'>{questionNumber + 1})<span></span></h3></div>
                    <div className='flex flex-row h-auto w-auto px-8'>
                        {questionsComp}
                    </div>
                    {selectedImage && <span className='absolute bottom-0 right-0 text-lg font-bold'>
                        <Tooltip title="Next" placement="bottom" arrow>
                            <IconButton onClick={() => { props.handleAnswerSubmission() }}>
                                <FastForwardIcon sx={{ fontSize: 40, color: 'white' }} />
                            </IconButton>
                        </Tooltip>
                    </span>}
                </div>
            </div>
        </>
    )
}

export default QuizeQuestion
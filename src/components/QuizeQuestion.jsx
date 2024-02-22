import React from 'react'
import FastForwardIcon from '@mui/icons-material/FastForward';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';


function QuizeQuestion(props) {
    const questionNumber = props.questionNumber;
    const selectedImage = props.selectedImage;
    const shuffledQuestionsRef = props.shuffledQuestionsRef
    const Quizquestions = props.quizQuestion
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
            <button key={`${answer.id}_${index}`} className='relative mx-8 my-4' disabled={selectedImage ? true : false} onClick={() => { props.handleOnClick(answer) }}>
                {status ? status : <></>}
                <img className={`relative h-full w-full rounded-lg`} src={answer}>
                </img>
            </button>
        )
    })
    return (
        <div className='relative top-20 m-2'>
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
    )
}

export default QuizeQuestion
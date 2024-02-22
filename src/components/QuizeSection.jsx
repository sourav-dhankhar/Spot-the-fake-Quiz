import React, { useRef, useState, useCallback } from 'react'
import Quizquestions from './Quiz'
import QuizeQuestion from './QuizeQuestion';
import QuizResult from './QuizResult';
import Timer from './Timer';

function QuizeSection(props) {
  const [attemptedQuestions, setAttemptedQuestions] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');
  const shuffledQuestionsRef = useRef([]);
  const questionNumber = attemptedQuestions.length;

  const quizCompleted = questionNumber == Quizquestions.length ? true : false;

  function handleOnClick(answer) {
    setSelectedImage(answer);
  }

  function handleAnswerSubmission() {
    const currentImage = selectedImage;
    setAttemptedQuestions((prevAttemptedQues) => {
      return [...prevAttemptedQues, currentImage];
    })
    setSelectedImage((prevState) => '');
  }

  if (!selectedImage && !quizCompleted) {
    shuffledQuestionsRef.current = Quizquestions[questionNumber].answers.slice().sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <div className='relative h-5/6'>
        {!quizCompleted &&
          <>
            <Timer questionNumber={questionNumber} handleAnswerSubmission={handleAnswerSubmission} />
            <QuizeQuestion quizQuestion={Quizquestions} shuffledQuestionsRef={shuffledQuestionsRef} questionNumber={questionNumber} selectedImage={selectedImage} handleOnClick={handleOnClick} handleAnswerSubmission={handleAnswerSubmission} />
          </>
        }
        {quizCompleted && <QuizResult quizQuestions={Quizquestions} givenAnswers={attemptedQuestions} handleStartQuiz={props.handleStartQuiz}/>}
      </div>
    </>
  )
}

export default QuizeSection
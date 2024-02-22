import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import classes from './QuizResult.module.css';

function QuizResult(props) {
  const quizQuestions = props.quizQuestions;
  const attemptedQuestions = props.givenAnswers;

  const score = quizQuestions.reduce((totalMarks, currenQuestion, index) => {
    if (currenQuestion.answers[1] == attemptedQuestions[index]) {
      return totalMarks = totalMarks + 1;
    }
    return totalMarks;
  }, 0)

  function handleRetry() {
    props.handleStartQuiz(false);
  }

  return (
    <div className='h-full flex justify-center content-center flex-wrap'>
      <Card sx={{ maxWidth: 275, maxHeight: 180, width: '100%', height: '100%', textAlign: 'center' }}>
        <CardContent sx={{paddingBottom: 0}}>
          <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
            Quiz Result
          </Typography>
          <Typography component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} color="text.secondary">
            <div className={classes['fraction']}>
              <div className='flex flex-col'>
                <span className="fup text-2xl font-bold text-black">{score}</span>
                <span className={classes['bar']}>/</span>
                <span className={classes['fdn']}>{quizQuestions.length}</span>
              </div>
            </div>
          </Typography>
        </CardContent>
        <CardActions sx={{ isplay: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" size="small" onClick={handleRetry}>Retry</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default QuizResult
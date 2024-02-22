import React, { useState } from 'react'
import Header from './components/Header'
import QuizeSection from './components/QuizeSection'
import Modal from './components/Modal'

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  function onSetStartQuiz(payload) {
    setStartQuiz(payload);
  }
  return (
    <div className='h-screen flex flex-col justify-center content-center text-white bg-slate-800 p-10'>
      {!startQuiz && <Modal startQuiz={startQuiz} handleSetStartQuiz={onSetStartQuiz}/>}
      {startQuiz &&
        <>
          <Header />
          <QuizeSection handleStartQuiz={onSetStartQuiz}/>
        </>
      }
    </div>
  )
}

export default App
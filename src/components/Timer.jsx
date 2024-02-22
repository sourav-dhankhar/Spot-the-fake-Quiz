import React, { useState, useEffect } from 'react'

function Timer(props) {

    const [time, setTime] = useState(15);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            props.handleAnswerSubmission();
        }, 15000);

        return () => {
            clearTimeout(timeOut);
        }
    }, [props.questionNumber])


    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime == 1) {
                    return 15;
                }
                return prevTime - 1
            })
        }, 1000);

        return () => {
            clearInterval(interval);
            setTime(15);
        }

    }, [props.questionNumber])

    return (
        <div className='absolute top-0 right-0 flex justify-end mx-10 my-1'>
            <div className="h-14 w-14 border-solid border-4 p-10 rounded-full">
                <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold flex flex-col items-center">
                    <span className="text-center">{time < 10 ? <span>0:0</span> : <span>0:</span> }{time}</span>
                </div>
            </div>
        </div>
    )
}

export default Timer
import Q1correct from './../../public/1-correct.png'
import Q1Incorrect from './../../public/1-fake.png'
import Q2correct from './../../public/2-correct.png'
import Q2Incorrect from './../../public/2-fake.png'
import Q3correct from './../../public/3-correct.png'
import Q3Incorrect from './../../public/3-fake.png'
import Q4correct from './../../public/4-correct.png'
import Q4Incorrect from './../../public/4-fake.png'
import Q5correct from './../../public/5-correct.png'
import Q5Incorrect from './../../public/5-fake.png'
import Q6correct from './../../public/6-correct.png'
import Q6Incorrect from './../../public/6-fake.png'
import Q7correct from './../../public/7-correct.png'
import Q7Incorrect from './../../public/7-fake.png'
import Q8correct from './../../public/8-correct.png'
import Q8Incorrect from './../../public/8-fake.png'
import Q9correct from './../../public/9-correct.png'
import Q9Incorrect from './../../public/9-fake.png'
import Q10correct from './../../public/10-correct.png'
import Q10Incorrect from './../../public/10-fake.png'


export default [
    {
      id: 'q1',
      answers: [
        Q1correct, Q1Incorrect
      ],
    },
    {
      id: 'q2',
      
      answers: [
        Q2correct, Q2Incorrect
      ],
    },
    {
      id: 'q3',
      
      answers: [
        Q3correct, Q3Incorrect
      ],
    },
    {
      id: 'q4',
      answers: [
        Q4correct, Q4Incorrect
      ],
    },
    {
      id: 'q5',
      answers: [
        Q5correct, Q5Incorrect
      ],
    },
    {
      id: 'q6',
      answers: [
        Q6correct, Q6Incorrect
      ],
    },
    {
      id: 'q7',
      answers: [
        Q7correct, Q7Incorrect
      ],
    },
    {
      id: 'q8',
      answers: [
        Q8correct, Q8Incorrect
      ],
    },{
      id: 'q9',
      answers: [
        Q9correct, Q9Incorrect
      ],
    },{
      id: 'q10',
      answers: [
        Q10correct, Q10Incorrect
      ],
    },
  ].sort(() => Math.random() - 0.5);
import React from 'react'
import * as C from './styles'
const Question = () => {
  return (
    
    <C.Question>
    <C.QuestionArea>
      <h2>Question</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh.</p>
      <button>
        Anwer your question
      </button>
    </C.QuestionArea>
    <C.DontStop>
      <h2>You must never stop</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh.</p>
    </C.DontStop>
  </C.Question>
  )
}

export default Question
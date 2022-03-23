import React from 'react'
import * as C from './styles'
import imgMessage from '../../../../images/messages.png'
import Image from '../../../../Helpers/Image/Image'
const InicialMessage = () => {
  return (
    <C.InicialMessage>
      <C.MessageOfDay>
        <h2>Leave your message of the day</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh.</p>
      </C.MessageOfDay>
      <C.Message>
        <div>
          <Image alt="" src={imgMessage}/>
        </div>
        <button >Let's your message</button>
      </C.Message>
    </C.InicialMessage>
  )
}

export default InicialMessage
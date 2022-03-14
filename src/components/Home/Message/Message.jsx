import React from 'react'
import AreaMessage from './AreaMessage/AreaMessage'
import InicialMessage from './InicialMessage/InicialMessage'
import * as C from './styles'
const Message = () => {

  const [messageBoxActive,setMessageBoxActive] = React.useState(false);


  return (
    <C.Message>
      <InicialMessage />
    </C.Message>
  )
}

export default Message
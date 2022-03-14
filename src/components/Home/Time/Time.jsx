import React from 'react'
import imgTime from '../../../images/have-time.jpg';
import * as C from './styles'
const Time = () => {
  return (
    <C.Time>
      <div>
        <img src={imgTime} alt="" />
      </div>
      <C.ContainerContent>
        <h2>Have your time</h2>
        <C.PhaseTime>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh.</C.PhaseTime>
        <C.Phase2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh.</C.Phase2>
        <button>Continue reading</button>
      </C.ContainerContent>
    </C.Time>
  )
}
export default Time
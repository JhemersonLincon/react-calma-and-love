import React from 'react';
import * as C from './styles';

import imgSmile from '../../../images/smile.jpg';
import imgHope from '../../../images/hope.jpg';
import imgTogether from '../../../images/together.jpg';
import imgDontGiveUp from '../../../images/dont give up.jpg';
const Emotions = () => {
  return (
    <C.Emotions>
      <C.Emotion>
        <C.Circle>
          <div>
            <span></span>
          </div>
        </C.Circle>
        <C.Phase>Don't Give Up</C.Phase>
        <img src={imgSmile} alt="" />
      </C.Emotion>

      <C.Emotion>
        <C.Circle>
          <div>
            <span></span>
          </div>
        </C.Circle>
        <C.Phase>Don't Give Up</C.Phase>

        <img src={imgHope} alt="" />
      </C.Emotion>

      <C.Emotion>
        <C.Circle>
          <div>
            <span></span>
          </div>
        </C.Circle>
        <C.Phase>Don't Give Up</C.Phase>
        <img src={imgTogether} alt="" />
      </C.Emotion>

      <C.Emotion>
        <C.Circle>
          <div>
            <span></span>
          </div>
        </C.Circle>
        <C.Phase>Don't Give Up</C.Phase>
        <img src={imgDontGiveUp} alt="" />
      </C.Emotion>

    </C.Emotions>
  )
}

export default Emotions
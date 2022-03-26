import React from 'react';
import * as C from './styles';

import imgSmile from '../../../images/smile.jpg';
import imgHope from '../../../images/hope.jpg';
import imgTogether from '../../../images/together.jpg';
import imgDontGiveUp from '../../../images/dont give up.jpg';
import Image from '../../../Helpers/Image/Image';
const Emotions = () => {
  return (
    <C.Emotions>
      <C.Emotion>
        <C.Circle>
          <div>
            <span></span>
          </div>
        </C.Circle>
        <C.Phase>Smile</C.Phase>
        <Image size="45.4rem" src={imgSmile} alt="Grand pintura de uma bola amarela no chão sorrindo, com alguem olhando de cima" />
      </C.Emotion>

      <C.Emotion>
        <C.Circle>
          <div>
            <span></span>
          </div>
        </C.Circle>
        <C.Phase>Hope</C.Phase>
        <Image size="45.4rem"  src={imgHope} alt="Desmonstração de esperança, uma pedra segurado por uma pessoa escrito esperança" />
      </C.Emotion>

      <C.Emotion>
        <C.Circle>
          <div>
            <span></span>
          </div>
        </C.Circle>
        <C.Phase>together</C.Phase>
        <Image size="45.4rem"  src={imgTogether} alt="Desmontração em imagem de todos juntos, duas pessoas juntas em um morro" />
      </C.Emotion>

      <C.Emotion>
        <C.Circle>
          <div>
            <span></span>
          </div>
        </C.Circle>
        <C.Phase>Don't Give Up</C.Phase>
        <Image size="45.4rem"  src={imgDontGiveUp} alt="Desmontração de não desistenca. Uma pessoa sozinha, apreciando as estrelas" />
      </C.Emotion>

    </C.Emotions>
  )
}

export default Emotions

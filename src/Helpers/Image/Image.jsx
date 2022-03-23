import React from 'react';
import * as C from './styles';

const Image = ({alt, ...props}) => {
  const [skeleton, setSkeleton] = React.useState(true)
  function handleLoad({target}) {
    target.style.opacity = 1
  }
  return (
    <C.Wrapper >
      { skeleton && <C.Skeleton></C.Skeleton> }
      <C.Image  onLoad={handleLoad} alt={alt} {...props}/>
    </C.Wrapper>
  )
}

export default  Image
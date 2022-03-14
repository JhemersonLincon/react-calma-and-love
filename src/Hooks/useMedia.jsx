import React from 'react'

const useMedia = (size) => {

  const [media, setMedia] = React.useState(null);
  
  React.useEffect(() => {
    function changeMatch(){ 
      const { matches } = window.matchMedia(size);
      setMedia(matches)
    }
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    }
  },[media]);
  return {
    media
  }
}

export default useMedia
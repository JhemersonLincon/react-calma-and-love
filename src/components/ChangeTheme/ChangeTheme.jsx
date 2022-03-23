import {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import * as C from './styles'
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
const ChangeTheme = ({toggleTheme}) => {
  const {title} = useContext(ThemeContext)
  return (
    <C.ContainerTheme>
      <C.BtnTheme onClick={() => toggleTheme()}>
        {title === 'light'? <LightModeIcon sx={{fontSize:25}} /> 
        : 
        <ModeNightIcon sx={{fontSize:25}}/>}
      </C.BtnTheme>
    </C.ContainerTheme>
  )
}

export default ChangeTheme
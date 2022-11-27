import React from 'react'
import { AboutContianerStyle } from '../../css/AboutStyle'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';

const About = () => {
  return (
    <AboutContianerStyle>
        <div>
    <h1>About</h1>
    <h2>Who we are?</h2><PsychologyAltIcon/>
    <textanswers>We are students our master calls us "code ninjas"</textanswers>
    <h2>What did we do in the project?</h2><DoNotTouchIcon/>
    <textanswers>Many hits to the keyboard, and punches to the screen, and we broke the mouse...</textanswers>
    <h2>To finish the project, I want to say</h2>
    <textanswers>Ninjas don't go out in one day, a long period of training....</textanswers>
    </div>
    </AboutContianerStyle>
  )
}

export default About
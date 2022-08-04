
import React from 'react'
import { DescriptionStyle } from './styles/Description.styled'
import ClientDatabiz from '../../images/client-databiz.svg'
import ClientAudiophile from '../../images/client-audiophile.svg'
import ClientMeet from '../../images/client-meet.svg'
import ClientMaker from '../../images/client-maker.svg'
const Description = () => {
  return (
    <DescriptionStyle>
        <h1>Make <span>remote work</span></h1>
        <p>Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar.</p>
        <button>Learn more</button>
        <div className='clients-wrapper'>
            <img src={ClientDatabiz} alt="Databiz" />
            <img src={ClientAudiophile} alt="Audiophile" />
            <img src={ClientMeet} alt="Meet" />
            <img src={ClientMaker} alt="Maker" />
        </div>
    </DescriptionStyle>
  )
}

export default Description


import React from 'react'
import { HeroStyle } from './styles/Hero.styled';
import heroMobile from '../../images/image-hero-mobile.png'; 
import heroDesktop from '../../images/image-hero-desktop.png'; 

const Hero = () => {
  return (
    <HeroStyle>
      <img className='hero-mobile' src={heroMobile} alt='Hero mobile' />
      <img className='hero-desktop' src={heroDesktop} alt='Hero mobile' />
    </HeroStyle>
  )
}

export default Hero
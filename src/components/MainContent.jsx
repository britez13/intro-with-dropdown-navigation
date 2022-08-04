
import React from 'react'
import Description from './Description'
import Hero from './Hero'
import { MainContentStyle } from './styles/MainContent.styled'

const MainContent = () => {
  return (
    <MainContentStyle>
        <Hero />
        <Description />
    </MainContentStyle>
  )
}

export default MainContent


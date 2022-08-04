
import { useState } from 'react';
import {ThemeProvider} from 'styled-components';
import HeaderMenu from './components/HeaderMenu';
import MainContent from './components/MainContent';
import { GlobalStyle } from './components/styles/Global.styled';

const theme = {
  colors: {
    almostWhite: 'hsl(0, 0%, 98%)',
    mediumGray: 'hsl(0, 0%, 41%)',
    almostBlack: 'hsl(0, 0%, 8%)'
  }
}





function App() {
  const [isShowNav, setIsShowNav] = useState(false);
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyle />
    <HeaderMenu isShowNav={isShowNav} setIsShowNav={setIsShowNav} />
    <MainContent />
    </>
    </ThemeProvider>
  )
}

export default App



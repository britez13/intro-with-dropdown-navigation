
import React from 'react';
import Logo from '../../images/logo.svg'
import NavBar from './NavBar';
import { HeaderMenuStyle } from './styles/HeaderMenu.styled';
import IconMenu from '../../images/icon-menu.svg';
import CloseMenu from '../../images/icon-close-menu.svg';

const HeaderMenu = ({isShowNav, setIsShowNav}) => {

  const handleClick = () => {
    setIsShowNav(!isShowNav)
  }

  return (
    <HeaderMenuStyle isShowNav={isShowNav} >
        <img className='logo-image' src={Logo} alt="Snap logo" />
        <NavBar isShowNav={isShowNav} />
        <img className='burger-icon' src={isShowNav ? CloseMenu : IconMenu} alt='Burger Icon' onClick={handleClick} />
    </HeaderMenuStyle>
  )
}

export default HeaderMenu;
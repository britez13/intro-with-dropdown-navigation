import React from 'react'
import { NavBarStyle } from './styles/NavBar.styled';
import TodoList from '../../images/icon-todo.svg';
import Calendar from '../../images/icon-calendar.svg';
import Remainders from '../../images/icon-reminders.svg';
import Planning from '../../images/icon-planning.svg';

const NavBar = ({isShowNav}) => {
  
  const handleClick = (e) => {
    e.preventDefault();
    e.target.parentNode.classList.toggle('active');
  }
  
  
  return (
    <NavBarStyle className={isShowNav && "show-nav"}>
      <ul className='nav-1'>
        <li className='wrapper' onClick={handleClick} >
          <div className='label'>Features</div>
          <div className='accordion1'>
            <div className="accordion-item">
              <img src={TodoList} alt="Todo icon" />
              <p>Todo List</p>
            </div>
            <div className="accordion-item">
              <img src={Calendar} alt="Calendar icon" />
              <p>Calendar</p>
            </div>
            <div className="accordion-item">
              <img src={Remainders} alt="Remainders icon" />
              <p>Remainders</p>
            </div>
            <div className="accordion-item">
              <img src={Planning} alt="Planning icon" />
              <p>Planning</p>
            </div>
          </div>
        </li>
        <li className='wrapper' onClick={handleClick}>
          <div className='label'>Company</div>
          <div className='accordion2'>
            <div className="accordion-item">
              <p>History</p>
            </div>
            <div className="accordion-item">
              <p>Our Team</p>
            </div>
            <div className="accordion-item">
              <p>Blog</p>
            </div> 
          </div>
        </li>
        <li>
          <button>Careers</button>
        </li>
        <li>
          <button>About</button>
        </li>
      </ul>

      <ul className='nav-2'>
        <li>
          <button>Login</button>
        </li>
        <li>
          <button>Register</button>
        </li>
      </ul>    
    </NavBarStyle>
  )
}

export default NavBar


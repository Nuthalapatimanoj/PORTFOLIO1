import "./CSS/Nav.css"
import { Link,Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='header-left'>
          <img src="./Photo.jpg" alt="my_pic" height={30} width={30} />
          <h3>MANOJ</h3>
        </div>
        <div className='header-right'>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button onClick={() => window.location="#contact"}>Connect</button>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default Header
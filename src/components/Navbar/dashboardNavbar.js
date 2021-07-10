import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import './navbarbutton.css';
export { default as Footer } from '.././footer.js';


function DashboardNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const history = useHistory();

        const goToSignInPage = () => {
            history.push('/sign-in');
          }

  return (
    <>
      <nav className='navbar'>
      
          <img src={require('../../images/logo.png')} alt='logo' />
          <font color="#fff">Give A Ways</font>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Dashboard/home' className='nav-links' onClick={closeMobileMenu}>
              Dashboard
            </Link>
          </li>
        </ul>
        <button 
            className="glow-on-hover2" 
            onClick={goToSignInPage}
            >
                <font color="gold">
                    Logout
                </font>
            </button>
      </nav>
    </>
  );
}

export default DashboardNavbar;

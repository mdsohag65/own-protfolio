import React from 'react';
import './Header.css';
import bg from '../../images/background.png';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <section style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} id='header'>
            <div className="container">
                <nav>
                    <img src={logo} alt="" className='logo' />
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="header-text">
                    <p><span>React</span> FrontEnd Developer</p>
                    <h1>Hi, I'm <span>Kevin</span><br /> XI From Australia</h1>
                </div>
            </div>

        </section>
    );
};

export default Header;
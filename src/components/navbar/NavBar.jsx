// style
import Logo from '../logo/Logo';
import './NavBar.css';
// react scroll
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// react icon
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='navbar'>
            <div className='container-navbar'>
                <Logo />
                <nav className='nav-web'>
                    <ul>
                        <li className='nav-item'>
                            <ScrollLink
                                activeClass='active'
                                to='home'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='link-menu'
                            >
                                home
                            </ScrollLink>
                        </li>
                        <li className='nav-item'>
                            <ScrollLink
                                activeClass='active'
                                to='about'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='link-menu'
                            >
                                sobre mim
                            </ScrollLink>
                        </li>
                        <li className='nav-item'>
                            <ScrollLink
                                activeClass='active'
                                to='stack'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='link-menu'
                            >
                                tech stack
                            </ScrollLink>
                        </li>
                        <li className='nav-item'>
                            <ScrollLink
                                activeClass='active'
                                to='project'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='link-menu'
                            >
                                projetos
                            </ScrollLink>
                        </li>
                        <li className='nav-item'>
                            <ScrollLink
                                activeClass='active'
                                to='contact'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='link-menu'
                            >
                                contato
                            </ScrollLink>
                        </li>
                    </ul>
                </nav>

                <FiMenu className='burger-menu' onClick={toggleMenu} />

            </div>
            <nav className={`nav-mobile ${isOpen ? 'open' : ''}`} >
                <ul>
                    <li className='nav-item'>
                        <ScrollLink
                            activeClass='active'
                            to='home'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='link-menu'
                        >
                            home
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <ScrollLink
                            activeClass='active'
                            to='aboutme'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='link-menu'
                        >
                            sobre mim
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <ScrollLink
                            activeClass='active'
                            to='stack'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='link-menu'
                        >
                            tech stack
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <ScrollLink
                            activeClass='active'
                            to='project'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='link-menu'
                        >
                            projetos
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <ScrollLink
                            activeClass='active'
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='link-menu'
                        >
                            contato
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
        </div >
    );
};

export default NavBar;
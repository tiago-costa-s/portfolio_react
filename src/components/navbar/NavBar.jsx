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
            <div className='container_navbar'>
                <Logo />
                <nav className='nav_web'>
                    <ul>
                        <li className='nav_item'>
                            <ScrollLink
                                activeClass='active'
                                to='home'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='link_menu'
                            >
                                home
                            </ScrollLink>
                        </li>
                        <li className='nav_item'>
                            <ScrollLink
                                activeClass='active'
                                to='about'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='link_menu'
                            >
                                sobre mim
                            </ScrollLink>
                        </li>
                        <li className='nav_item'>
                            <ScrollLink
                                activeClass='active'
                                to='my_stacks'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='link_menu'
                            >
                                Minhas stack's
                            </ScrollLink>
                        </li>
                        <li className='nav_item'>
                            <ScrollLink
                                activeClass='active'
                                to='my_projects'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='link_menu'
                            >
                                projetos
                            </ScrollLink>
                        </li>
                        <li className='nav_item'>
                            <ScrollLink
                                activeClass='active'
                                to='contacts'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='link_menu'
                            >
                                contato
                            </ScrollLink>
                        </li>
                    </ul>
                </nav>

                <FiMenu className='burger_menu' onClick={toggleMenu} />

            </div>
            <nav className={`nav_mobile ${isOpen ? 'open' : ''}`} >
                <ul>
                    <li className='nav_item'>
                        <ScrollLink
                            activeClass='active'
                            to='home'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='link_menu'
                        >
                            home
                        </ScrollLink>
                    </li>
                    <li className='nav_item'>
                        <ScrollLink
                            activeClass='active'
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='link_menu'
                        >
                            sobre mim
                        </ScrollLink>
                    </li>
                    <li className='nav_item'>
                        <ScrollLink
                            activeClass='active'
                            to='my_stacks'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='link_menu'
                        >
                            tech stack
                        </ScrollLink>
                    </li>
                    <li className='nav_item'>
                        <ScrollLink
                            activeClass='active'
                            to='my_projects'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='link_menu'
                        >
                            projetos
                        </ScrollLink>
                    </li>
                    <li className='nav_item'>
                        <ScrollLink
                            activeClass='active'
                            to='contacts'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='link_menu'
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
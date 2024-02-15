// style
import Logo from '../logo/Logo'
import './NavBar.css'
// 
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const NavBar = () => {

    return (
        <div className='navbar'>
            <div className="container-navbar">
                <Logo />
                <nav className='nav-web'>
                    <ul>
                        <li className='nav-item'>
                            <ScrollLink
                                activeClass="active"
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
                                activeClass="active"
                                to='aboutme'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='link-menu'
                            >
                                sobre min
                            </ScrollLink>
                        </li>
                        <li className='nav-item'>
                            <ScrollLink
                                activeClass="active"
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
                                activeClass="active"
                                to='project'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='link-menu'
                            >
                                projeto
                            </ScrollLink>
                        </li>
                        <li className='nav-item'>
                            <ScrollLink
                                activeClass="active"
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
            </div>
            <nav className='nav-mobile'>
                <ul>
                    <li className='nav-item'>
                        <ScrollLink
                            activeClass="active"
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
                            activeClass="active"
                            to='aboutme'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='link-menu'
                        >
                            sobre min
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <ScrollLink
                            activeClass="active"
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
                            activeClass="active"
                            to='project'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='link-menu'
                        >
                            projeto
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <ScrollLink
                            activeClass="active"
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
        </div>
    )

}

export default NavBar
// style
import Logo from '../logo/Logo'
import './NavBar.css'


// 
import { Link as ScrollLink } from 'react-scroll'

const NavBar = () => {

    return (
        <nav className='navbar'>

            <Logo />

            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <ScrollLink to='/home'>Home</ScrollLink>
                </li>
                <li className='nav-item'>
                    <ScrollLink to='/aboutme'>sobre min</ScrollLink>
                </li>
                <li className='nav-item'>
                    <ScrollLink to='/stack'>tech stack</ScrollLink>
                </li>
                <li className='nav-item'>
                    <ScrollLink to='/project'>projeto</ScrollLink>
                </li>
                <li className='nav-item'>
                    <ScrollLink to='/contact'>contato</ScrollLink>
                </li>
            </ul>
        </nav>
    )

}

export default NavBar
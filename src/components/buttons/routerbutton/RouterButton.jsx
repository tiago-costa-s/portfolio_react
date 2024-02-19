import './RouterButton.css';
import { Link } from 'react-router-dom';

const RouterButton = ({ to, icon, text }) => {

    return (
        <Link className='router-button' to={to}>
            <div className='icon'>{icon}</div>
            {text}
        </Link>
    );

};

export default RouterButton;
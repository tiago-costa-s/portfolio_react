import './Home.css';
import About from './about/About';
import Presentation from './presentation/Presentation';

const Home = () => {

    return (
        <div className='home'>
            <Presentation />
            <About />
        </div>
    )

};

export default Home;
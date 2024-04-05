import './Home.css';
import DynamicDataLoader from './dynamicDataLoader/DynamicDataLoader';
import About from './about/About';
import Presentation from './presentation/Presentation';
import MyStacks from './mystacks/MyStacks';
import MyProjects from './myprojects/MyProjects';

const Home = () => {

    return (
        <div className='home'>
            <Presentation />
            
            <About />

            <DynamicDataLoader
                title='Formação Academica'
                newUrl='http://localhost:3000/academic'
            />

            <DynamicDataLoader
                title='Experiencia Profissional'
                newUrl='http://localhost:3000/professional_experience'
            />

            <MyStacks />

            <MyProjects />
        </div>
    )

};

export default Home;
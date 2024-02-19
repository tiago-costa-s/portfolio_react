// react-icon
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// components
import RouterButton from '../../buttons/routerbutton/RouterButton';
import './Presentation.css'

const Presentation = () => {

    return (
        <div className='presentation'>
            <div className='container-presentation'>
                <div className='my-presentation'>
                    <h1 className='title'>
                        <span>Olá,</span>
                        <span>Meu nome e</span>
                        <span id='name'>Tiago Costa</span>
                        <span>Eu sou</span>
                        <span>Desenvolvedor</span>
                    </h1>
                </div>
                <div className="social-media">
                    <RouterButton text='Git Hub' icon={<FaGithub />} />
                    <RouterButton text='Linkedin' icon={<FaLinkedinIn />} />
                </div>
            </div>
            <img src="src/assets/perfil2.png" alt='tiago' />
        </div>
    );

};

export default Presentation;
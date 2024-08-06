// react-icon
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
// components
import RouterButton from '../../buttons/routerbutton/RouterButton';
import styles from './Presentation.module.css';

const Presentation = () => {

    return (
        <div className={styles.presentation}>
            <div className={styles.container_presentation}>
                <div className={styles.my_presentation}>
                    <h1 className={styles.title}>
                        <span>Olá,</span>
                        <span>Meu nome e</span>
                        <span className={styles.name}>Tiago Costa</span>
                        <span>Eu sou</span>
                        <span>Desenvolvedor</span>
                    </h1>
                </div>
                <div className={styles.social_media}>
                    <RouterButton
                        to={'https://github.com/tiago-costa-s'}
                        text='Git Hub'
                        icon={<FaGithub />}
                    />

                    <RouterButton
                        to={'https://www.linkedin.com/in/tiago-costa-s/'}
                        text='Linkedin'
                        icon={<FaLinkedinIn />}
                    />
                </div>
            </div>
            <img className={styles.profile_img} src='src/assets/perfil2.png' alt='tiago' />
        </div>
    );

};

export default Presentation;
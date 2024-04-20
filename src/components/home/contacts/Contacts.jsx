import styles from './Contacts.module.css';
// icons
import { RiMailFill } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contacts = () => {

    return (
        <div className='contacts'>
            <h2 className='title'>Contatos</h2>
            <p className='sub_title'>Entre em contato comigo</p>
            <div className={styles.contacts_container}>
                <div className={styles.container_icon}>
                    <Link
                        to='https://www.linkedin.com/in/tiago-costa-s/'
                        target='_blank'
                        className={styles.links}
                    >
                        <FaLinkedin className={styles.icons} />
                        LinkedIn
                    </Link>

                    <Link
                        to='https://api.whatsapp.com/send/?phone=5531991932470&text=Ol%C3%A1+Tiago+!+Eu+gostaria+de+conversar+com+voc%C3%AA.&type=phone_number&app_absent=0'
                        target='_blank'
                        className={styles.links}
                    >
                        <FaWhatsappSquare className={styles.icons} />
                        Whatsapp
                    </Link>

                    <Link
                        to='mailto:tiago-costa-s@outlook.com'
                        target='_blank'
                        className={styles.links}
                    >
                        <RiMailFill className={styles.icons} />
                        Mail
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default Contacts;
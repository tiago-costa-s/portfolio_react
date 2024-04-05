import { GrAttachment } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";


import styles from './MyProjects.module.css';
import { useFetch } from "../../../hooks/useFetch";

const MyProjects = () => {
    const url = 'http://localhost:3000/projects';
    const { data } = useFetch(url);

    return (

        <div className={styles.myprojects}>

            <div className="header-components">
                <h2 className='title'>Projetos</h2>
                <p className='sub-title'>Coisas que construí até agora</p>
            </div>

            <div className={styles.listProjets}>
                {data && data.map((project) => (

                    < div key={project.id} className={styles.project} >
                        <div className={styles.containerProject}>
                            <p className={styles.name}>{project.name}</p>

                            <div className={styles.descripiton}>
                                <p>{project.description}</p>
                            </div>

                            <p className={styles.stack}>
                                Tech stack:
                                <span> HTML, CSS, Java Script</span>
                            </p>

                            <div className={styles.linksProjects}>
                                <a className={styles.linkProject} href="">
                                    <GrAttachment />
                                    Link Preview
                                </a>
                                <a className={styles.linkProject} href="">
                                    <FaGithub />
                                    Link Preview
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div >
        </div >
    );

};
export default MyProjects;
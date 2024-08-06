import { GrAttachment } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

import styles from './MyProjects.module.css';

const projects = [
    {
        id: 1,
        name: "Paper Notes",
        stacks: "HTML5, CSS, Java Script",
        image: "https://i.postimg.cc/gjw1S80Y/2-1.png",
        description: "O Paper Notes: Um aplicativo web para criar notas de texto de forma simples e moderna!",
        linkPreview: "https://paper-notes.vercel.app/",
        linkRepository: "https://github.com/tiago-costa-s/paper-notes"
    },
    {
        id: 2,
        name: "Todo Paper",
        stacks: "HTML5, CSS, Java Script",
        image: "https://i.postimg.cc/6qQYNmQS/todolist.png",
        description: "O Paper Notes: Um aplicativo web para criar notas de texto de forma simples e moderna!",
        linkPreview: "https://todo-paper.vercel.app/",
        linkRepository: "https://github.com/Tiago-Costa-s/todo_paper"
    },
    {
        id: 3,
        name: "KM360",
        stacks: "HTML5, CSS, Java Script",
        image: "https://i.postimg.cc/dtSDxtpb/Desktop.png",
        description: "O To do Paper: Um aplicativo web para criar notas de texto de forma simples e moderna!",
        linkPreview: "https://km360.netlify.app/",
        linkRepository: "https://github.com/Tiago-Costa-s/km360"
    },
    {
        id: 4,
        name: "Calculadora IMC ",
        stacks: "HTML5, CSS, Java Script",
        image: "https://i.postimg.cc/G3PT1M7G/calc-imc-advanced-0.png",
        description: "A calculadora: E um programa responsavel por calcular o índice de massa corporal(IMC) de uma pessoa.",
        linkPreview: "https://calculadora-imc-advanced.vercel.app/",
        linkRepository: "https://github.com/tiago-costa-s/calculadora_imc_advanced"
    },
    {
        id: 5,
        name: "Law Office ",
        stacks: "HTML5, CSS, Java Script",
        image: "https://i.postimg.cc/XvJhwLdn/escritorio-advocacia-netlify-app.png",
        description: "O Law Office: E uma langing page de um escritorio de advocacia",
        linkPreview: "https://escritorio-advocacia.netlify.app/",
        linkRepository: "https://github.com/tiago-costa-s/Escritorio-Advocacia"
    },

    {
        id: 6,
        name: "Todo React ",
        stacks: "React, HTML5, CSS, Java Script",
        image: "https://i.postimg.cc/XvJhwLdn/escritorio-advocacia-netlify-app.png",
        description: "Esse e um to do list feito em reactjs",
        linkPreview: "https://escritorio-advocacia.netlify.app/",
        linkRepository: "https://github.com/tiago-costa-s/Escritorio-Advocacia"
    }
]

const MyProjects = () => {

    return (
        <div className='my_projects'>
            <div className='header_components'>
                <h2 className='title'>Projetos</h2>
                <p className='sub_title'>Coisas que construí até agora</p>
            </div>

            <div className={styles.list_projets}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.project} style={{ backgroundImage: `url(${project.image})` }}>
                        <div className={styles.container_project} >
                            <p className={styles.name}>{project.name}</p>
                            <div className={styles.descripiton}>
                                <p>{project.description}</p>
                            </div>
                            <p className={styles.stack}>
                                Tech stack:
                                <span> HTML, CSS, Java Script</span>
                            </p>
                            <div className={styles.links_projects}>
                                <a
                                    className={styles.link_project}
                                    href={project.linkPreview}
                                    rel='noopener'
                                    target='_blank'
                                >
                                    <GrAttachment />
                                    Link Preview
                                </a>
                                
                                <a
                                    className={styles.link_project}
                                    href={project.linkRepository}
                                    rel='noopener'
                                    target='_blank'
                                >
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
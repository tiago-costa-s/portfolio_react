import styles from './MyStacks.module.css';

import { useFetch } from './../../../hooks/useFetch';

const MyStacks = () => {

    const url = 'http://localhost:3000/stacks';

    const { data } = useFetch(url);

    return (
        <div className={styles.myStacks}>
            <div className='header-components'>
                <h3 className='title'>Minha Stack de Tecnologia</h3>

                <p className='sub-title'>Tecnologias com as quais tenho trabalhado recentemente</p>
            </div>
            <div className={styles.stacksContainer}>
                {data && data.map((stack) => (
                    <div key={stack.id}>
                        <img src={stack.iconStack} alt={stack.name} />
                    </div>
                ))}
            </div>
        </div>
    );

};

export default MyStacks;
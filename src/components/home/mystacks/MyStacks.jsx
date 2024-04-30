import styles from './MyStacks.module.css';

import { useFetch } from './../../../hooks/useFetch';

const MyStacks = () => {

    const url = 'http://localhost:3000/stacks';

    const { data } = useFetch(url);

    return (
        <div className='my_stacks'>
            <div className='header_components'>
                <h3 className='title'>Minhas Stack de Tecnologia</h3>

                <p className='sub_title'>Tecnologias com as quais tenho trabalhado recentemente</p>
            </div>
            <div className={styles.stacks_container}>
                {data && data.map((stack) => (
                    <div key={stack.id} className={styles.icon_stack}>
                        <img src={stack.icon_stack} alt={stack.name} />
                    </div>
                ))}
            </div>
        </div>
    );

};

export default MyStacks;
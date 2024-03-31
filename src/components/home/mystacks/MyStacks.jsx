import styles from './MyStacks.module.css';

import { useFetch } from './../../../hooks/useFatch';

const MyStacks = () => {

    const url = 'http://localhost:3000/stacks';

    const { data } = useFetch(url);

    return (
        <div className={styles.myStacks}>
            <div className={styles.container}>
                <h3 className={styles.title}>Minha Stack de Tecnologia</h3>

                <p className={styles.subTitle}>Tecnologias com as quais tenho trabalhado recentemente</p>

                <div className={styles.stacksContainer}>
                    {data && data.map((stack) => (
                        <div key={stack.id}>
                            <img src={stack.iconStack} alt={stack.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default MyStacks;
import styles from './MyStacks.module.css';

const stacks = [
    {
        id: 1,
        name: "reactjs",
        icon_stack: "/src/assets/icons/stackPng/reactjs.png"
    },
    {
        id: 2,
        name: "javascript",
        icon_stack: "/src/assets/icons/stackPng/javascript.png"
    },
    {
        id: 3,
        name: "html",
        icon_stack: "/src/assets/icons/stackPng/html.png"
    },
    {
        id: 4,
        name: "css",
        icon_stack: "/src/assets/icons/stackPng/css.png"
    },
    {
        id: 5,
        name: "bootstrap",
        icon_stack: "/src/assets/icons/stackPng/bootstrap.png"
    },
    {
        id: 6,
        name: "java",
        icon_stack: "/src/assets/icons/stackPng/java.png"
    },
    {
        id: 7,
        name: "git",
        icon_stack: "/src/assets/icons/stackPng/git.png"
    },
    {
        id: 8,
        name: "github",
        icon_stack: "/src/assets/icons/stackPng/github.png"
    },
    {
        id: 9,
        name: "vscode",
        icon_stack: "/src/assets/icons/stackPng/vscode.png"
    },
    {
        id: 10,
        name: "eclipse",
        icon_stack: "/src/assets/icons/stackPng/eclipse_ide.png"
    },
    {
        id: 11,
        name: "intellij",
        icon_stack: "/src/assets/icons/stackPng/intellij_ide.png"
    }

]

const MyStacks = () => {

    return (
        <div className='my_stacks'>
            <div className='header_components'>
                <h3 className='title'>Minhas Stack de Tecnologia</h3>

                <p className='sub_title'>Tecnologias com as quais tenho trabalhado recentemente</p>
            </div>
            <div className={styles.stacks_container}>
                {/* {data && data.map((stack) => (
                    <div key={stack.id} className={styles.icon_stack}>
                        <img src={stack.icon_stack} alt={stack.name} />
                    </div>
                ))} */}

                {stacks.map((stack) => (
                    <div key={stack.id}>
                        <img src={stack.icon_stack} alt={stack.name} />
                    </div>
                ))}

            </div>
        </div>
    );

};

export default MyStacks;
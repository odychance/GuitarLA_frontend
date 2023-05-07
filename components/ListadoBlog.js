import Entrada from '../components/Entrada'
import styles from '../styles/Blog.module.css'

const ListadoBlog = ({blogs}) => {
  return (
    <>
        <h2 className='heading'>Blog</h2>
        <div className={styles.blog}>
            {blogs.map(entrada => (
                <Entrada
                    key={entrada.id}
                    entrada={entrada}
                />
            ))}
        </div>
    </>
    )
}

export default ListadoBlog
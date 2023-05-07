import styles from '../styles/curso.module.css'
import Link from 'next/link'

const Curso = ({curso}) => {
    const {contenido, titulo, imagen} = curso

    return (
        <section>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.texto}>{contenido}</p>

                    <Link href={`/nuestros-cursos`}>
                        <a className={styles.enlace} >Ver mas...</a>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                section {
                    padding: 8rem 0;
                    margin-top: 10rem;
                    margin-bottom: 2rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb( 0 0 0 / .7 )), url(${imagen?.url});
                    background-size: cover;
                    background-position: 50%;
                }            
            `}</style>
        </section>
    )
}

export default Curso
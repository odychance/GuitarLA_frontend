import Image from 'next/image'
import styles from '../styles/NuestrosCursos.module.css'
import {formatearFecha} from '../helpers'
import Link from 'next/link'

const NuestrosCursos = ({curso}) => {

    const {nombre_cursos, resumen_curso, imagen_curso, published_at, url_curso} = curso

    return (

        <section>
            <div className={styles.contenedor}>
                <h2 className={`heading`}>{nombre_cursos}</h2>
                <p className={styles.resumen}>{resumen_curso}</p>
                <Link href={`/nuestros-cursos/${url_curso}`}>
                    <a className={styles.botonCurso}>Ver Curso...</a>
                </Link>
                <p className={styles.fecha}> {formatearFecha(published_at)}</p>
            </div>
            <style jsx>{`
                section {
                    padding: 8rem 0;
                    margin-top: 10rem;
                    margin-bottom: 2rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / 7)), url(${imagen_curso?.url});
                    background-size: cover;
                    background-position: 50%;
                }    
            `}</style>

        </section>

    )

}

export default NuestrosCursos
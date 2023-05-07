import Layout from '../../components/Layout'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import nuestros_cursos from '../nuestros-cursos'
import {formatearFecha} from '../../helpers'
import CustomImage from "../../components/Image";
import styles from '../../styles/urlCursos.module.css'

const CursoAct = () => {

    const {query: {url}} = useRouter()

    const [cursoActInf, setCursoActInf] = useState(false)

    useEffect(() => {
        const consultarAPI =  async () => {
            const urlCursoAct = `${process.env.API_URL}/nuestros-cursos?url_curso=${url}`
            const respuesta = await fetch(urlCursoAct)
            const resUrlCursoAct = await respuesta.json()
            setCursoActInf(resUrlCursoAct[0])

        }
        consultarAPI()

    }, [])
    console.log(cursoActInf)
    const {nombre_cursos, descripcion_curso, imagen_curso, published_at} = cursoActInf

  return (
    <Layout>
        <div className='contenedor'>
            <h1 className='heading'>{nombre_cursos}</h1>
            {imagen_curso && <CustomImage layout='responsive' width={2000} height={1000} src={imagen_curso.url} alt={`Imagen Curso ${nombre_cursos}`}/>}
            <p className={styles.contenido}>{descripcion_curso}</p>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        </div>
    </Layout>
  )
}

export default CursoAct
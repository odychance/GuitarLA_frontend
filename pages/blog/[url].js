import { useRouter} from 'next/router'
import { useEffect, useState} from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'
import NoEncontrado from '../404'

const EntradaBlog = () => {

  
  const { query: { url } } = useRouter()
  
  const [blog, setBlog] = useState(false);

  useEffect( () => {
    const consultarAPI = async () => {
      const urlBlog = `http://localhost:1337/blogs?url=${url}`
      const respuesta = await fetch(urlBlog)
      const resultado = await respuesta.json()
      setBlog(resultado[0])
    }
    consultarAPI()
  }, []);

  // const { imagen, titulo, contenido, published_at } = blog

  return (

    <Layout 
    pagina={blog?.titulo}
    withOutLayout={!blog}>
      {blog ? (
        <main className="contenedor">
        <h1 className='heading'>{blog.titulo}</h1>
        <article className='styles.entrada'>
            {blog.imagen && (
              <Image layout='responsive' width={800} height={600} src={blog.imagen.url} alt={`imagen entrada ${blog.titulo}`} />
            )}
            <div className={styles.contenido}>
                <p className={styles.fecha}>{formatearFecha(blog.published_at)}</p>
                <p className={styles.texto}>{blog.contenido}</p>
            </div>
        </article>
      </main>
      ) : (
        <NoEncontrado/>
        )}
    </Layout>
  )
}


export default EntradaBlog
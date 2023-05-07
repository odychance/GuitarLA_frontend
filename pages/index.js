import Layout from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlog from '../components/ListadoBlog'
import Curso from '../components/Curso'
import { useEffect, useState } from 'react'


export default function Home() {

  const [guitarras, setGuitarras] = useState([])
  const [curso, setCurso] = useState([])
  const [entradasBlog, setEntradasBlog] = useState([])

  useEffect( () => {
      const consultarAPI = async () => {
          const urlGuitarras = `${process.env.NEXT_PUBLIC_API_URL}/tiendas`
          const urlCurso = `${process.env.NEXT_PUBLIC_API_URL}/cursos`
          const urlBlog = `${process.env.NEXT_PUBLIC_API_URL}/blogs?_limit=3&_sort=created_at:desc`


          const [resGuitarras, resCurso, resBlog] = await Promise.all([
            fetch(urlGuitarras),
            fetch(urlCurso),
            fetch(urlBlog)
          ])

          const [guitarras, cursos, blog] = await Promise.all([
            resGuitarras.json(),
            resCurso.json(),
            resBlog.json()
          ])
        
          setGuitarras(guitarras)
          setCurso(cursos)
          setEntradasBlog(blog)

      }
      consultarAPI()
  }, []) 

  return (
      <Layout
        guitarras={guitarras[6]}
        pagina="Inicio"
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Coleccion</h1>
          <Listado 
            guitarras={guitarras}
          />
        </main>

        <Curso
        curso={curso}

        />

        <section className='contenedor'>
          <ListadoBlog
            blogs={entradasBlog}
          />
        </section>

      </Layout>
  )
}

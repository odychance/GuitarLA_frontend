import {useEffect, useState} from 'react'
import Layout from "../components/Layout"
import NuestrosCursos from '../components/NuestrosCursos'

const nuestros_cursos = () => {

  const [nuestrosCursosAct, setNuestrosCursosAct] = useState([])

  useEffect( () => {
    const consultarAPI = async () => {
    const urlNuestrosCursos = `http://localhost:1337/nuestros-cursos`

    const respuesta = await fetch(urlNuestrosCursos)
    const resultadoNuestrosCursos = await respuesta.json()
    setNuestrosCursosAct(resultadoNuestrosCursos)

    }
    consultarAPI()
  }, [])


return (
    <Layout>
      <div>
        {nuestrosCursosAct.map( curso => (
          <NuestrosCursos
            key={curso.url}
            curso={curso}
          />
        )
        )}

      </div>
    </Layout>

  )
}

export default nuestros_cursos
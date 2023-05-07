import Layout from '../components/Layout'
import Listado from '../components/Listado'
import { useEffect, useState } from 'react'

const Tienda = () => {

    const [guitarras, setGuitarras] = useState([])
    useEffect( () => {
        const consultarAPI = async () => {
            const url = `${process.env.NEXT_PUBLIC_API_URL}/tiendas?_sort=precio:desc`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setGuitarras(resultado)
        }
        consultarAPI()
    }, []) 



  return (
    <Layout
        pagina="Tienda Virtual"
    >
        <main className='contenedor'>
            <h1 className='heading'>Nuetra Colección</h1>
            <Listado 
                guitarras={guitarras}
            />

        </main>
    </Layout>
    )
}

export default Tienda
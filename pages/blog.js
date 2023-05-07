import { useEffect, useState} from 'react'
import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'

const Blog = (/*{entradas}*/) => {
    const [blogs, setBlogs] = useState([])
    useEffect( () => {
        const consultarAPI = async () => {
            const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs?_sort=created_at:desc`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setBlogs(resultado)
        }
        consultarAPI()
    }, []) 

    return (
    <Layout
        pagina="Blog"
    >

        <main className='contenedor'>
            <ListadoBlog
                 blogs={blogs}
            />
        </main>

    </Layout>
    )
}

// export async function getServerSideProps() {
//     const url = 'http://localhost:1337/blogs/'
//     const respuesta = await fetch(url)
//     const resultado = await respuesta.json()

//     return {
//         props: {
//             entradas
//         }
//     }
// }

export default Blog
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Layout from "../../components/Layout"
import Image from "next/image"
import styles from '../../styles/Guitarra.module.css'
import NoEncontrado from "../404"

const Producto = () => {

    const {query: {url}} = useRouter()

    const [productoGuitarra, setProductoGuitarra] = useState(false)

    useEffect(() => {
        const consultarAPI = async () => {
            const urlTienda =  `${process.env.API_URL}/tiendas?url=${url}`
            const respuesta = await fetch(urlTienda)
            const guitarra = await respuesta.json()
            setProductoGuitarra(guitarra[0])
        }
    consultarAPI()
    }, [])

    // const {Descripcion, imagen, nombre, precio} = productoGuitarra

    return (
      <Layout
      pagina={productoGuitarra?.nombre}
      withOutLayout={!productoGuitarra}
      >
        {productoGuitarra ? (
            <div className={styles.guitarra}>
            {productoGuitarra.imagen && <Image layout="responsive" width={180} height={350} src={productoGuitarra.imagen.url} alt={`Imagen guitarra ${productoGuitarra.nombre}`} />
            }
                <div className={styles.contenido}>
                    <h3 className={styles.contenido}>{productoGuitarra.nombre}</h3>
                    <p className={styles.descripcion}>{productoGuitarra.Descripcion}</p>
                    <p className={styles.precio}>${productoGuitarra.precio}</p>

                    <form className={styles.formulario}>
                        <label>Cantidad</label>

                        <select>
                            <option value=''>-- Seleccione --</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                        </select>

                        <input
                            type="submit"
                            value="Agregar al Carrito">
                        </input>
                    </form>
                </div>
            </div>
        ) : (
            <NoEncontrado />
            )}

      </Layout>
  )
}

export default Producto
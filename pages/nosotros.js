import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '/styles/nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        pagina="Nosotros"
    >
        <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>

            <div className={styles.contenido}>
                <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre Nosotros' />

                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla mi, finibus sit amet varius non, semper a nunc. Sed volutpat augue a est dapibus ultrices. Ut congue magna in tempor dictum. Mauris euismod cursus augue, id lacinia tellus. Nam mollis risus eu ex gravida pharetra. Sed porta semper ligula in ullamcorper. Sed ullamcorper lacus nisl, nec viverra felis volutpat vel.</p>

                    <p>Nunc semper consequat risus ut dictum. Aenean lacinia ultrices elit, sollicitudin volutpat nisl faucibus sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec maximus feugiat cursus. Curabitur vel vulputate diam. Morbi vel efficitur diam. Mauris pretium orci massa. In finibus nisi et lorem volutpat, sed auctor erat consequat.</p>
                </div>
            </div>
        </main>


    </Layout>
    )
}

export default Nosotros
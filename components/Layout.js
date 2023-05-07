import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina, withOutLayout, guitarras}) => {
  return (
    <div>
        <Head>
            <title>GuitarLA - {pagina}</title>
            <meta name="description" content="Sitio web de venta de guitarras"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
        </Head>

        {!withOutLayout && <Header
          guitarras={guitarras}

        />}
        {children}
        {!withOutLayout && <Footer />}
    </div>
  )
}

Layout.defaultProps = {
  guitarras: null
}

export default Layout
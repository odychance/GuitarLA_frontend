import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.error = () => {}
  return <Component {...pageProps} />
}

export default MyApp

import StateContext from '../context/StateContext'
import Layout from '../layout/Layout'
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
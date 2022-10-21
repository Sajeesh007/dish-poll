import Context from '@/store/Context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-indigo-200'>
      <Context>
        <Component {...pageProps} />
      </Context>
    </div> )
}

export default MyApp

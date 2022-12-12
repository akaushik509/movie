import '../styles/globals.css'
import Navbar from "../Components/Navbar"
import { Provider } from 'react-redux'
import {store} from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar/>
      <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp

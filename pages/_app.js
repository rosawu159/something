import '@/styles/globals.css'
import { IntlProvider } from "react-intl";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

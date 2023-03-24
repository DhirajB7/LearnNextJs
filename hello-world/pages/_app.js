import '@/styles/globals.css'

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}


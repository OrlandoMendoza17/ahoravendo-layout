import "tailwindcss/tailwind.css"
import "../styles/App.scss";
import { Montserrat } from 'next/font/google'

import type { AppProps } from 'next/app'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  )
}

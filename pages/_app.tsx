import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import {RecoilRoot} from 'recoil'
export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
    <Component {...pageProps} />
    <Analytics />
  </RecoilRoot>
}

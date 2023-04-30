import '@/styles/globals.css'
import { studioTheme } from '@/ui-components'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import type { AppProps } from 'next/app'
import config from '../aws-exports'

Amplify.configure(config)


export default function App({ Component, pageProps }: AppProps) {
  return <AmplifyProvider theme={studioTheme}><Component {...pageProps} /></AmplifyProvider>
}

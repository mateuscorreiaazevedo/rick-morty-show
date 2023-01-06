import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NextNProgress from 'nextjs-progressbar'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import React from 'react'
import { ThemeProvider } from '@/modules/core'

function App ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NextNProgress
        color='linear-gradient(to top, #10bba8, #f67b39)'
        options={{ showSpinner: false }}
      />
      <ToastContainer />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

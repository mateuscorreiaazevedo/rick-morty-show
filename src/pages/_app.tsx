import { LayoutComponent } from '@/main/layout'
import { ThemeProvider } from '@/modules/core'
import { AppProps } from 'next/app'
import '../styles/sass/styles.scss'
import '../styles/globals.css'
import React from 'react'

function App ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ThemeProvider>
  )
}

export default App

import { AppProps } from 'next/app'
import '../styles/globals.css'
import React from 'react'
import { ThemeProvider } from '@/modules/core'
import { LayoutComponent } from '@/main/layout'

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

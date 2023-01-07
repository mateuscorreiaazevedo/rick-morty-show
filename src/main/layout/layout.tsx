import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NextNProgress from 'nextjs-progressbar'
import { Footer, Header } from '@/modules/core'
import Head from 'next/head'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Rick & Morty Show | Mateus Azevedo</title>
      </Head>
      <NextNProgress color="#f67b39" />
      <ToastContainer />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

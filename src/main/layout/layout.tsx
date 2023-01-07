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
        <meta name="description" content="Rick and MortyShow. Portfolio project using public Rick & Morty API. Contains characters, locations, and episodes featured in the series." />
        <meta name="keywords" content="Rick and Morty, Morty, NextJs, project, Rick, Mateus Azevedo, project portfolio, ReactJs, mateus dev, public api, api pública" />
        <title>Rick & Morty Show | Mateus Azevedo</title>
      </Head>
      <NextNProgress color="#f67b39" />
      <ToastContainer />
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}

export default Layout

import { ToastContainer } from 'react-toastify'
import { Footer, Header } from '@/modules/core'
import NextNProgress from 'nextjs-progressbar'
import 'react-toastify/dist/ReactToastify.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Head from 'next/head'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Rick and MortyShow. Portfolio project using public Rick & Morty API. Contains characters, locations, and episodes featured in the series."
        />
        <meta
          name="keywords"
          content="Rick and Morty, Morty, NextJs, project, Rick, Mateus Azevedo, project portfolio, ReactJs, mateus dev, public api, api pública"
        />
        <title>Rick & Morty Show | Mateus Azevedo</title>
      </Head>
      <NextNProgress color="linear-gradient(to top left, #e43457, #53aaeb)" />
      <ToastContainer />
      <Header />
        <main className=" container mx-auto my-4">{children}</main>
      <Footer />
    </>
  )
}

export default Layout

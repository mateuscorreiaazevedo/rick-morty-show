/* eslint-disable react/no-unescaped-entities */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="pt-br">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;300;400;500;600;700&display=swap');
        </style>
      </Head>
      <body
        className="
          w-full
          min-h-screen
          bg-gradient-to-br
          from-primary
          to-terciary
          text-darken
          dark:text-lighten
          dark:bg-gradient-to-t
          dark:from-darken
          dark:to-darken
          transition-all
        "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

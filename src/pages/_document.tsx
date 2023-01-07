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
          text-daken
          bg-green-50
          dark:bg-darken
          dark:text-lighten
          transition-all
          scroll-smooth
        "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

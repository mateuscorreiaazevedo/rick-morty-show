import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full h-32 flex items-center justify-center">
      <div className="container flex items-center justify-between xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <Image
            className="w-40 hover:animate-ping"
            src="/images/logo-footer.png"
            alt="Rick and Morty - logo"
            height={100}
            width={100}
          />
          <span className="italic text-darken dark:text-primary">Show</span> &copy; - 2023
        </div>
        <p className="text-xl text-darken dark:text-primary">
          Powered by{' '}
          <a
            href="https://mateusdev.com.br"
            target="_blank"
            rel="noreferrer"
            title="Mateus dev"
            className="transition-all hover:text-purple-700 dark:hover:text-secondary font-bold"
          >
            Mateus Azevedo
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer

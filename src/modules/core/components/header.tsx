import { useRouter } from 'next/router'
import Tooltip from './tooltip'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SwitchTheme from './switch-theme'

type Routes = {
  url: string
  label: string
}

const routes: Routes[] = [
  { label: 'Personagens', url: '/characters' },
  { label: 'Locais', url: '/locations' },
  { label: 'Episódios', url: '/episodes' },
  { label: 'Sobre', url: '/about' }
]

const Header = () => {
  const router = useRouter()

  console.log(router.pathname)

  return (
    <header
      className="
        w-full
        h-20
        sticky
        top-0
        flex
        mb-10
        items-center
        justify-center
        bg-primary
        dark:bg-shadow
        shadow-2xl
      "
    >
      <div className="container flex items-center justify-between">
        <div>
          <Tooltip label="Home">
            <Link href="/">
              <Image
                className="w-32 rounded-full hover:animate-pulse"
                src="/images/logo-header.png"
                alt="Rick and Morty Logo"
                width={100}
                height={100}
                loading="lazy"
              />
            </Link>
          </Tooltip>
        </div>
        <>
        </>
        <nav>
          <ul className="flex gap-3">
            {routes.map(route => (
              <li
                key={route.label}
                className="
                  group/route
                  text-lg
                  text-darken
                  transition-all
                  dark:text-lighten
                  hover:text-secondary
                  dark:hover:text-secondary
                "
              >
                <Link
                  href={route.url}
                  className={`
                    ${router.pathname === route.url ? 'text-secondary' : ''}
                  `}
                >
                  {route.label}
                </Link>
                <div
                  className={`
                    group-hover/route:w-full
                    h-1
                    transition-all
                    rounded
                    bg-secondary
                    w-0
                    ${router.pathname === route.url ? 'w-full' : ''}
                  `}
                />
              </li>
            ))}
            <li>
              <SwitchTheme/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

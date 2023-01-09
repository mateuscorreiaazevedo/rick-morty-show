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
  { label: 'Personagens', url: '/characters/list' },
  { label: 'Localizações', url: '/locations/list' },
  { label: 'Episódios', url: '/episodes/list' },
  { label: 'Sobre', url: '/about' }
]

const Header = () => {
  const router = useRouter()

  return (
    <header
      className="
        w-full
        h-24
        sticky
        top-0
        flex
        z-50
        items-center
      "
    >
      <div className="container px-4 mx-auto rounded-3xl backdrop-blur-sm bg-primary-alpha dark:bg-gray-alpha p-2 flex items-center justify-between">
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
        <></>
        <nav>
          <ul className="flex gap-3">
            {routes.map((route) => (
              <li
                key={route.label}
                className="
                  group/route
                  text-lg
                  text-darken
                  transition-all
                  dark:text-lighten
                  hover:text-secondary
                  dark:hover:text-primary
                "
              >
                <Link
                  href={route.url}
                  className={`
                    ${router.pathname === route.url ? 'text-secondary dark:text-primary' : ''}
                  `}
                >
                  {route.label}
                </Link>
                <div
                  className={`
                    group-hover/route:w-full
                    h-1
                    transition-all
                    ease-in-out
                    rounded
                    bg-secondary
                    dark:bg-primary
                    w-0
                    ${router.pathname === route.url ? 'w-4' : ''}
                  `}
                />
              </li>
            ))}
            <li>
              <SwitchTheme />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

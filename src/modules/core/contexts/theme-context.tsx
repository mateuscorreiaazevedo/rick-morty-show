import { useLocalStorage } from '..'
import React from 'react'

type ContextProps = {
  theme: string
  isLight: boolean
  handleTheme: () => void
}

type ProviderProps = { children: React.ReactNode }

const Context = React.createContext<ContextProps | null>(null)

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useLocalStorage('R&M-theme', 'light')
  const [isLight, setIsLight] = React.useState(true)

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    if (theme === 'light') setIsLight(true)
    if (theme === 'dark') setIsLight(false)
  }, [theme])

  return <Context.Provider value={{ theme, handleTheme, isLight }}>{children}</Context.Provider>
}

export const useTheme = () => {
  const context = React.useContext(Context)

  if (!context) throw new Error('Error on ThemeProvider ')

  return {
    ...context
  }
}

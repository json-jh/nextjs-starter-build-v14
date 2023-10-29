'use client'

import React, { ReactNode, createContext, useEffect, useState } from 'react'

export type Align = 'left' | 'right' | 'center' | 'full'

export type Theme = 'system' | 'light' | 'dark'

export interface Container {
  align?: Align
}

export interface Aside {
  align?: Omit<Align, 'center' | 'full'>
  isShow?: boolean
}

export const defaultValue: {
  container: Container
  aside: Aside
  setContainer: (container: Container) => void
  setAside: (aside: Aside) => void
  theme: Theme
  themes: Theme[]
  setTheme: (theme:Theme) => void
  changeTheme: (theme:Theme) => void
  setThemes: (themes:Theme[]) => void
  changeContainer: (container:Container) => void
  changeAside: (aside:Aside) => void
} = {
  container: {
    align: 'full'
  },
  aside: {
    align: 'left',
    isShow: false
  },
  setContainer: ({}) => {},
  setAside: ({}) => {},
  theme: 'system',
  themes: [],
  setTheme: () => {},
  changeTheme: () => {},
  setThemes: () => {},
  changeContainer: () => {},
  changeAside: () => {}
}

export const UiContext = createContext(defaultValue)

interface Props {
  children: ReactNode
  theme?: Theme
}

export default function UiProvider({ children, theme:initTheme }: Props) {
  const [themes, setThemes] = useState<Theme[]>(['system', 'light', 'dark']);
  const [theme, setTheme] = useState<Theme>(initTheme || 'system');
  const [container, setContainer] = useState<Container>(defaultValue.container)
  const [aside, setAside] = useState<Aside>(defaultValue.aside)

  useEffect(() => {
    setTheme(localStorage.getItem('theme') as Theme || defaultValue.theme)
    setContainer({
      ...container,
      align: localStorage.getItem('ui.container.align') as Align || defaultValue.container.align
    })
    setAside({
      ...aside,
      align: localStorage.getItem('ui.aside.align') as Omit<Align, 'center' | 'full'> || defaultValue.aside.align
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeTheme = (paramTheme: Theme) => {
    setTheme(paramTheme)
    localStorage.setItem('theme', paramTheme)
  }
  const changeContainer = (paramContainer: Container) => {
    setContainer({
      ...container,
      ...paramContainer
    })
    localStorage.setItem('ui.container.align', paramContainer.align as string)
  }
  const changeAside = (paramAside: Aside) => {
    setAside({
      ...aside,
      ...paramAside
    })
    localStorage.setItem('ui.aside.align', paramAside.align as string)
  }
  return (
    <UiContext.Provider value={{
      container,
      aside,
      setContainer,
      setAside,
      theme,
      themes,
      setTheme,
      setThemes,
      changeTheme,
      changeContainer,
      changeAside
    }}
    >
      <div className={`theme-provider ${theme} transition-[background-color]`}>
        {children}
      </div>
    </UiContext.Provider>
  )
}

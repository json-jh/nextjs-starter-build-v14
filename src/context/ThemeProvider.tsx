'use client'

import React, { ReactNode, createContext, useEffect, useState } from 'react'

const defaultValue:{
  theme: string
  themes: string[]
  setTheme: (theme:string) => void
  setThemes: (theme:string[]) => void
} = {
  theme: 'system',
  themes: [],
  setTheme: () => {},
  setThemes: () => {}
}

export const ThemeContext = createContext(defaultValue)

export default function ThemeProvider({ children, theme:initTheme }: { children: ReactNode, theme: string}) {
  const [themes, setThemes] = useState(['system', 'light', 'dark']);
  const [theme, setTheme] = useState(initTheme || 'system');
  
  useEffect(() => {
    setTheme(localStorage.getItem('theme') || initTheme)
  }, [initTheme])
  
  return (
    <ThemeContext.Provider value={{ theme, themes, setTheme, setThemes }}>
      <div className={`theme-provider theme-${theme} transition-[background-color]`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
import { createContext, useContext, useMemo } from 'react'
import { useColorScheme } from 'react-native'
import { DarkTheme, LightTheme } from '../resrcs/Theme'

// Create context -----------------------------------------------
const ThemeContext = createContext(LightTheme)

// Context Provider ---------------------------------------------
export default function ThemeProvider({ children }) {
  const colorScheme = useColorScheme() // "light" or "dark"

  const theme = useMemo(() => {
    return colorScheme === 'dark' ? DarkTheme : LightTheme
  }, [colorScheme])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

// Custom Hook ---------------------------------------------------
export const useTheme = () => useContext(ThemeContext)

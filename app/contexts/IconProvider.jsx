import { createContext, useContext } from 'react'
import * as Icons from '../resrcs/Icons'

// Create context -----------------------------------------------
export const IconContext = createContext(Icons)

// Context Provider -----------------------------------------------
export default function IconProvider({ children }) {
  return <IconContext.Provider value={Icons}>{children}</IconContext.Provider>
}

// Custom Hook ---------------------------------------------------
export const useIcon = () => useContext(IconContext)

import { createContext, useContext } from 'react'
import {Styles} from '../resrcs/Styles'

// Create context -----------------------------------------------
export const StyleContext = createContext(Styles)

// Context Provider -----------------------------------------------
export default function StyleProvider({ children }) {
  return (
    <StyleContext.Provider value={Styles}>{children}</StyleContext.Provider>
  )
}

// Custom Hook ---------------------------------------------------
export const useStyle = () => useContext(StyleContext)

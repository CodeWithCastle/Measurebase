import { createContext, useContext } from 'react'
import * as Compx from '../resrcs/Compx'

// Create context -----------------------------------------------
export const CompxContext = createContext(Compx)

// Context Provider -----------------------------------------------
export default function CompxProvider({ children }) {
  return <CompxContext.Provider value={Compx}>{children}</CompxContext.Provider>
}

// Custom Hook ---------------------------------------------------
export const useCompx = () => useContext(CompxContext)

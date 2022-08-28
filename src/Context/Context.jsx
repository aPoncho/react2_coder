import React from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  return (
    <GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
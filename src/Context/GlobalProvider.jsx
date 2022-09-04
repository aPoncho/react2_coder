import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {


  return (
    <GlobalContext.Provider value={{itemQty}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

export const TransactionContext = React.createContext()

export const TransactionProvider = ({ children }) => {
  const contractAddress = '0xEE0e0f0fdc5CE700623a5C194EC40F942DFD2f99'
  const [currentUser, setCurrentUser] = useState()
  const { authenticate, isAuthenticated, user, logout } = useMoralis()
  const logIn = async () => {
    try {
      if (!isAuthenticated) {
        await authenticate()
        let newUser = user.get('ethAddress')
        setCurrentUser(newUser)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = async () => {
    try {
      if (isAuthenticated) {
        await logout()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TransactionContext.Provider value={{ logIn, currentUser, logOut, contractAddress }}>
      {children}
    </TransactionContext.Provider>
  )
}

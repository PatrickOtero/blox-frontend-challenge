import { createContext } from 'react'
import { ICompProps, ILoginContext } from '../@Types/context/context'
import useLoginContextProvider from '../hooks/Login/useLoginContextProvider'

const loginContext = createContext({} as ILoginContext)

export function LoginContextProvider({ children }: ICompProps) {
  const loginContextProvider = useLoginContextProvider()
  return (
    <loginContext.Provider value={loginContextProvider}>
      {children}
    </loginContext.Provider>
  )
}

export default loginContext
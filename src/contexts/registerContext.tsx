import { createContext } from 'react'
import { ICompProps, IRegisterContext } from '../@Types/context/context'
import useRegisterContextProvider from '../hooks/Register/useRegisterContextProvider'

const registerContext = createContext({} as IRegisterContext)

export function RegisterContextProvider({ children }: ICompProps) {
  const registerContextProvider = useRegisterContextProvider()
  return (
    <registerContext.Provider value={registerContextProvider}>
      {children}
    </registerContext.Provider>
  )
}

export default registerContext
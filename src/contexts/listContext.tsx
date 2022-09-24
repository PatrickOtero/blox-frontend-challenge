import { createContext } from 'react'
import { ICompProps, IListContext } from '../@Types/context/context'
import useListContextProvider from '../hooks/List/useListContextProvider'

const listContext = createContext({} as IListContext)

export function ListContextProvider({ children }: ICompProps) {
  const ListContextProvider = useListContextProvider()
  return (
    <listContext.Provider value={ListContextProvider}>
      {children}
    </listContext.Provider>
  )
}

export default listContext
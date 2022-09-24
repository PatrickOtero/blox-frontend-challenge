import { useContext } from 'react'
import listContext from '../../contexts/listContext'

function useListContext() {
  return useContext(listContext)
}

export default useListContext

import { useContext } from 'react'
import loginContext from '../../contexts/loginContext'

function useLoginContext() {
  return useContext(loginContext)
}

export default useLoginContext

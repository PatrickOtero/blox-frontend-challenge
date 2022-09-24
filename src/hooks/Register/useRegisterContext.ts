import { useContext } from 'react'
import registerContext from '../../contexts/registerContext'

function useRegisterContext() {
  return useContext(registerContext)
}

export default useRegisterContext

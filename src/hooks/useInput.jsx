// ** React Imports
import { useState, useCallback } from 'react'

const useInput = (initalValue) => {
  const [data, setData] = useState(initalValue)

  const handler = useCallback(
    (e) => {
      const { value, name } = e.target
      setData({
        ...data,
        [name]: value,
      })
    },
    [data],
  )

  return [data, handler, setData]
}

export default useInput

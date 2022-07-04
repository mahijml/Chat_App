import { useEffect, useState } from 'react'

const PREFIX = 'chatApp-clone-'

export default function useLocalStorage( key , initialValue) {
  const prefixKey = PREFIX + key
  const [value , setValue] = useState(()=> {
    const jasonValue = localStorage.getItem(prefixKey)
    if (jasonValue != null) return JSON.parse(jasonValue)
    if ( typeof initialValue === 'function') {
      return initialValue()
    }else {
      return initialValue;
    }
  })

  useEffect(()=> {
    localStorage.setItem(prefixKey, JSON.stringify(value))
  } , [prefixKey , value])

  return [value, setValue]
}

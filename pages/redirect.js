import { useEffect } from 'react'

export default function Redirect() {
  useEffect(() => {
    window.location = '/'
  }, [])

  return null
}

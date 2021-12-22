import { useEffect } from 'react'

export default function Redirect() {
  useEffect(() => {
    window.location = '/acerca-de'
  }, [])

  return null
}

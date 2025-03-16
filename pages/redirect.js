import { useEffect } from 'react'

export default function Redirect() {
  useEffect(() => {
    window.location = 'https://www.alquimistaespiritual.com/'
  }, [])

  return null
}

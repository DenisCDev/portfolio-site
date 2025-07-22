'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const GA_TRACKING_ID = 'G-XXXXXXX'

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  return null
}

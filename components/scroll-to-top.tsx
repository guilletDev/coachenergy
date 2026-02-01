"use client"

import { useEffect } from "react"

/**
 * Component that scrolls to the top of the page on initial load/refresh.
 * This ensures the page always starts from the top.
 */
export default function ScrollToTop() {
    useEffect(() => {
        // Scroll to top on page load/refresh
        window.scrollTo(0, 0)

        // Also handle the case where browser tries to restore scroll position
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual'
        }
    }, [])

    return null
}

/**
 * Scroll to a section with offset to account for the fixed navbar.
 * The offset matches the navbar height to scroll exactly to the section.
 */
export const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
        // Navbar height offset to scroll exactly to section start
        // Using a slightly smaller offset ensures the section title is clearly visible
        const isMobile = window.innerWidth < 768
        const offset = isMobile ? 64 : 80

        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        })
    }
}

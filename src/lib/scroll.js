export const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches
export const goTo = (sel) => {
  const el = document.querySelector(sel); if (!el) return
  window.__lenis ? window.__lenis.scrollTo(el) : el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth' })
}
export const setScrollLock = (l) => {
  if (window.__lenis) l ? window.__lenis.stop() : window.__lenis.start()
  document.body.style.overflow = l ? 'hidden' : ''
}
